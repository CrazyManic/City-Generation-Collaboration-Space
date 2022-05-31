const GrassplaneColor = new THREE.Color(0,1,0);
const grass_colorrange = 5;
const GrassplaneGeo = new THREE.PlaneGeometry(buildingWidth,buildingWidth);

class GrassPlaneBuilding extends Building{
    Generate (urbanness)
    {
        var grassMaterial = new THREE.MeshLambertMaterial();
        GrassplaneColor.g += Math.random() * grass_colorrange * (urbanness/100);
        grassMaterial.color = GrassplaneColor;
        this.grassplane_mesh = new THREE.Mesh(GrassplaneGeo, grassMaterial);
        this.grassplane_mesh.position.set(this.position.x, this.position.y, this.position.z);
        this.grassplane_mesh.rotation.x = flatRotation;
        scene.add(this.grassplane_mesh);
    }
};