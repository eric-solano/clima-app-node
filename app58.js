const lugar = require('./lugar/lugar58');
const clima = require('./clima/clima58');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(console.log)

clima.getClima(40.750000, -74.000000)
    .then(console.log)