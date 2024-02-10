// Promises and async/await

/*
const veriGetir = new Promise((resolve, reject) => {
    const veri = true;

    if(veri){
        resolve("Bu ifade true");
    }else{
        reject("Bu ifade false");
    }

});

veriGetir
.then((cevab) => console.log("Gelen cevap : ", cevab))
.catch((hata) => console.log("Gelen hata : ", hata));

*/

const axios = require('axios');

//console.log(axios);

// https://restcountries.eu/rest/v2/all

async function ulkeGetir(){
    // axios
    // .get("https://restcountries.eu/rest/v2/all")
    // .then((response) => console.log(response.data[0]))
    // .catch();

    const ulkeListesi = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(ulkeListesi);
}

ulkeGetir();