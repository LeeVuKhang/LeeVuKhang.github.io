//console.log("Hello, World! This is my first Node.js app.");
import express from 'express';
import { engine } from 'express-handlebars';

const __dirname = import.meta.dirname;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/home', (req, res) => {
    res.render('home');
});

app.use("/static", express.static('static'));
//note / tunng tab
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about-my-team', (req, res) => {
    //2 ways to send file
    res.sendFile(__dirname + '/about-my-team.html');
    //res.sendFile('about.html', { root: '.' });
});
app.get('/about-lvk', (req, res) => {
    res.sendFile(__dirname + '/about-lvk.html');
});
app.get('/about-vhn', (req, res) => {
    res.sendFile(__dirname + '/about-vhn.html');
});
app.get('/about-tpd', (req, res) => {
    res.sendFile(__dirname + '/about-tpd.html');
});
app.get('/about-nngn', (req, res) => {
    res.sendFile(__dirname + '/about-nngn.html');
});
app.get('/about-ntc', (req, res) => {
    res.sendFile(__dirname + '/about-ntc.html');
});
app.get('/about-nhhl', (req, res) => {
    res.sendFile(__dirname + '/about-nhhl.html');
});

//signup
app.get('/account/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});
app.post('/account/signup', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(req.body));
    res.sendFile('Thank you for registering!');
});
app.get('/account/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/admin/categories', (req, res) => {
    res.render('vwAdminCategory/list');
});

app.get('/admin/categories/add', (req, res) => {
    res.render('vwAdminCategory/add');
});

app.get('/admin/categories/edit', (req, res) => {
    res.render('vwAdminCategory/edit');
});

//lenh cuoi cung
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
