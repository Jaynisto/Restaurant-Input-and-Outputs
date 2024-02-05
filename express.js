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

// Route to serve the JSON representation of the YAML file
app.get('/', (req, res) => {
    const yamlFilePath = './foodMood.yaml'; // Update with the actual path to your YAML file
    const data = readYamlAndConvertToJson(yamlFilePath);
    res.render('menu', { data });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
