const express = require('express');
const app = express();
const mainRoute = require('./routes/main');
const heroesRoute = require('./routes/heroes');

app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/', mainRoute);
app.use('/heroes', heroesRoute);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});