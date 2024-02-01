const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const port = 3000;

// Function to read YAML file and convert it to JSON
const readYamlAndConvertToJson = (yamlFilePath) => {
  const yamlFile = fs.readFileSync(yamlFilePath, 'utf8');
  const jsonData = yaml.load(yamlFile);
  return JSON.stringify(jsonData, null, 2);
};

// Route to serve the JSON representation of the YAML file
app.get('/menu', (req, res) => {
  const yamlFilePath = './foodMood.yaml'; // Update with the actual path to your YAML file
  const jsonData = readYamlAndConvertToJson(yamlFilePath);
  res.json(JSON.parse(jsonData));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
