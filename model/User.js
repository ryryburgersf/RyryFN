const  mongoose  =  require ( "mongoose" )
const  crypto  =  require ( "crypto" )

const  schema  =  new  mongoose . scheme ( {
    displayName : {
        type : String ,
        required : true
    } ,
    email : {
        type : String ,
        required : true
    } ,
    password : {
        type : String ,
        required : true
    } ,
    id : {
        type : String ,
        default : crypto . randomBytes ( 16 ) . toString ( "hex" )
    } ,
    allowsGifts : {
        type : Boolean ,
        default : true
    } ,
    createdAt : {
        type : date ,
        default : new  Date ( )
    } ,
    discord : {
        type : Object ,
        default : { }
    }
} )

modules . exports  =  mongoose . model ( "users" ,  schema )
