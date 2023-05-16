
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3005

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(__dirname + '/index.html')
})

app.get('/bmicalculator', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req, res) => {
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)
    // var bmi = weight / ((Math.pow(height, 2))* 703) //metric

    var bmi = weight / height
    // console.log(weight + ' / ' + height)
    // console.log(bmi)
    bmi = bmi.toFixed(2)

    if(bmi<=18.4) {
        var measure = "Your BMI is " + bmi + " which means " + "you are <span>Underweight</span>";
        var mMin = 80;
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "Your BMI is " + bmi + " which means " + "you are <span>Normal</span>";
        mMin = 50;
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "Your BMI is " + bmi + " which means " + "you are <span>Overweight</span>";
        mMin = 25;
	} else if (bmi >= 30 && bmi <= 35 ) {
		measure = "Your BMI is " + bmi + " which means " + "you are <span>Obese</span>";
        mMin = 10;
    } else if (bmi >= 35 && bmi <= 40 ) {
        measure = "Your BMI is " + bmi + " which means " + "you are <span>Obese+</span>";
        mMin = -15;
    }
    else if (bmi >= 40) {
		measure = "Your BMI is " + bmi + " which means " + "you are <span>Obese++</span>";
        mMin = -30;
	}
    else {

    }

    console.log(bmi)
    // console.log(req.body.num1)


    res.type('html')
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OpenWeatherMap - Weather Api Demo</title>
            <link rel="stylesheet" href="css/style.css" />
            </head>
        <body>


        `)
        res.write(`<div class="result">`)
        res.write(`<h1>BMI Calculator</h1><h2>`+measure+`</h2>`)
        res.write(`<img src="images/result.png" border="0"><br/>`)
        res.write(`<img src="images/arrow.png" border="0" class="arrow" style="transform: rotate(`+ (bmi-mMin) +`deg); "><br/>`)

    res.write(' <input type="button" class="back" value="👈" onclick="history.back()">')
    res.write(`</div></body></html>`);
    res.send()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*
what I learned
I setup my node servers with nvm
I installed a few different version of node with nvm
nvm install 19
nvm install 18
nvm install 16

node --version

npm init

npm install express
npm install nodemon
npm install body-parser

get
post

page response with nodejs

*/
