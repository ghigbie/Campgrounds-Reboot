const express = require('express'),
          ejs = require('ejs'),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;

app.listen(port, ip, ()=> {
   console.log(`Server is listening on ${port}`); 
});