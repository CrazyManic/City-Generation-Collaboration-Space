var urbaness = 0;
var bldg_urban_height = 200;
var bldg_suburban_height = 30;

// make a building at set position
function makenew_building(position, uv)
{
    size_modifier = get_building_sizemodifier(uv);
    var bldg_mat = new THREE.MeshPhongMaterial();
    var bldg_geom = new THREE.BoxGeometry(30, bldg_urban_height + size_modifier[1], 30);
    var new_bldg = new THREE.Mesh(bldg_geom, bldg_mat);
    new_bldg.position = position;
    scene.add(new_bldg);
}

// use the current user-set urbanness var to make building size modifiers
function get_building_sizemodifier(uv)
{
    // the higher the urbanness is, the taller the building is
    // ie bigger size modifiers
    var sidemod_array = new Array(3);
    for (i=0;i<3;i++)
    {
        sidemod_array[i] = uv+getRandomInt(0, 30);
    }
    console.log(sidemod_array);
    return sidemod_array;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  