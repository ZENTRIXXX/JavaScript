let text = "JS dasturlash tili"

// 1 - length    matn uzzunligini chiqarib beradi
console.log(text.length);


// 2 - charAt    inddeksdagi harfni chiqarib beradi
console.log(text.charAt(1));


// 3 - toUpperCase  matndagi hamma harflarni katta qilib beradi
console.log(text.toUpperCase());


// 4 - loLowerCase  matndagi hamma harflarni kichik qilib beradi
console.log(text.toLowerCase());


// 5 - trim     boshida va ohiridagi bosh joylarni(probellarni) olib tashlaydi
console.log(text.trim());
 

// 6 - includes    matn ichidagi bor yoki yoqligini aniqlaydi
console.log(text.includes("tili"));


// 7 - startsWish   matn shu bilan boshlannadimi deb tekshiradi
console.log(text.startsWith("java"));


// 8 - endsWish  matn ohiri shu bilan tugaydimi tekshiradi
console.log(text.endsWish("tili"));


// 9 - indexOf  birinchi uchraydigan belgilarni indeksga chiqazadi
console.log(text.indexOf("w"));


// 10 - lastIndexOf     ohirida uchraydigan belgini indeksga chiqazadi
console.log(text.lastIndexOf("s"));


// 11 - slice   kesib olish 
console.log(text.slice(5,10));

