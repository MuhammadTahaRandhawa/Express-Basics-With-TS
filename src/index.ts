// Importing necessary modules from node_modules
import express from 'express'; // Express framework for handling HTTP requests
import path from 'path'; // Path module for handling and transforming file paths
import bodyParser from 'body-parser'; // Body-parser middleware to parse incoming request bodies

// Importing route handlers
import adminRoutes from './routes/admin'; // Routes for the admin section of the website
import shopRoutes from './routes/shop'; // Routes for the shop section of the website

// Creating an Express application
const app = express();

// Setting the port number for the server to listen on
const port = 3000;

// Middleware to parse the body of incoming requests
app.use(bodyParser.urlencoded({extended : false}));
// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname , 'public')));

// Middleware to handle admin routes, prefixed with '/admin'
app.use('/admin' , adminRoutes);

// Middleware to handle shop routes
app.use(shopRoutes);

// Middleware for handling 404 errors (page not found)
app.use((req , res , next)=>{
    res.sendFile(path.join(__dirname , 'views/404.html'));
});

// Starting the server and listening for requests on the specified port
app.listen(port , ()=>{
    console.log(`Running on PORT ${port}`);
});
