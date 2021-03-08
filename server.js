

require('dotenv').config()
/* to hide sensitive infos npm i dotenv -S  then create .env and gitignore the file.  */
const https = require('https');
const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
/* this is to extends the body-parser to able use in the File.
it is to parse user input url data into readable strings */
app.use(express.static('public'));
// this is to allow the local folder to be a base for directory.a

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // be careful of the local files attachment. it needs to start from CSS. in this scenario we just input the link the file name we need from the css folder. 
}
);

app.get('/weather', (req, res) => {
  res.render('weather')

})




app.get('/calculator', (req, res) => {

  res.render('calculator');

})


app.post("/weather", function (req, res) {


  const appKey = process.env.APIKEY;
  const city = req.body.city;

  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + appKey + "&q=" + city + "&units=" + unit;
  //https://api.openweathermap.org/data/2.5/weather?appid=fab0f212ce0aaab5c920443c5d6d0523&q=london&units=metric
  https.get(url, function (response) {


    console.log(response.statusCode);





    response.on("data", function (data) {
      const weatherData = JSON.parse(data)
      // this will parse the JSON into javascript objects.

      const tem = weatherData.main.temp
      if (tem == undefined) {
        res.redirect('/');

      }
      const temp = Math.round(tem);
      const descr = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon
      // we use the chrome addon for copying the path and enclose openweathermap
      // then we can use it anywhere we want to.
      const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      // notice how concatenation is being used along with a constant to create an edited URL
      function upperCase(city) { return city[0].toUpperCase() + city.slice(1); }
      const cityCap = upperCase(city);

      res.render('weatherRes', {
        city: cityCap,
        temp: temp,
        description: descr,
        icon: iconURL



      })

    })
  })
});





app.post('/', (req, res) => {


  const firstName = req.body.firstName
  const email = req.body.email
  const message = req.body.message
  const date = req.body.date
  const time = req.body.appt

  console.log(firstName + ': ' + email + ': ' + message + ': ' + date + ': ' + time)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  })

  let mailOptions = {
    from: 'A.u.r.u.m.a.0.0@gmail.com',//add a comma inside the string for more recepients
    to: email,//we can add cc: property too.
    subject: 'Reminder',
    text: 'Dear ' + firstName + ',' + 'please see your Reminder Message:' + message
  }



  transporter.sendMail(mailOptions, function (err, data) {

    if (err) {
      console.log(err)
    } else {

      console.log('email sent')

    }
  })

  res.redirect('/')

})






app.listen(process.env.PORT || 3000, function () {
  //var port = server.address().port;
  console.log("server is running");
});