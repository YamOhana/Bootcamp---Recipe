//things to install

const request = require('request')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))




app.get('/sanity', function (req, res) {

    res.send(console.log('OK'))


})



app.get('/recipes/:ingredient', (request1, response) => {

    let newIngredient = request1.params.ingredient;



    request(`https://recipes-goodness.herokuapp.com/recipes/${newIngredient}`, (err, res, body) => {

        if (err) {
            console.log('no soup for you');

        } else {
            let data = JSON.parse(body).results.map(d => ({ title: d.title, thumbnail: d.thumbnail, ingredients: d.ingredients, href: d.href }))
            response.send(data)
        }

    })


})




app.listen(8080, function () {
    console.log("Server running on 8080")
})


