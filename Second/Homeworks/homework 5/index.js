

//1
let mevalar = ["Olma", "Banan"];
mevalar.push("Anjir", "Behi");     
mevalar.push("Gilos");              
mevalar.pop();                      
let ochirildi = mevalar.pop();     
mevalar.push("O'rik");              
console.log( mevalar);

//2
let sonlar = [10, 20, 30];
sonlar.unshift(5, 8);               
sonlar.shift();                     
sonlar.unshift(1);                  
sonlar.shift();                     
sonlar.unshift(100);                
console.log( sonlar);


// 3
let mashinalar = ["Nexia", "Cobalt", "Gentra", "Malibu"];
console.log( mashinalar.at(-1));           
console.log( mashinalar.indexOf("Gentra")); 
console.log( mashinalar.includes("BMW"));   
console.log( mashinalar.at(1));            
console.log( mashinalar.indexOf("Tesla")); 
 

// 4
let matn = "Toshkent,Samarqand,Buxoro";
let ismlar = ["Ali", "Vali", "Gani"];
let shaharlar = matn.split(",");    
let harflar = "Salom".split("");    
let birikma1 = ismlar.join(" * ");  
let birikma2 = ismlar.join(" ");    
let birikma3 = ismlar.join("-");     
console.log( shaharlar, birikma1);

// 5
let hayvonlar = ["it", "mushuk", "sher", "ayiq", "tulki"];
let qism1 = hayvonlar.slice(1, 3);    
let qism2 = hayvonlar.slice(2);      
let qism3 = hayvonlar.slice(-2);     
let qism4 = hayvonlar.slice(0, 2);   
let nusxa = hayvonlar.slice();       
console.log( qism1, qism3);

// 6
let asboblar = ["bolta", "tesha", "arra", "ombir", "pichoq"];
asboblar.splice(2, 1);              
asboblar.splice(1, 1, "qaychi");     
asboblar.splice(0, 0, "randa");      
asboblar.splice(3, 2, "bolg'a");     
asboblar.splice(-1, 1);              
console.log(asboblar);


// 7
let m1 = [1, 2];                        
let m2 = [3, 4];
let m3 = [5, 6];
let jami1 = m1.concat(m2);          
let jami2 = m1.concat(m2, m3);       
let jami3 = m1.concat("text");       
let jami5 = m3.concat(m1);           
console.log( jami2);


// 8 
let i1 = [Algoritm]
let i2 = [Oxford]
let i3 = "Ziyokor"
let i4 = "SPC"
let i5 = "RRR academy"
console.log();
