const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    showHeroes: (req, res) => {
        res.send(heroes);
    },
    detail: (req,res) => {
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id) );
	
        if (heroe === undefined) {
            res.send("Heroe no encontrado");
        } else {
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
        }
    },
    biography: (req,res) => {
        let heroe = heroes.find(heroe => heroe.id === Number(req.params.id) );

        if (heroe === undefined) {
            res.send("No encontramos un héroe para mostrarte su biografía");
        } else if (req.params.ok === 'ok'){
            res.send(`Heroe: ${heroe.nombre} <br> Reseña: ${heroe.resenia}`);
        } else {
            res.send(`${heroe.nombre} dice: Lamento que no quieras saber más de mí :(`);
        }
    }
}

