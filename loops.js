// let i = 0;
// while (i <10){
//     console.log(i);
//     i++
// }

// let isim = "hakan";
// let dogumTarihi = 2008;
// let cinsiyet = "erkek";
// let sayac = 0;
// const date = new date();
// const dateYear = date.getFullYear();
// let yas = dateYear - dogumTarihi;

// while(sayac < 10){
//     if(cinsiyet == "erkek" && yas >= 20){
//       console.log(`${isim} kaçak hain askere git`);  
//     } else if(cinsiyet != "erkek") {
//         console.log(`${isim} askere gitme zorunluluğun yok`);
//         break;
//     } else {
//         console.log(`${isim} burda ne işin var`);
//         break;
//     }
// }

let meyveler = ['elma', 'armut', 'kivi', 'muz', 'çilek']
// for(let i = 0; i < meyveler.length; i++){
//     console.log(meyveler[i]);
// }  

for ( const meyve of ['elma', 'armut', 'kivi', 'muz', 'çilek']){
    console.log(meyve);
}