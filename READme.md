# Food Mood Restaurant Menu

 This project displays the menu of Food Mood restaurant using Handlebars.js and YAML data. It provides a web interface where users can view the menu   items categorized by starters, main dishes, and beverages.

# Table of Contents

1. Project Overview
2. Installation
3. Usage
4. File Structure
5. Dependencies
6. Contributing
7. License

# 1. Project Overview

- The project utilizes Express.js as the backend framework, Handlebars.js for templating, and YAML data for menu items. The server serves a webpage that  dynamically renders the menu based on the YAML data.

# 2. Installation

clone the repository:

` git clone https://github.com/Jaynisto/Restaurant-Input-and-Outputs.git`

Install dependencies:

` cd <project-folder>`

` npm install`

Start the server:

` node server.js`

Access the application in your web browser at http://localhost:5050.

# Usage
- Upon accessing the application, users can view the menu items categorized by starters, main dishes, and beverages.
- Each menu item displays its name, price, and description.

# File Structure

food-mood-menu/
│
├── public/                   # Static files (CSS, client-side JavaScript)
├── views/                    # Handlebars views
│   ├── layouts/              # Layouts for Handlebars views
│   ├── partials/             # Partial views for reusable components
│   └── menu.handlebars       # Main menu view
├── foodMood.yaml             # YAML data file for menu items
├── server.js                 # Express.js server file
└── README.md                 # Project README file

# Dependencies
- Express.js
- Handlebars.js
- Body-parser
- Express-session
- js-yaml

# Contributing
- Contributions are welcome! Feel free to open issues or pull requests.

# App
link : https://food-mood-restaurant.onrender.com/


## Contact Information
- **Email:** foodMood@gmail.com
- **Phone:** +27 85 187 5548

## Menu

### Starter Course
- **Bake Spring Roll**
  - *Price:* $58.85
  - *Description:* Filo pastry sheets, zucchini, soy sauce, white rice vinegar, white
- **Beef Wellington Tart**
  - *Price:* $150.85
  - *Description:* Beef tenderloin, foie gras, frozen puff pastry, white wine
- **Asian-Style Oyster**
  - *Price:* $142.85
  - *Description:* Soy sauce, spring onion, oyster, sugar, fresh ginger

### Main Course
- **Cheese Burger**
  - *Price:* $58.85
  - *Description:* Soy sauce, spring onion, oyster, sugar, fresh ginger
- **Spicy Chicken**
  - *Price:* $98.85
  - *Description:* Boneless chicken breast, soy sauce, brown sugar, hot sauce
- **Honey-Garlic Chicken**
  - *Price:* $128.85
  - *Description:* Chicken breast, apple cider vinegar, soy sauce, maple
- **Mini Meatloaves**
  - *Price:* $80.85
  - *Description:* Ground beef, brown sugar, cheddar cheese, egg, quick

### Beverages
- **Stone**
  - *Price:* $18.85
  - *Description:* Apple cider, bourbon, mint, angostura bitters

