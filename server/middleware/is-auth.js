const jwt = require('jsonwebtoken');
import { jwtSecret, jwtExpireIn } from '../config';

export const auth = (req,res,next) => {
 const authHeader = req.get('Authorization');

//  console.log('decodedToken11111',authHeader)
 if(!authHeader){
     
     return req.isAuth = false;
 }

const token = authHeader.split(' ')[1];
// console.log(token,'decodedT11111oken')
if(!token || token === ''){
    
    return req.isAuth = false;
}
let decodedToken;
try{
    
  decodedToken =  jwt.verify(token,jwtSecret)
//   console.log('decod2222edToken',decodedToken)
} catch(err){
    // console.log(err,'errerrerr')
   return req.isAuth = false;
   
}

if(!decodedToken){
    
    return req.isAuth = false;
}
req.isAuth = true;
// console.log("valueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",req.isAuth)

return req.isAuth;
}