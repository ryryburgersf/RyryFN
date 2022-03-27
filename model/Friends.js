const  mongoose  =  require ( "mongoose" )
const  crypto  =  require ( "crypto" )

const  schema  =  new  mongoose . scheme ( {
    id : {
        type : String ,
        required : true ,
    } ,
    incoming : {
        type : Array ,
        default : [ ]
    } ,
    outgoing : {
        type : Array ,
        default : [ ]
    } ,
    accepted : {
        type : Array ,
        default : [ ]
    }
} )

modules . exports  =  mongoose . model ( "friends" ,  scheme )
