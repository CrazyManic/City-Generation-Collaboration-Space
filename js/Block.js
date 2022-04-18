// JavaScript source code
// Constants
const gridSize = 20; // arbitrary and untested, feel free to change
const streetWidth = 5;

class Block {
    constructor(position, scene) {
        // something from constructor about its vars
        this.position = position; //vec3

        // foundation floor
        this.floorMaterial = new THREE.MeshLambertMaterial();
        this.floorMaterial.color = new THREE.Color(0.45, 0.45, 0.45);//
        this.floorMaterial.wireframe = true; //just for temporary testing. 
        this.floorGeometry = new THREE.PlaneGeometry(gridSize, gridSize, 1, 1);
        this.floor = new THREE.Mesh(this.floorGeometry, this.floorMaterial);
        scene.add(this.floor);
        this.floor.rotation.x = -Math.PI / 2;
        this.floor.position.y = position.y;
        this.floor.position.x = position.x;
        this.floor.position.z = position.z;
        //this.floor.position = position;
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