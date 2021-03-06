// 0 - house, 1 - highrise
const building_baseheight = [3, 35];
const building_height_randomness = [1.2, 1.7]; // as of right now, unused :(
const blockLength = gridSize - streetWidth;
const blockLengthOffset = 10; // change this to modifiy how wide the building is (used in regular buildings)
const randExtraHeight = 5;
const groundGeo = new THREE.PlaneGeometry(blockLength, blockLength);
const groundMat = new THREE.MeshLambertMaterial();
const groundColour = new THREE.Color(0.7,0.7,0.78);
groundMat.color = groundColour;

class Building{
    constructor(urbanness, create_position, paramColours, type)
    {
        //console.log("Create new building at "+create_position.x+" "+create_position.y+" "+create_position.z);
        this.position = create_position;
        this.height;
        this.buildingType = 0;
        this.bldg_geom;
        this.bldg_mat;
        // In OOP we put this in a different function, so that it can have a custom definition
        // for descendant classes, but all other functionality is common to all. 
        this.Generate(urbanness, paramColours, type);
              
        this.buildingMesh = new THREE.Mesh(this.bldg_geom, this.bldg_mat);
        //this.buildingMesh.receiveShadow = true;
        this.buildingMesh.castShadow = true;
        this.buildingMesh.receiveShadow = true;

        // set building position to the given coordinates
        this.buildingMesh.position.x = create_position.x;
        this.buildingMesh.position.z = create_position.z;
        this.buildingMesh.position.y = create_position.y + this.height / 2;

        // add building mesh to the scene
        scene.add(this.buildingMesh);

        this.groundMesh = new THREE.Mesh(groundGeo, groundMat);
        this.groundMesh.receiveShadow = true;
        this.groundMesh.rotation.x = -Math.PI / 2;
        this.groundMesh.position.set(create_position.x, create_position.y, create_position.z);
        scene.add(this.groundMesh);
    }

    //pColor1, pColor2, pColor3
    Generate(urbanness, paramColours, type){ // Overwrite this function in descendent classes to implement different building types. 
        var singlehouseLength = blockLength - (blockLengthOffset * Math.random());
        this.height = building_baseheight[0] + randExtraHeight * Math.random() *2; // 2x for more varied building height
        // * building_height_randomness[this.buildingType] * Math.random()
        // would be good to add some random variation
        this.bldg_geom = new THREE.BoxGeometry(singlehouseLength, this.height, singlehouseLength);    
        this.bldg_mat = new THREE.MeshPhongMaterial();  
        this.bldg_mat.color = paramColours[0];
        //console.log(this.height);
    }

    Destroy(){
        scene.remove(this.buildingMesh);
        scene.remove(this.groundMesh);
        delete this.groundMesh;
        this.DestroyExtras();
        scene.remove(this.groundMesh);
        delete this.groundMesh;
        delete this.buildingMesh;
        delete this.height;
        delete this.buildingType;
        delete this;
    }

    DestroyExtras(){ // In case a descendant class needs to delete more data. 

    }
}
    // // use the urbanness to determine which building to create
    // var buildingtype = "highrise";
    // switch(buildingtype)
    // {
    //     // create building geometry/mesh parameters 
    //     case "house":
    //         buildingtype = "house";
    //         var newbldg_height = building_baseheight[0];
    //         break;
    //     case "highrise":
    //         buildingtype = "highrise";
    //         var newbldg_height = building_baseheight[1];
    //         break;
    // }
    // // add modifiers for randomness between buildings
    // var modifiers = new Array();
    // // pass building geometry/mesh parameters here
    // makenew_building(buildingtype, create_position, newbldg_height);

    // function makenew_building(buildingtype, create_position, bldg_height)
    // {
    //     console.log("Create new "+buildingtype+" at "+create_position.x);
    //     var bldg_mat = new THREE.MeshPhongMaterial();
    //     var bldg_boxsize = new THREE.Vector3(15, bldg_height, 15);
    //     var bldg_geom = new THREE.BoxGeometry(bldg_boxsize.x, bldg_boxsize.y, bldg_boxsize.z);
    //     var new_bldg = new THREE.Mesh(bldg_geom, bldg_mat);
    //     new_bldg.position = create_position;
    //     scene.add(new_bldg);
    // }