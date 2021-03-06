var express = require('express');
var morgan = require('morgan');
var path = require('path');


var article=
{
    title:'article|one',
    date:'2/5/2017',
    head:'personal',
    content:
    `
    <p>
            this is the first paragraph
            this is the first paragraph
        </p>
                <p>
            this is the first paragraph
            this is the first paragraph
        </p>
                <p>
            this is the first paragraph
            this is the first paragraph
        </p>
        
    `
};
function createtemplate(data)
{
    var title =data.title; 
      var date =data.date;
      var head =data.head;
      var content =data.content;

var htmltemplate=`

<html>
    <head>
        <title>
        ${title}
        </title>
<link href="/ui/style.css" rel="stylesheet" />
    </head>
  <body>
        <div class="container">
           <div>
            <a href='/'>home</a>
        </div>
        <div>
            ${date}
        </div>
        <h1>
        ${head}
        </h1>
        ${content}
        </div>
    </body>
</html>

`;
return htmltemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send(createtemplate(article))
});
app.get('/article-two',function(req,res){
    res.send('article one is requested');
});
app.get('/article-three',function(req,res){
    res.send('article one is requested');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
