const healthyGrassCol = new THREE.Color(0,1,0);
const dryGrassCol = new THREE.Color(0xe6ff00);
const grassGeo = new THREE.PlaneGeometry(buildingWidth,buildingWidth);
const farmHouseGeo = new THREE.BoxGeometry(gridSize/5, 4,gridSize/5);
//const flatRotation = -Math.PI / 2;

class FarmBuilding extends Building{
    Generate(urbanness, paramColours){
        // grass
        this.grassColor = healthyGrassCol.lerp(dryGrassCol, urbanness / 100);
        var grassMat = new THREE.MeshLambertMaterial();
        grassMat.color = this.grassColor;
        this.grassMesh = new THREE.Mesh(grassGeo, grassMat);
        this.grassMesh.position.set(this.position.x, this.position.y, this.position.z);
        this.grassMesh.rotation.x = flatRotation;
        this.grassMesh.receiveShadow = true;
        scene.add(this.grassMesh);

        // house
        var farmHouseMat = new THREE.MeshLambertMaterial();
        farmHouseMat.color = paramColours[0];
        this.farmHouseMesh = new THREE.Mesh(farmHouseGeo, farmHouseMat);
        this.farmHouseMesh.position.set(this.position.x + buildingWidth/5, this.position.y + 4/2, this.position.z + buildingWidth/5 );
        this.farmHouseMesh.castShadow = true;
        this.farmHouseMesh.receiveShadow = true;
        scene.add(this.farmHouseMesh);
    }

    DestroyExtras(){
        scene.remove(this.farmHouseMesh);
        delete this.farmHouseMesh;
        scene.remove(this.grassMesh);
        delete this.grassMesh;
        delete this.grassColor;
    }
}