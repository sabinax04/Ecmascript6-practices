// .map()

const urunler = [

    { id : 1, name: "Kalem", fiyat: 5 },
    { id : 2, name: "Defter", fiyat: 10 },
    { id : 3, name: "Silgi", fiyat: 2 },
    { id : 4, name: "Kalemtraş", fiyat: 7 },
    
];

//console.log(urunler.map(urun => `${urun.name} fiyati ${urun.fiyat} liradir.`));

const newUrun = (urun => `${urun.name} fiyati ${urun.fiyat} liradir.`);

console.log(urunler.map(newUrun));