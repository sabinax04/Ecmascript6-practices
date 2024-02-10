// .reduce()

const urunler = [

    { id : 1, name: "Kalem", fiyat: 5 },
    { id : 2, name: "Defter", fiyat: 10 },
    { id : 3, name: "Silgi", fiyat: 2 },
    { id : 4, name: "Kalemtraş", fiyat: 7 },
    
];
 const toplamUrunFiyati = urunler.reduce((accumulator, currentValue) => accumulator = accumulator +currentValue.fiyat, 0);

 console.log( { toplamUrunFiyati } );

 const toplamString = urunler.reduce((accumulator, currentValue) => ( accumulator = `${accumulator} ${currentValue.name}`) , "Urun isimleri :");


 console.log(toplamString);

 const toplamArray = urunler.reduce((accumulator, currentValue) => accumulator = [...accumulator, currentValue.name], []);

 console.log( {toplamArray} );

 const mapMethod = urunler.map((urun) => urun.name );

 console.log(mapMethod);