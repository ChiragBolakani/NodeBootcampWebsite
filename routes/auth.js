const express = require("express");
const router = express.Router();
const axios = require('axios').default;
require("dotenv").config();


router.get('/login', (req,res)=>{
    res.render('login.ejs');
});

router.get('/google', async (req,res)=>{
    console.log(req.query.code);
    req.session.authCode = req.query.code;
    await axios({
      method: 'post',
      url: `https://oauth2.googleapis.com/token?code=${req.session.authCode}&client_id=820772511530-omo1lv7i4o3smjkbgqvf8ti4dr7d48bh.apps.googleusercontent.com&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:3000/auth/google&grant_type=authorization_code&`,
    }).then(function (response){
      console.log(response.data);
      req.session.access_token = response.data.access_token;
    });
    res.redirect('/auth/dashboard');
    // res.send('you are now logged in');
});

router.get('/dashboard', async (req,res)=>{
    await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${req.session.access_token}`
    ).then(function (response){
      console.log(response);
      res.send(`hello ${response.data.name}`);
    })
    // console.log(req.session.authCode);
    // res.send('welcome ' + `${req.session.authCode}`);
});

module.exports = router;