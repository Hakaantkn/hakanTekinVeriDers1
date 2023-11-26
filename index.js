// console.log(); bu kardeş yaptığın şeyi çalıştırıyür


// console.log("hello world")
// String - STRİNG - str - Str
// let hello = "selam";
// const hello2 = "selam";
// const space = " ";
// console.log(hello + space + hello2)

// let text = "hakan";
// let length = text.length;   
// console.log(length)
// yazdığın kelimenin kaç harfli oldunu yazıyo

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// console.log(part)
// brocan slice de seçtiği rakama oturan yeri çıkarıyo

// let text = "please visit microsoft";
// let newtext = text.replace("microsoft", "w3schoold");
// console.log(newtext)
// replace seçtiğin kelimeyi yazdığınla değiştiriyo

// toUppercase(): cano bu gelen yazıyı büyük harfe çevirir
// toLowercase(): buda büyük yazıyı küçük harfe çevirir

// let text1 = "hello world!".toLowerCase();
// console.log(text1);
// bu şekilde yanına yazarakta çalıştırabilirsin

// let text = "II";
// let lowertext = text.toLocaleLowerCase("tr");
// console.log(lowertext);
// local lower veya upper yapıp tr dersen türkçe karakteri koruyo

// const sayi1 = 10;
// const sayi2 = 20;
// let yerine const kullanırsan daha hızlı olarmış genel olarak
// console.log(sayi1 + sayi2);

// const sayi1 = 12.2;
// const sayi2 = 10.2;
// console.log(sayi1 + sayi2);
// bu da float lı işlem

// let isim = "Hakan";
// let soyisim = "Tekin";
// let yas = 18;
// console.log("merhaba" , isim , soyisim , "sen" , yas.toString(), "yaşındasın");


const isim = "Hakan"
const soyisim = "Tekin"
const not1 = 47
const not2 = 44
const not3 = 59

const toplam = not1 + not2 + not3 ;  
const gecerlinot = toplam / 3; 

if(gecerlinot >= 50){
    console.log(`Merhaba ${isim} ${soyisim} not ortalamanız ${gecerlinot} dersten geçtiniz (geçme notu = 50)`)
}else{
    console.log(`Merhaba ${isim} ${soyisim} not ortalamanız ${gecerlinot} dersten kaldınız (geçme notu = 50)`)
}
