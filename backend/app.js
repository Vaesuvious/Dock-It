const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
const todos = require('./routes/todoRoutes');


//middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));
app.use(cors());

//route middleware
app.use('/api', todos);


//port
const port = 5000;
app.listen(port, () =>{
    console.log(`Server running on ${port}`);
})
