// JavaScript source code
// Constants
const gridSize = 20; // arbitrary and untested, feel free to change
const streetWidth = 5;
const buildingWidth = gridSize - streetWidth;

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
        var flatRotation = -Math.PI / 2;
        this.floor.rotation.x = flatRotation;
        this.floor.position.y = position.y;
        this.floor.position.x = position.x;
        this.floor.position.z = position.z;
        //this.floor.position = position;
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
            stripMesh.position.set(this.position.x, this.position.y + 0.01, this.position.z);// raise it just above the road to stop z-fighting
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
            this.roadPlanes.push(roadMesh);
            for (var j=0; j<this.stripPlanes.length;j++){
                this.stripPlanes[j].rotation.x = flatRotation;
                scene.add(this.stripPlanes[j]);
            }
            scene.add(roadMesh);
        }
    }

    destroy(){
        this.scene.remove(this.floor);
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

// you can just call gridSize with this file imported  :)
//const GetGridSize = function(){ return gridSize; }