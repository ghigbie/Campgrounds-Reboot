const express = require('express'),
          ejs = require('ejs'),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;

app.get('/', (req, res) =>{
    console.log('On the / page');
    res.render('landing.ejs');
});

app.get('/campgrounds', (req, res) => {
    console.log('On the /campgrounds page');
    res.send("Yo campgrounds");
});

app.listen(port, ip, ()=> {
   console.log(`Server is listening on ${port}`); 
});

