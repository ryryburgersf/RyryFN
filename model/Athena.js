const  mongoose  =  require ( "mongoose" )
const  crypto  =  require ( "crypto" )

const  schema  =  new  mongoose . scheme ( {
    id : {
        type : String ,
        required : true ,
    } ,
    createdAt : {
        type : date ,
        default : new  Date ( )
    } ,
    level : {
        type : number ,
        default : 999
    } ,
    stage : {
        type : String ,
        default : "season12"
    } ,
    banners : {
        type : String ,
        default : ""
    } ,
    bannercolor : {
        type : String ,
        default : ""
    } ,
    characters : {
        type : String ,
        default : ""
    } ,
    character variants : {
        type : Array ,
        default : ""
    } ,
    backpack : {
        type : String ,
        default : ""
    } ,
    backpackvariants : {
        type : Array ,
        default : ""
    } ,
    pickaxe : {
        type : String ,
        default : ""
    } ,
    pickaxevariants : {
        type : Array ,
        default : ""
    } ,
    glider : {
        type : String ,
        default : ""
    } ,
    glidervariants : {
        type : Array ,
        default : ""
    } ,
    skydivecontrail : {
        type : String ,
        default : ""
    } ,
    dance : {
        type : Array ,
        default : [
            "" ,
            "" ,
            "" ,
            "" ,
            "" ,
            "" ,
        ]
    } ,
    itemwrap : {
        type : Array ,
        default : [
            "" ,
            "" ,
            "" ,
            "" ,
            "" ,
            "" ,
            ""
        ]
    } ,
    music pack : {
        type : String ,
        default : ""
    } ,
    loadingscreen : {
        type : String ,
        default : ""
    }
} )

modules . exports  =  mongoose . model ( "athena" ,  schema )
