const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const port = 3000;

//Configuring Handlebars
const handlebarSetup = exphbs.engine({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});
app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session
app.use(session({
    secret: 'codeforgeek',
    resave: true,
    saveUninitialized: true
}));


// Function to read YAML file and convert it to JSON
const readYamlAndConvertToJson = (yamlFilePath) => {
    const yamlFile = fs.readFileSync(yamlFilePath, 'utf8');
    const jsonData = yaml.load(yamlFile);
    return jsonData;
};

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:restaurantName', (req, res) => {
    const foodMoodRestaurant = './foodMood.yaml'; 
    const gedionMasterRestaurant = './gedionMaster.yaml';
    const { restaurantName } = req.params;
    let restaurantData;
    if (restaurantName === 'Food Mood') {
        restaurantData = readYamlAndConvertToJson(foodMoodRestaurant);
        res.render('menu', { data: restaurantData });
    } else if (restaurantName === 'Gedion Master') {
        restaurantData = readYamlAndConvertToJson(gedionMasterRestaurant);
        res.render('menu', { data: restaurantData });
    } else {
        return res.status(404).send('Restaurant not found');
    }

});

app.get('/api/menu', (req, res) => {
    const yamlFilePath = './foodMood.yaml';
    const data = readYamlAndConvertToJson(yamlFilePath);
    let rest = data.restaurant.filter(restaurant => restaurant.name == req.query.restaurant)
    res.send(rest);
});


// Start the server
const PORT = process.env.PORT || 5051;
app.listen(PORT, (req, res) => {
    console.log("Application Fired On " + PORT + "!")
});