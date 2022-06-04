const GrassplaneColor = new THREE.Color(0,1,0);
const grass_colorrange = 5;
const GrassplaneGeo = new THREE.PlaneGeometry(buildingWidth,buildingWidth);

class GrassPlaneBuilding extends Building{
    Generate (urbanness, pColor1)
    {
        var grassMaterial = new THREE.MeshLambertMaterial();
        this.grassMatColor = GrassplaneColor;
        // this.grassMatColor.g -= (Math.random() * (urbanness/100))
        grassMaterial.color = this.grassMatColor;

        // this.grassPlaneColor = pColor1;
        // console.log(this.grassPlaneColor);
        // grassMaterial.Color = this.grassPlaneColor;
        // console.log(pColor1);
        // console.log(pColor1);
        // console.log("generate grass");
        // var grassMaterial = new THREE.MeshLambertMaterial();
        // // GrassplaneColor.g += Math.random() * grass_colorrange * (urbanness/100);
        // // GrassplaneColor.g -= Math.random() * (grass_colorrange * (urbanness/100))
        // // GrassplaneColor.g -= (grass_colorrange * (urbanness/100) * Math.random());
        // // GrassplaneColor.g = Math.random();
        // // console.log(GrassplaneColor);
        // // grassMaterial.color = GrassplaneColor;
        // console.log(pColor1);
        // this.grassColor = pColor1;
        // grassMaterial.Color = this.grassColor;
                
        this.grassplane_mesh = new THREE.Mesh(GrassplaneGeo, grassMaterial);
        this.grassplane_mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.grassplane_mesh.rotation.x = flatRotation;
        scene.add(this.grassplane_mesh);
    }
};