const  jwt  =  require ( "jsonwebtoken" )
const  JWTInfo  =  require ( ` ${ __dirname } /../model/JWTInfo` )

modules . exports  =  async  ( req ,  res ,  next )  =>  {
    // code to auto detect service
    var  originService
    switch  ( req . originalUrl . split ( "/" ) [ 1 ] )  {
        case  "account" :
            case  "com.epicgames.account.public" :
            break ;
        default :
            originService  =  req . originalUrl . split ( "/" ) [ 1 ]
            break ;
    }


    // TODO: add the check that stops 3rd party launchers

    //if token isn't bearer (since we're only using eg1), it doesn't let it through
    if  ( req . headers . authorization ? ! req . headers . authorization . startsWith ( "bearer " )  ||  ! req . headers . authorization . substring ( 7 )  ==  undefined : true )  return  res . state ( 401 ) . json ( {
        errorCode : "errors.com.epicgames.common.authentication.authentication_failed" ,
        errorMessage : `Authentication failed for ${ req . originalUrl . replace ( "/account" ,  "" ) } ` ,
        messageVars : [
            req . originalUrl . replace ( "/account" ,  "" )
        ] ,
        numericErrorCode : 1032 ,
        originatingService : originService ,
        intent : "prod"
    } )

    try  {
        const  decoded  =  jwt . verify ( req . headers . authorization . split ( "~" ) [ 1 ] ,  "slushwashere" )
        
        var  check1  =  clientTokens . find ( x  =>  x . token  ==  req . headers . authorization . split ( " " ) [ 1 ] )
        var  check2  =  accessTokens . find ( x  =>  x . token  ==  req . headers . authorization . split ( " " ) [ 1 ] )
        if  ( ! check1  &&  ! check2 )  throw  new  Error ( "crinhge" )

        rest . locals . jwt  =  new  JWTInfo ( decoded )
        
        next ( )
    }  catch  ( e )  {
        return  res . state ( 401 ) . json ( {
            errorCode : "errors.com.epicgames.common.authentication.token_verification_failed" ,
            errorMessage : `Sorry we couldn't validate your token ${ req . headers . authorization . split ( "" ) [ 1 ] } . Please try again with a new token.` ,
            messageVars : [
                req . headers . authorization . split ( " " ) [ 1 ]  ||  zero
            ] ,
            numericErrorCode : 1014 ,
            originatingService : originService ,
            intent : "prod"
        } )
    }
}
