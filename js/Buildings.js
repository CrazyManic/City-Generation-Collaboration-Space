// 0 - house, 1 - highrise
var building_baseheight = [30, 100];
const building_height_randomness = [1.2, 1.7];
const blockLength = gridSize - streetWidth;

class Building{
    constructor(urbanness, create_position, pColor1, pColor2, pColor3)
    {
        console.log("Create new building at "+create_position.x+" "+create_position.y+" "+create_position.z);
        
        this.height;
        this.buildingType = 0;
        this.bldg_geom;
        this.bldg_mat;
        // In OOP we put this in a different function, so that it can have a custom definition
        // for descendant classes, but all other functionality is common to all. 
        this.Generate(urbanness, pColor1, pColor2, pColor3);
        
              
        this.buildingMesh = new THREE.Mesh(this.bldg_geom, this.bldg_mat);

        // set building position to the given coordinates
        this.buildingMesh.position.x = create_position.x;
        this.buildingMesh.position.z = create_position.z;
        this.buildingMesh.position.y = create_position.y + this.height / 2;

        // add building mesh to the scene
        scene.add(this.buildingMesh);
    }

    Generate(urbanness, pColor1, pColor2, pColor3){ // Overwrite this function in descendent classes to implement different building types. 
        console.log("Urbanness is "+urbanness);
        // 1: using the urbanness, determine which building to generate
        // lower to 0 = more chance of a house
        var threshold_highrise = 100 - urbanness;
        var buildingtype_rand = Math.random()*100;
        console.log(buildingtype_rand);
        // 2: using the urbanness, change the building size
        // lower to 0 = smaller building
        if (buildingtype_rand > threshold_highrise)
        {
            console.log("Generate highrise");
            this.buildingType = 1; // highrise
        }
        else{ 
            console.log("Generate house"); 
            this.buildingType = 0;
        }
        
        this.height = building_baseheight[this.buildingType];// * building_height_randomness[this.buildingType] * Math.random()
        // would be good to add some random variation

        this.bldg_geom = new THREE.BoxGeometry(blockLength, this.height, blockLength);    
        this.bldg_mat = new THREE.MeshPhongMaterial();  
        this.bldg_mat.color = pColor1;
    }

    Destroy(){
        scene.remove(this.buildingMesh);
        this.DestroyExtras();
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