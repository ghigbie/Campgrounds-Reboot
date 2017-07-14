const express = require('express'),
          ejs = require('ejs'),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    console.log('On the / page');
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    var campgrounds = [
        {name: "Salmon Hunt", image: "http://www.switchbacktravel.com/sites/default/files/images/articles/Colorado%20Outdoors.jpg"},
        {name: "Hunter's Cove", image: "http://wilderness.org/sites/default/files/styles/blog_full/public/boots%20at%20lake%20photo.jpg?itok=nIFuJ6G5"},
        {name: "Resting Trees", image: "http://www.heartsandmindsbooks.com/Hiking-Shoes-588x391.jpg"},
        {name: "Lookout Range", image: "http://visitsedona.com/wp-content/uploads/2015/05/peach-sky-web.jpg"}, ];
    console.log('On the /campgrounds page');
    res.send("Yo campgrounds");
});

app.get('*', (req, res) => {
    res.render('notfound');
});

app.listen(port, ip, ()=> {
   console.log(`Server is listening on ${port}`); 
});

