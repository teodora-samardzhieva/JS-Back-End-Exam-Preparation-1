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
 - [x] Config hanlebars engine (in src/index.js -> app.engine('hbs', handlebars.engine({....})) )
 - [x] Use handlebars engine (in src/index.js -> app.set('view engine', 'hbs'))
 - [x] Config handlebars file extension (in src/index.js -> ` extname: 'hbs' `)
 - [x] Set views folder (in src/index.js -> app.set('views', 'src/views'))
 - [x] Add home view (src/views/home.html -> home.hbs)
 - [x] Render home view without layout (src/controllers/homeController.js) `res.render('home', {layout: false});`
 - [x] Fix asset paths (remove ./static part from paths in html.hbs)
 - [x] Add layout (create in src/views folder layouts/main.hbs)
 - [x] Add partials dir (create in src/views folder partials)
 - [x] Config handlebars to work with mongoose documents (in src/index.js) `runtimeOptions: { allowProtoPropertiesByDefault: true, allowProtoMethodsByDefault: true }`

### 4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Connect to db (in src/index.js -> await mongoose.connect('mongodb://localhost:27017', { dbName: 'friendly-world'}))
 - [x] Add error handling on connect (with try{} catch(err){})
 - [x] Add simple user model (create in src folder models/User.js)

### 5. Register
 - [x] Fix navigation links (in src/views/layouts/main.hbs)
 - [x] Add user controller (create userController.js in src/controllers)
 - [x] Add user controller to routes (in src/routes.js)
 - [x] Create register view
 - [x] Render register view
 - [x] Modify register form
    - method="POST" ; remove action because we want to post on the same route (get and post routes are the same)
    - name="email" ; name="password" ; name="repeatPassword" 
    - href='/users/login'