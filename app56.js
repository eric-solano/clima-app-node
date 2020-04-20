const axios = require('axios')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv);

const encodeUrl = encodeURI(argv.direccion);
console.log(encodeUrl);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    //timeout: 1000,
    headers: {'x-rapidapi-key': '73f194e128msh1e92e20743ea665p120afcjsnc311b7515481'}
  });

instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]);
        })
        .catch( err => {
            console.log(err);
        })