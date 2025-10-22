//Create a new router
const express = require("express");
const router = express.Router();
const path = require(`path`);

//Handle the main routes
//Handle the routers
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send(`<h1>This is  the about page</h1>`));

//Shows email which can be clicked on to open mail application of choice
router.get("/contact", (req, res) => res.send(`<h1>Contact Page</h1><h2>My Email</h2><address><a href="mailto:mcast001@campus.goldsmiths.ac.uk">mcast001@campus.goldsmiths.ac.uk</a></address>`));

//Display the current date & time using javascript
router.get("/date", (req, res) => res.send(`<h1>Todays date is:</h1><script>const d = new Date(); document.write(d);</script>`));

//Welcome page changing to the name you enter
router.get("/welcome/:name", (req, res) => {
    res.send(`Welcome, ${req.params.name}`);
});

//Chained routes
router.get("/chain", (req, res, next) =>  {
    console.log("First")
    next();
},

    (req,res) => {
        res.send(`<h1>Second</h1>`);
        }
);

//File router
router.get("/file", (req, res) => {

    res.sendFile(path.join(__dirname, `../a.html`));
});


//Export the router objects so index.js can acces it
module.exports = router;