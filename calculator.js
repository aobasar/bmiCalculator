const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  var num1 = +req.body.num1;  
  var num2 = +req.body.num2;
  var result = num1 + num2;
 console.log(result)
    // console.log(req.body.num1)
    res.send("thanks for posting that and sum is " + result)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
