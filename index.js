const express = require('express')

const app = express()
port = 3000

app.set('view engine', 'hbs')
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.render('index')
})
app.get('/form', function(request, response){
    response.render('form')
})

let isLogin = true
app.get('/detail-project', function(request, response){
    response.render('detail-project', {isLogin})
})
app.get('/detail-project', function(request, response){
    response.render('detail-project')
})
app.get('/add-project', function(request, response){
    response.render('add-project')
})

app.post('/add-project', function(request, response){
    console.log(request.body);
    let name = request.body.inputName
    let startDate = request.body.inputStartDate
    let endDate = request.body.inputEndDate
    let message = request.body.exampleFormControlTextarea1
    let image = request.body.inputFile
    let check1 = request.body.check1
    let check2 = request.body.check2
    let check3 = request.body.check3
    let check4 = request.body.check4

    console.log(name);
    console.log(startDate);
    console.log(endDate);
    console.log(message);
    console.log(image);
    console.log(check1);
    console.log(check2);
    console.log(check3);
    console.log(check4);

    response.redirect('/detail-project')
})







app.listen(port, function(){
    console.log(`server running on port ${port}`);
})
