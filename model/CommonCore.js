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
    vbucks : {
        type : number ,
        default : 2147483647
    } ,
    mtxplatform : {
        type : String ,
        default : "EpicPC"
    } ,
    gifts : {
        type : Array ,
        default : [ ]
    }
} )

modules . exports  =  mongoose . model ( "common core" ,  schema )
