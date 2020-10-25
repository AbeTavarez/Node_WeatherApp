import express from ('express');
import path from ('path');
import zipdb from ('zippity-do-dah');


const app = express();
const getWeather = '';

// Set View Engine
app.use(express.static(path.resolve(__dirname, 'views')));
app.set('views engine', 'ejs');

// Routes

//render index view/ Homepage
app.get('/', (req, res) => {
  res.render('index')
});

//
app.get(/^\/(\d{5})$/, (req, res) => {
  const zipcode = req.params[0];
  const location = '';

  if (!location) {
    next();
    return;
  };



});