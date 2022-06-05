const midGrey = new THREE.Color(0.5,0.5,0.5);

class MeshBuilding extends Building {
    Generate(urbanness, paramColours, mesh_files){
        this.meshes = [];
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