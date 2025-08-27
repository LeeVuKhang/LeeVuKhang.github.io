//console.log("Hello, World! This is my first Node.js app.");
import express from 'express';

const __dirname = import.meta.dirname;
const app = express();

app.use("/static", express.static(__dirname + '/static'));
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

//lenh cuoi cung
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
