// JavaScript source code
// Constants
const gridSize = 40; // arbitrary and untested, feel free to change
const streetWidth = 5;

class Block {
    constructor(position) {
        // something from constructor about its vars
        this.position = position; //vec3

        // foundation floor
        this.floorMaterial = new THREE.MeshLambertMaterial();
        this.floorMaterial.color = new THREE.Color(0.45, 0.45, 0.45);
        this.floorGeometry = new THREE.PlaneGeometry(gridSize, gridSize, 10, 10);
        this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
        this.floor.position.y = -10;
        this.floor.rotation.x = Math.PI / 2;
        this.floor.position = position;
    }
    
}