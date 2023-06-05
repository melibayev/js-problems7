// String1. Berilgan son bo'yicha katta harflar
// N butun soni berilgan (1 <= N <= 26).
// Lotin alfavitidagi dastlabki N ta katta harflarni chiqaruvchi programma tuzilsin.

function chiqarKattaHarflar(n) {
    let result = "";
    const startCode = "A".charCodeAt(0);
    for (let i = 0; i < n; i++) {
      result += String.fromCharCode(startCode + i);
    }
    return result;
  }
  
  const n = 5;
  const kattaHarflar = chiqarKattaHarflar(n);
  console.log(kattaHarflar);

  
// String2. 
// Kiritilgan belgining nimaligini aniqlovchi programma tuzilsin.
// Agar kiritilgan belgi raqam bo'lsa - "digit", lotincha harf bo'lsa - "lotin" yozuvi chiqarilsin.
// Boshqa xolatlar uchun nol chiqarilsin.

function aniqlovchi(belgi) {
    if (belgi.match(/[0-9]/)) {
      return "digit";
    } else if (belgi.match(/[a-zA-Z]/)) {
      return "lotin";
    } else {
      return "nol";
    }
  }
  
  const belgi = "7";
  const belgiTuri = aniqlovchi(belgi);
  console.log(belgiTuri);
  

// String3
// Satr berilgan.
// Satrning birinchi va oxirgi belgisini UTF-16 jadvalidagi kodini chiqaruvchi programma tuzilsin.

function chiqarUTF16Kod(satr) {
    const birinchiBelgi = satr.charCodeAt(0);
    const oxirgiBelgi = satr.charCodeAt(satr.length - 1);
    return `Birinchi belgi: ${birinchiBelgi}, Oxirgi belgi: ${oxirgiBelgi}`;
  }
  
  const satr = "Hello";
  const utf16Kod = chiqarUTF16Kod(satr);
  console.log(utf16Kod);



// String4. Satr hosil qilish
// N natural soni va belgi berilgan.
// N ta kiritilgan belgidan iborat satr hosil qiling va ekranga chiqaring.
// Masalan: N = 5; Belgi = 'A'; Natija = AAAAA

function hosilQilish(n, belgi) {
    let satr = "";
    for (let i = 0; i < n; i++) {
      satr += belgi;
    }
    return satr;
  }
  
  const n = 5;
  const belgi = "A";
  const natija = hosilQilish(n, belgi);
  console.log(natija);

  
// String5. Teskari tartibda chiqarish
// N natural soni va belgi berilgan.
// N ta kiritilgan belgidan iborat satr hosil qiling va ekranga chiqaring.
// Masalan: N = 5; Belgi = 'A'; Natija = AAAAA

function hosilQilish(n, belgi) {
    let satr = "";
    for (let i = 0; i < n; i++) {
      satr += belgi;
    }
    return satr;
  }
  
  const n = 5;
  const belgi = "A";
  const natija = hosilQilish(n, belgi);
  console.log(natija);

  
//   String6. 
// Satr va N natural soni berilgan.
// Shu satr belgilari orasiga N tadan “*” belgisi qo’yib yangi satr qaytaruvchi getStringStars(N) nomli funksiya tuzilsin.

function getStringStars(satr, n) {
    let yangiSatr = "";
    for (let i = 0; i < satr.length; i++) {
      yangiSatr += satr[i];
      for (let j = 0; j < n; j++) {
        yangiSatr += "*";
      }
    }
    return yangiSatr;
  }
  
  const satr = "Hello";
  const n = 3;
  const yangiSatr = getStringStars(satr, n);
  console.log(yangiSatr);
  

// String7. 
// Satr berilgan.
// Satrdagi raqamlar sonini aniqlovchi programma tuzilsin. (for of va isNaN dan foydalaning !)

function aniqlovchi(satr) {
    let sonlarSoni = 0;
    for (let belgi of satr) {
      if (!isNaN(belgi)) {
        sonlarSoni++;
      }
    }
    return sonlarSoni;
  }
  
  const satr = "Hello123";
  const sonlarSoni = aniqlovchi(satr);
  console.log(sonlarSoni);
  
  
// String8
// Satr berilgan.
// Satrdagi kichik lotin va kirill harflarining umumiy sonini aniqlovchi programma tuzilsin.

function aniqlovchi(satr) {
    let harflarSoni = 0;
    for (let belgi of satr) {
      if (belgi.match(/[a-zа-я]/)) {
        harflarSoni++;
      }
    }
    return harflarSoni;
  }
  
  const satr = "Hello привет";
  const harflarSoni = aniqlovchi(satr);
  console.log(harflarSoni);
  

// String9
// Satr berilgan.
// Satrdagi xamma katta lotin harflari kichikiga almashtiruvchi programma tuzilsin.

function almashtiruvchi(satr) {
    let yangiSatr = "";
    for (let belgi of satr) {
      if (belgi.match(/[A-Z]/)) {
        yangiSatr += belgi.toLowerCase();
      } else {
        yangiSatr += belgi;
      }
    }
    return yangiSatr;
  }
  
  const satr = "Hello World";
  const yangiSatr = almashtiruvchi(satr);
  console.log(yangiSatr);

  

// String10
// Satr berilgan.
// Satrdagi xamma katta harflarini kichikiga, kichik harflarini kattasiga almashtiruvchi programma tuzilsin.

function almashtiruvchi(satr) {
    let yangiSatr = "";
    for (let belgi of satr) {
      if (belgi.match(/[A-Z]/)) {
        yangiSatr += belgi.toLowerCase();
      } else if (belgi.match(/[a-z]/)) {
        yangiSatr += belgi.toUpperCase();
      } else {
        yangiSatr += belgi;
      }
    }
    return yangiSatr;
  }
  
  const satr = "Hello World";
  const yangiSatr = almashtiruvchi(satr);
  console.log(yangiSatr);

  
// String11
// Satr berilgan.
// Agar satrda butun son ifodalangan bo'lsa 1 chiqarilsin, agar haqiqiy son bo'lsa 2 chiqarilsin.
// Agar satrni songa aylantirish imkoni bo'lmasa 0 chiqarilsin. Haqiqiy sonning kasr qismi nuqta "." Bilan ajratilgan deb qabul qilinsin.

function aylantiruvchi(satr) {
    if (!isNaN(satr)) {
      return 1;
    } else if (!isNaN(parseFloat(satr))) {
      return 2;
    } else {
      return 0;
    }
  }
  
  const satr1 = "123";
  const satr2 = "3.14";
  const satr3 = "Hello";
  const natija1 = aylantiruvchi(satr1);
  const natija2 = aylantiruvchi(satr2);
  const natija3 = aylantiruvchi(satr3);
  console.log(natija1); // 1
  console.log(natija2); // 2
  console.log(natija3); // 0

  

// String12
// Berilgan n sonni teskarisiga almashtiruvchi getInverseNumber(n) nomli funksiya tuzing.

function getInverseNumber(n) {
    const teskari = parseInt(n.toString().split("").reverse().join(""));
    return teskari;
  }
  
  const n = 12345;
  const teskari = getInverseNumber(n);
  console.log(teskari);
  

// String13
// Satr berilgan.
// Berilgan satrni teskari tartibda chiqaruvchi programma tuzilsin. (rekursiv rekursiya yordamida)

function teskariChiqar(satr) {
    if (satr === "") {
      return "";
    } else {
      return teskariChiqar(satr.substr(1)) + satr[0];
    }
  }
  
  const satr = "Hello";
  const teskariNatija = teskariChiqar(satr);
  console.log(teskariNatija);

  
//   String14
// Berilgan sonni teskarisiga almashtiruvchi getInverseNumber(n) nomli funksiya tuzing.

function getInverseNumber(n) {
    const teskari = parseInt(n.toString().split("").reverse().join(""));
    return teskari;
  }
  
  const n = 12345;
  const teskari = getInverseNumber(n);
  console.log(teskari);

  
// String15
// Satr berilgan.
// Satrdagi bir xil belgilarni nechta borligini aniqlaydigan programma tuzilsin. (for of dan foydalaning)

function aniqlovchi(satr) {
    const belgilar = {};
    for (let belgi of satr) {
      if (belgilar[belgi]) {
        belgilar[belgi]++;
      } else {
        belgilar[belgi] = 1;
      }
    }
    return belgilar;
  }
  
  const satr = "Hello";
  const natija = aniqlovchi(satr);
  console.log(natija);

  
// String16
// Kiritilgan belgini ko'rsatgan so'zlarni topish.
// Kiritilgan belgini ko'rsatgan so'zlarni topuvchi programma tuzilsin.

function topishBelgi(satr, belgi) {
    const sozlar = satr.split(" ");
    const topilganSozlar = [];
    for (let soz of sozlar) {
      if (soz.includes(belgi)) {
        topilganSozlar.push(soz);
      }
    }
    return topilganSozlar;
  }
  
  const satr = "Salom, dunyo! Men sizni kutib olaman.";
  const belgi = "o";
  const topilganSozlar = topishBelgi(satr, belgi);
  console.log(topilganSozlar);

// String17
// Berilgan so'zning necha marta takrorlandigini topuvchi programma tuzilsin.

function takrorlanishlarSoni(soz, satr) {
    const regExp = new RegExp(soz, "g");
    const takrorlanishlar = satr.match(regExp);
    if (takrorlanishlar) {
      return takrorlanishlar.length;
    } else {
      return 0;
    }
  }
  
  const satr = "Salom Salom Salom, dunyo! Salom";
  const soz = "Salom";
  const takrorlanishlar = takrorlanishlarSoni(soz, satr);
  console.log(takrorlanishlar);

  

// String18
// Bir so'zni o'chirish.
// Berilgan satrdan birinchi uchragan berilgan so'zni o'chirib tashlovchi programma tuzilsin.
// Agar berilgan so'z satrda uchramasa, satr o'zgarmas qolsin.

function o'chirishSoz(satr, soz) {
    const sozlar = satr.split(" ");
    const index = sozlar.indexOf(soz);
    if (index !== -1) {
      sozlar.splice(index, 1);
      return sozlar.join(" ");
    } else {
      return satr;
    }
  }
  
  const satr = "Salom, dunyo! Men sizni kutib olaman.";
  const soz = "dunyo!";
  const natija = o'chirishSoz(satr, soz);
  console.log(natija);

//String20
// Bir satrning birinchisidan ikkinchisiga o'zgartirish.
// Berilgan satrdan birinchi uchragan berilgan so'zni ikkinchi berilgan so'zga o'zgartirib beruvchi programma tuzilsin.

function o'zgartirishSoz(satr, birinchiSoz, ikkinchiSoz) {
    return satr.replace(birinchiSoz, ikkinchiSoz);
  }
  
  const satr = "Salom, dunyo! Men sizni kutib olaman.";
  const birinchiSoz = "Salom";
  const ikkinchiSoz = "Xayr";
  const natija = o'zgartirishSoz(satr, birinchiSoz, ikkinchiSoz);
  console.log(natija);
  
// String21
// Bir satrning oxirgisidan ikkinchisiga o'zgartirish.
// Berilgan satrdan oxirgi uchragan berilgan so'zni ikkinchi berilgan so'zga o'zgartirib beruvchi programma tuzilsin.

function o'zgartirishOxirgi(satr, birinchiSoz, ikkinchiSoz) {
    const sozlar = satr.split(" ");
    const oxirgiSozIndex = sozlar.length - 1;
    if (sozlar[oxirgiSozIndex] === birinchiSoz) {
      sozlar[oxirgiSozIndex] = ikkinchiSoz;
    }
    return sozlar.join(" ");
  }
  
  const satr = "Salom, dunyo! Men sizni kutib olaman.";
  const birinchiSoz = "olaman.";
  const ikkinchiSoz = "yaxshiman.";
  const natija = o'zgartirishOxirgi(satr, birinchiSoz, ikkinchiSoz);
  console.log(natija);

  
// String22
// Boshlanuvchi va tuguvchi so'zlarning sonini topuvchi programma tuzilsin.
// Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat satrdagi
// boshlanuvchi va tuguvchi so'zlarning sonini aniqlovchi programma tuzilsin.

function topishSozlar(satr) {
    const sozlar = satr.split(" ");
    const boshlanuvchiSoz = sozlar[0];
    const tuguvchiSoz = sozlar[sozlar.length - 1];
    return [boshlanuvchiSoz.length, tuguvchiSoz.length];
  }
  
  const satr = "O'zbekiston Respublikasi";
  const [boshlanuvchiSozSon, tuguvchiSozSon] = topishSozlar(satr);
  console.log(boshlanuvchiSozSon, tuguvchiSozSon);
  

//   String24
// Eng uzun so'zni topish.
// Berilgan satrdagi probel bilan ajratilgan o'zbekcha so'zlardan eng uzun so'zni topuvchi funksiya tuzilsin.

function getMaxOfString(str) {
    const words = str.split(" ");
    let maxLength = 0;
    let maxWord = "";
  
    for (let word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
        maxWord = word;
      }
    }
  
    return maxWord;
  }
  
  const satr = "Salom dunyo men sizni kutib olaman";
  const natija = getMaxOfString(satr);
  console.log(natija);
  

  
// String25
// So'zlarni "." bilan ajratish.
// Berilgan satrdagi probel bilan ajratilgan o'zbekcha so'zlarni "." bilan ajratuvchi programma tuzilsin.
// Satr oxiriga "." qo'yish shart emas.

function ajratishDotBilan(satr) {
    const sozlar = satr.split(" ");
    const ajratilganSatr = sozlar.join(".");
    return ajratilganSatr;
  }
  
  const satr = "Salom dunyo men sizni kutib olaman";
  const natija = ajratishDotBilan(satr);
  console.log(natija);
  
  
// String26
// Birinchi harflarni katta qilish.
// Berilgan satrdagi kichik harfli so'zlarning birinchi harfini katta harf bilan almashtiruvchi programma tuzilsin.

function kattaQilishBirinchiHarf(satr) {
    const sozlar = satr.split(" ");
    const natija = [];
  
    for (let soz of sozlar) {
      const kattaSoz = soz.charAt(0).toUpperCase() + soz.slice(1);
      natija.push(kattaSoz);
    }
  
    return natija.join(" ");
  }
  
  const satr = "salom dunyo men sizni kutib olaman";
  const natija = kattaQilishBirinchiHarf(satr);
  console.log(natija);
  
  
// String27
// Tinish belgilari sonini chiqarish.
// Berilgan satrdagi tinish belgilari (marks) sonini topuvchi programma tuzilsin.

function tinishBelgilariSoniniTopish(satr) {
    const marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
    let count = 0;
  
    for (let mark of marks) {
      const regex = new RegExp(mark, "g");
      const matches = satr.match(regex);
      if (matches) {
        count += matches.length;
      }
    }
  
    return count;
  }
  
  const satr = "Salom! Dunyo, men sizni kutib olaman.";
  const natija = tinishBelgilariSoniniTopish(satr);
  console.log(natija);
  


// String28
// Faylning nomini aniqlovchi programma.
// Berilgan satrdan faylning nomini (kengaytmasiz) aniqlovchi programma tuzilsin.

function getFileNameFromPath(path) {
    const parts = path.split("/");
    const fileNameWithExtension = parts[parts.length - 1];
    const fileName = fileNameWithExtension.split(".")[0];
    return fileName;
  }
  
  const path = "D:/Qudrat_c++/books/My_book.exe";
  const fileName = getFileNameFromPath(path);
  console.log(fileName);

  
// String29
// Faylning kengaytmasini aniqlovchi programma.
// Berilgan satrdan faylning kengaytmasini aniqlovchi programma tuzilsin.

function getFileExtensionFromPath(path) {
    const parts = path.split("/");
    const fileNameWithExtension = parts[parts.length - 1];
    const fileExtension = fileNameWithExtension.split(".")[1];
    return fileExtension;
  }
  
  const path = "D:/Qudrat_c++/books/My_book.exe";
  const fileExtension = getFileExtensionFromPath(path);
  console.log(fileExtension);

  
// String30
// Oxirgi papka nomini aniqlovchi programma.
// Berilgan satrdan oxirgi papka nomini aniqlovchi programma tuzilsin.
// Agar papka tub bo'lsa (корневой), "/" belgisi chiqarilsin.

function getLastFolderFromPath(path) {
    const parts = path.split("/");
    const lastFolder = parts[parts.length - 2];
    return lastFolder === "" ? "/" : lastFolder;
  }
  
  const path = "D:/Qudrat_c++/books/My_book.exe";
  const lastFolder = getLastFolderFromPath(path);
  console.log(lastFolder);
  
  