const express = require('express')
const app = express();

const motoGP = [
    {
        circuit: 'Losail',
        location:'Qatar',
        winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy'}
    },
    {
        circuit:'Autodromo',
        location:"Argentine",
        winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK'}
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy'}
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy'}
    }
];

app.get('/', (req, res) => {
    res.json(motoGP);
});
app.get('/country', (req, res) => {
    const winnersByCountry = {};
    motoGP.forEach(race=> {
        const country = race.winner.country;
        const winnerName = `${race.winner.firstName} ${race.winner.lastName}`;
        
        if (!winnersByCountry[country]) {
        winnersByCountry[country] = [];
        }
        winnersByCountry[country].push(winnerName); 
        
    });
    res.json(winnersByCountry);
});

app.get('/name', (req, res) => {
    const winnerNames = motoGP.map(race => `${race.winner.firstName} ${race.winner.lastName}`);
    res.json(winnerNames);
});

app.get('*', (req, res) => {
    req.status(400).send('Bad Request');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})  