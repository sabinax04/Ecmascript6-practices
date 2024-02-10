// .filter()

const urunler = [

    { id : 1, name: "Kalem", fiyat: 5 },
    { id : 2, name: "Defter", fiyat: 10 },
    { id : 3, name: "Silgi", fiyat: 2 },
    { id : 4, name: "Kalemtraş", fiyat: 7 },
    
];


console.log(urunler.filter(urun => urun.fiyat > 5));


console.log(
    urunler.filter(
        urun => urun.name.toLowerCase().includes("kalem".toLowerCase())
    )
);