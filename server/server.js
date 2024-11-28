const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const port = 3000;

server.use(jsonServer.defaults());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(router);

server.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = router.db.get('users').find({ email, password }).value();

    if (user) {
        res.status(200).jsonp({ token: user.token });
    } else {
        res.status(401).jsonp({ error: 'Invalid credentials' });
    }
});

server.listen(port, () => console.log(`Node server is running on http://localhost:${port}`));
