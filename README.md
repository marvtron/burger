# burger

### Overview:
This app is a burger logger with MySQL, Node, Express, Handlebars, and Sequelize; and, follows the MVC design pattern.

   - burger is a restaurant app that lets users input the names of burgers they'd like to eat.

   - Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be        devoured.

   - Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right      side of the page with customer.

   *The app will store every burger in a database, whether devoured or not.*
   
### Getting Started:
1. Clone down repo.
2. Run command 'npm install' in Terminal or GitBash
3. Create a MySQL database with the schema and seeds.sql code
4. Enter your MySQL password in config/connection.js
5. Run command 'node server'

#### Tech used:
- Node.js
- MySQL
- Express
- Handlebars
- Sequelize

##### Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/


### Directory structure:

All the recommended files and directories from the steps above should look like the following structure:
   
```
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars 
``` 
   
        
       
     
   #### Built With:
 - VS Code
   - Author:
    *Marvin Tryon Jr - Node JS*

**My Website:**
https://marvtron.github.io/My-Portfolio/

