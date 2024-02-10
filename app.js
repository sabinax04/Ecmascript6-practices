// .includes() , .toLowerCase()

const name = "Alina";

const name2 = "Ravin";

console.log(name.includes("Ali")); // true
console.log(name.includes("alina")); // false

const newName = name.toLowerCase();
console.log(newName);

console.log(name.toLowerCase().includes("na"));

console.log(name.toLowerCase().includes(name2.toLowerCase()));


const urunler = [

    { id : 1, name: "Kalem", fiyat: 5 },
    { id : 2, name: "Defter", fiyat: 10 },
    { id : 3, name: "Silgi", fiyat: 2 },
    { id : 4, name: "Kalemtraş", fiyat: 7 },
    
];

console.log(urunler.filter((urun)=>urun.name.toLowerCase().includes("kalem")));
