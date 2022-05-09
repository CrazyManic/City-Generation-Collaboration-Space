const highrise_baseheight = 35;
const highrise_extraheight = 10;
const highrise_shiny = 70;

class HighriseBuilding extends Building{
    Generate(urbanness, pColor1, pColor2, pColor3){
        this.height = highrise_baseheight + (urbanness/100) * highrise_extraheight;
        this.bldg_geom = new THREE.BoxGeometry(blockLength, this.height, blockLength);  
        this.bldg_mat = new THREE.MeshPhongMaterial();  
        this.bldg_mat.shininess = highrise_shiny;
        this.bldg_mat.color = pColor1;
    }
}