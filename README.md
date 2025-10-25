# SoftUni JS Back-End Exam Preparation Cheat Sheet

## Create Skeleton Project

### 1. Initialize Project 
 - [x] Initialize npm project `npm init -y`
 - [x] Change module system
 - [x] Add start file `/src/index.js`  
 - [x] Add dev script
 - [x] Config debugger
 - [x] Add resources

### 2. Expres
 - [x] Install express `npm i express`
 - [x] Init express server
 - [x] Setup static middleware
 - [x] Add body parser
 - [x] Add home controller
 - [x] Add route file
 - [x] Add error controller

### 3. Handlebars
 - [x] Install handlebars `npm i express-handlebars`
 - [x] Config hanlebars engine
 - [x] Use handlebars engine
 - [x] Config handlebars file extension
 - [x] Set views folder
 - [x] Add home view (src/views/home.html -> home.hbs)
 - [x] Render home view without layout (src/controllers/homeController.js) `res.render('home', {layout: false});`
 - [x] Fix asset paths (remove ./static part from paths in html.hbs)
 - [x] Add layout (create in src/views folder layouts/main.hbs)
 - [x] Add partials dir (create in src/views folder partials)
 - [x] Config handlebars to work with mongoose documents (in src/index.js) `runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`
