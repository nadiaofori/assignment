const express = require('express');

const router = express.Router();
const users = require('./users')

// router.get('/', function(request,response){
//     response.status(200).send("hello world")
// })


router.post("/login",function(request, response){
    console.log(request.body);
    const {username, password} = request.body
    let user = users.filter(res => res.username === username)
    console.log(user);
    // response.send("login")
    if (user.length >0){
        if(user [0].password === password){
            response.send({message:"login successfull"})
        }
        response.send("user or password is wrong")
    }
    else {
        response.send({message:"user does not exist"})
    }
})
router.post("/signup", function(request,response){
    // const{username,password}= request.body
    var newUser = {
        name: request.body.name,
        password: request.body.password,
        email: request.body.email,
       username: request.body.username,
        country: request.body.country,
      };
      console.log(newUser);
      response.status(300).send("Signup Successful");
})

router.get('/allusers', function(request,response){
    response.status(200).send(users)

    
})

module.exports = router;