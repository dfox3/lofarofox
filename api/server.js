const express = require('express');
const path = require('path');
const http = require('http');
var https = require('https');
const fs = require('fs');
var aws = require('aws-sdk');
var s3Proxy = require('s3-proxy');
var gm = require('./../../gm.json');
var multer = require('multer')
var multerS3 = require('multer-s3');
var nodemailer = require('nodemailer');
var cors = require('cors');

// serve the API with signed certificate on 443 (SSL/HTTPS) port
const app = express(),
      bodyParser = require("body-parser");
      port = 443;


app.use(cors())
app.use(bodyParser.json());

console.log(gm)
console.log(gm["usr"])
console.log(gm["pwd"])

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
port: 465,               // true for 465, false for other ports
host: "smtp.gmail.com",
   auth: {
        user: gm["usr"],
        pass: gm["pwd"],
     },
secure: true,
});

var email = "lofarofox@gmail.com"

const mailData = {
from: gm["usr"],  // sender address
  to: email,   // list of receivers
  subject: "ATTN: Server launching",
  text: 'halps',
  html: '<b>SERVER IS ONLINE</b> <br>Behold! Hark! The mail server lives!<br/>',
};


transporter.sendMail(mailData, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});



app.post('/mailstaff',(req, res) => {
  console.log(req)
  console.log(req.body)
  //var newDate = new window.Date();
  //var datetime = "LastSync: " + new newDate.today() + " @ " + new newDate.timeNow();
  const mailData = {
    from: gm["usr"],  // sender address
    to: ["lofarofox@shirebio.com"],   // list of receivers
    bcc: ["lofarofox@shirebio.com", req.body.email],
    subject: "REQUEST from " + req.body.name, // + " - " + datetime,
    html: "name:\t" + req.body.name + 
          "<br/><br/>email:\t" + req.body.email +
          "<br/><br/>org:\t" + req.body.organization +
          "<br/><br/><br/><br/>" + req.body.message

  };

  transporter.sendMail(mailData, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
  });
  res.json("Email sent");
});


app.get('/hello',function(req,res){
  res.send("Hello World!");
});


var exec = require('child_process').exec;
app.get('/version',function(req, res) {
    var cmd = "git describe"
    child = exec(cmd,
    function (error, stdout, stderr) {
        if (error !== null) {
             console.log('exec error: ' + error);
        }
      return res.send(stdout);
    });
    try {
      child();
    } catch (error) {
      console.log("Version fetching error")
    }
});


const httpsServer = https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/dylanandemily2022.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/dylanandemily2022.com/fullchain.pem'),
  dhparam: fs.readFileSync("/var/www/host/dh-strong.pem")
}, app);

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});






