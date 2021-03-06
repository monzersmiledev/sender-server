const express = require('express'),
    app = express(),
    cookieParser = require("cookie-parser");

/*
    enable bodyParser
*/
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    limit: "2mb"
}));

/*
    enable cookie parser
*/
app.use(cookieParser());

/*
    deisable x-powered-by
*/
app.disable("x-powered-by");

/*
    template engein
*/
app.set('views', './src/views');
app.set("view engine", "ejs");

/* 
    add routers
*/
app.use("/", require("./routers/users.router"));
app.use("/", require("./routers/files.router"));
app.use("/", require("./routers/home"));

/* 
    serve static files
*/
app.use('/public', express.static('./Public'));

/* 
    redirect the user if the request url is empty
    to /home
*/
app.get('/', (req, res) => {
    res.status(200).redirect("/home");
});

/* 
    other routers
*/
app.use('*', (req, res) => {
    res.status(404).json({
        error: true,
        message: 'Not Found!',
        data: []
    });
});

/* 
    error handeler
*/
app.use((err, req, res, next) => {
    res.status(500).json({
        error: true,
        message: err.message,
        data: []
    });
})

module.exports = app