const midGrey = new THREE.Color(0.5,0.5,0.5);

class MeshBuilding extends Building {
    Generate(urbanness, paramColors, type){
        this.meshes = [];
        var mesh_geos;
        var materials;
        console.log('Generating MeshBuilding with Type: ' + type);
        //console.log('RandRange(0.6,1): '+RandRange(0.6,1));
        switch (type){
            case 0: // basic house
                mesh_geos = basic_house_geos;
                // Basic House   // body, roof, windows
                var roofMat = new THREE.MeshLambertMaterial();
                roofMat.color = new THREE.Color(RandRange(0.6,1), RandRange(0,0.8),RandRange(0,0.24));
                var bodyMat = new THREE.MeshLambertMaterial();
                bodyMat.color = new THREE.Color(Math.random(), Math.random(), Math.random());
                var windowMat = new THREE.MeshPhongMaterial();
                windowMat.shininess = RandRange(40,120);
                windowMat.color = new THREE.Color(RandRange(0.1,0.9), RandRange(0.8,0.9),1);
                materials = [bodyMat, roofMat, windowMat];
                break;
        }
        // console.log('Mesh geometries: ');
        // console.log(mesh_geos);
        // console.log('Mesh geometries length: '+mesh_geos.length);
        console.log('materials length: ' + materials.length);
        var boringMat = new THREE.MeshLambertMaterial();
        for (let i=0; i < mesh_geos.length; i++){
            var mesh = new THREE.Mesh(mesh_geos[i], materials[i]);
            mesh.applyMatrix4(bikeRotationMatrix);
            mesh.scale.set(scaleVec.x, scaleVec.y, scaleVec.z);
            mesh.position.set(this.position.x, this.position.y, this.position.z);
            mesh.castShadow = true;
            mesh.recieveShadow = true;
            this.meshes.push(mesh);
            scene.add(mesh);
        }
        //console.log("Generating MeshBuilding");
        // for (var i=0; i < mesh_files.length; i++){
        //     var itMesh;
        //     console.log("iterating through mesh_files: "+ directory+mesh_files[i]);
        //     switch (mesh_files[i].slice(mesh_files[i].length - 3)){ // last three chars of the string
        //         case "obj":
        //             //
        //             break;
        //         case "ply":
        //             plyLoader.load(directory+mesh_files[i], function(impGeometry){
        //                 var impMaterial = new THREE.MeshLambertMaterial();
        //                 if (i < paramColours.size)
        //                     impMaterial.color = paramColours[i]
        //                 else
        //                     impMaterial.color = midGrey;
        //                 impGeometry.computeVertexNormals();
        //                 itMesh = new THREE.Mesh(impGeometry, impMaterial);
        //                 //itMesh.position.set(this.position.x, this.position.y, this.position.z);
        //                 console.log('loaded a ply file');
        //             });
        //             break;
        //     }
        //     console.log(itMesh);
        //     if (itMesh != null && itMesh != undefined){
        //         itMesh.position.set(this.position.x, this.position.y, this.position.z);
        //         this.meshes.push(itMesh);
        //         scene.add(itMesh);
        //         console.log("adding itmesh to scene");
        //     }
        // }
    }

    DestroyExtras(){
        for (var i=this.meshes.length-1; i>=0; i--){
            scene.remove(this.meshes[i]);
            delete this.meshes[i];
        }
        delete this.meshes;
    }
}