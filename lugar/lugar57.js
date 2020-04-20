const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': '73f194e128msh1e92e20743ea665p120afcjsnc311b7515481'}
    });

    const resp = await instance.get();
    if(resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {direccion, lat, lng};
}

 module.exports = {
     getLugarLatLng
 }