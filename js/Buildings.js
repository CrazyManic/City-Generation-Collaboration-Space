var building_baseheight = [30, 100];

class Building{
        constructor(urbanness, create_position)
        {
            console.log("Create new building at "+create_position.x+" "+create_position.y+" "+create_position.z);
            console.log("Urbanness is "+urbanness);

            // 1: using the urbanness, determine which building to generate
            // lower to 0 = more chance of a house
            var threshold_highrise = 100 - urbanness;
            var buildingtype_rand = Math.random()*100;
            console.log(buildingtype_rand);
            if (buildingtype_rand > threshold_highrise)
            {
                console.log("Generate highrise");
            }
            else{ console.log("Generate house"); }

            // 2: using the urbanness, change the building size
            // lower to 0 = smaller building

            // set building material and geometry
            var bldg_mat = new THREE.MeshPhongMaterial();
            var bldg_geom = new THREE.BoxGeometry(15, 30, 15);            
            this.buildingMesh = new THREE.Mesh(bldg_geom, bldg_mat);

            // set building position to the given coordinates
            this.buildingMesh.position.x = create_position.x;
            this.buildingMesh.position.y = create_position.y;
            this.buildingMesh.position.z = create_position.z;

            // add building mesh to the scene
            scene.add(this.buildingMesh);


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