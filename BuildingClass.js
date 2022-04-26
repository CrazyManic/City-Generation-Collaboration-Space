var baseheight_highrise = 100;
var basehight_house = 30;

class Building{
    constructor(urbanness, create_position)
    {
        // use the urbanness to determine which building to create
        var buildingtype;
        switch(buildingtype)
        {
            // create building geometry/mesh parameters 
            case "house":
                break;
            case "highrise":
                break;
        }
        // add modifiers for randomness between buildings
        var modifiers = new Array();
        // pass building geometry/mesh parameters here
        makenew_building(buildingtype, create_position, newbldg_height, modifiers[]);
    }

    static makenew_building(buildingtype, crete_position, bldg_height, extra_mods)
    {
        console.log("Create new "+buildingtype+" at "+create_position);
    }
}