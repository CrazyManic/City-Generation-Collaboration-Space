// JavaScript source code
// Constants
const gridSize = 20; // arbitrary and untested, feel free to change
const streetWidth = 5;
const buildingWidth = gridSize - streetWidth;
const flatRotation = -Math.PI / 2;
const randomOffset = 30;
const highrise_min_threshold = 50;
const highrise_threshold = 70;
const house_threshold = 20;
const farmhouse_threshold = 10;
const grassplane_threshold = 7;

class Block {
    constructor(position, scene) {
        //console.log("Building a block");
        // something from constructor about its vars
        this.position = position; //vec3
        this.scene = scene;
        // foundation floor
        this.floorMaterial = new THREE.MeshLambertMaterial();
        this.floorMaterial.color = new THREE.Color(0.45, 0.45, 0.45);//
        this.floorMaterial.wireframe = true; //just for temporary testing. 
        this.floorGeometry = new THREE.PlaneGeometry(gridSize, gridSize, 1, 1);
        this.floor = new THREE.Mesh(this.floorGeometry, this.floorMaterial);
        scene.add(this.floor);
        
        this.floor.rotation.x = flatRotation;
        this.floor.position.set(this.position.x, this.position.y - 0.05, this.position.z);

        // Building
        var randCol = new THREE.Color(Math.random(), Math.random(), Math.random());
        // Decide on the building with some randomness
        var randomBuildingSeed = cur_urbanness + THREE.Math.randInt(-randomOffset, randomOffset);
        if (randomBuildingSeed > highrise_threshold && randomBuildingSeed < highrise_min_threshold)
            this.building = new HighriseBuilding(cur_urbanness, this.position, [randCol]);
        else if (randomBuildingSeed > house_threshold){
            if (Math.random() > 0.5)
                this.building = new Building(cur_urbanness, this.position, [randCol]);
            else 
                this.building = new MeshBuilding(cur_urbanness, this.position, null, 0)
        }
        else if (randomBuildingSeed > farmhouse_threshold)
            this.building = new FarmBuilding(cur_urbanness, this.position, [randCol]);
        else
            this.building = new GrassPlaneBuilding(cur_urbanness, this.position);
        
        // Mesh building 
        //console.log('block knows basic geos as: ');
        //console.log(basic_house_geos);
        

        // Roads
        this.roadGeoLong = new THREE.PlaneGeometry(streetWidth,gridSize);
        this.roadGeoShort = new THREE.PlaneGeometry(gridSize - streetWidth, streetWidth);
        this.stripGeo = new THREE.PlaneGeometry((gridSize - streetWidth) / 2, streetWidth / 6);
        this.roadColour = new THREE.Color(0.1,0.1,0.1);
        this.stripColour = new THREE.Color(0.9,0.9,0.9);
        this.roadMat = new THREE.MeshLambertMaterial();
        this.roadMat.color = this.roadColour;
        this.stripMat = new THREE.MeshLambertMaterial();
        this.stripMat.color = this.stripColour;
        this.roadPlanes = [];
        this.stripPlanes = [];
        for (var i=0; i<4; i++){
            var roadMesh;
            var stripMesh;
            stripMesh = new THREE.Mesh(this.stripGeo,this.stripMat);
            stripMesh.position.set(this.position.x, this.position.y + 0.04, this.position.z);// raise it just above the road to stop z-fighting
            this.stripPlanes.push(stripMesh);
            if (i<2){ // long roads along z axis
                roadMesh = new THREE.Mesh(this.roadGeoLong, this.roadMat);
                roadMesh.position.set(this.position.x, this.position.y, this.position.z);
                roadMesh.position.x += (i%2==0?1:-1) * gridSize / 2;
                stripMesh.position.x += (i%2==0?1:-1) * gridSize / 2;
                stripMesh.rotation.z += flatRotation;
            } else {  // short roads along x asix
                roadMesh = new THREE.Mesh(this.roadGeoShort, this.roadMat);
                roadMesh.position.set(this.position.x, this.position.y, this.position.z);
                roadMesh.position.z += (i%2==0?1:-1) * gridSize / 2;
                
                stripMesh.position.z += (i%2==0?1:-1) * gridSize / 2;
            }
            roadMesh.rotation.x = flatRotation;
            roadMesh.receiveShadow = true;
            this.roadPlanes.push(roadMesh);
            for (var j=0; j<this.stripPlanes.length;j++){
                this.stripPlanes[j].rotation.x = flatRotation;
                this.stripPlanes[j].receiveShadow = true;
                scene.add(this.stripPlanes[j]);
            }
            scene.add(roadMesh);
        }
    }

    destroy(){
        this.scene.remove(this.floor);
        this.building.Destroy();
        delete this.floorMaterial;
        delete this.floorGeometry;
        delete this.floor;
        delete this.position;
        for (var i=3; i >= 0; i--){
            this.scene.remove(this.roadPlanes[i]);
            delete this.roadPlanes[i].object;
            this.scene.remove(this.stripPlanes[i]);
            delete this.stripPlanes[i].object;
        }
        delete this;
    }
    
}

function RandRange(min, max){
    return Math.random() * (max - min) + min;
}

const Blockf = function(position){
    // something from constructor about its vars
    this.position = position; //vec3

    // foundation floor
    this.floorMaterial = new THREE.MeshLambertMaterial();
    this.floorMaterial.color = new THREE.Color(0.45, 0.45, 0.45);
    this.floorMaterial.wireframe = true; //just for temporary testing. 
    this.floorGeometry = new THREE.PlaneGeometry(gridSize, gridSize, 10, 10);
    this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
    this.floor.rotation.x = Math.PI / 2;
    this.floor.position = position;
    this.floor.position.y = -10;
}