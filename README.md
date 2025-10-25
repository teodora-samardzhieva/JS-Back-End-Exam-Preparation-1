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
 - [x] Create post route for register (in src/controllers/userControllers.js)
 - [x] Create user service (create folder services/userService.js in src)
    - open mongobd compass app and connect to localhost:27017 -> friendly-world -> users and try to register again
 - [x] Redirect after successfull register (in src/controllers/userController.js)
 - [x] Instal bcrypt `npm i bcrypt`
 - [x] Hash passwords before save (in src/models/User.js)
 - [x] BONUS: Check if user exists (in src/services/userService.js)

### 6. Login
 - [x] Fix login navigation link (src/views/latouts/main.hbs)
 - [x] Add login view (src/views/login.html -> login.hbs & cut unnecessary part(headers/footers))
 - [x] Add get login action (src/controllers/userControllers.js -> userControllers.get('/login', (...)))
 - [x] Fix/Modify login form 
    - src/views/login.hbs -> method="POST" remove action 
    - name properties: name="email" ; name="password"
    - href='/users/register'
 - [x] Add post login acion (src/controllers/userControllers.js -> userControllers.post('/login', async (...)))
 - [x] Add login method in userService (src/services/userService.js -> export async function login(email, password) {......})
 - [x] Validate if user exists (src/services/userService.js)
 - [x] Validate password (src/services/userService.js)
 - [x] Install jsonwebtoke `npm i jsonwebtoken`
 - [x] Generate token (src/services/userService.js)
 - [x] Call userService from userController (src/controllers/userControllers.js)
 - [x] Send token as cookie (src/controllers/userControllers.js)
 - [x] Redirect to homepage (src/controllers/userControllers.js)
    - try to login -> Inspect console -> Application -> Cookies -> token: jhGg6t6Fyt76UYg6tUY
    - open jwt.io -> paste token and validate
 - [x] BONUS: Extract jwt secret to constant or env (create folder config/constants.js in src)
    - src/services/userService.js -> const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'});
 - [x] Auto login on register
    - create folder utils/tokenUtils.js in src 
    - move the token from src/services/userService.js to src/utils/tokenUtils.js

### 7. Logout
 - [x] Add logout navigation link (src/views/layouts/main.hbs)
 - [x] Add logout action (src/controllers/userController.js)

### 8. Authentication
 - [x] Install and use cookie-parser `npm i cookie-parser` (src/index.js)
 - [x] Create auth middleware (create folder middlewares/authMiddleware.js in src)
    - [x] Allow if guest (no token)
    - [x] Verify token (clear session if invalid)
    - [x] Attach decoded token to req.user (if token is valid)
 - [x] Use auth middleware (src/index.js)
    - TEST Authentication: src/controllers/homeController.js

### 9. Authorization
 - [x] Create isAuth middleware (src/middlewares/authMiddleware.js) 
 - [x] Create isGuest middleware (src/middlewares/authMiddleware.js) 
 - [x] Add route guards
    - (add isAuth route guard to userController.js /logout)
    - (add isGuest route guard to userController.js /register & /login)


### 10. Dynamic content
 - [x] Add user data to handlebars context (src/middlewares/authMiddleware.js)
 - [x] Dynamic navigation (src/views/layouts/main.hbs)
 - [x] Dynamic titles (src/index.js)
 - [x] BONUS: Set page title from view
  

### 11. Error handling and Validation
 - [x] Add error message in notification (src/views/layouts/main.hbs)
 - [x] Notification conditional rendering (src/views/layouts/main.hbs)
