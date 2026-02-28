let str = "Algoritm";

// length 
console.log(str.length);           
console.log("Salom".length);        
console.log("JavaScript".length);  
console.log("".length);             
console.log("12345".length);        

console.log("=======================");
// charAt  
console.log(str.charAt(0));         
console.log(str.charAt(3));         
console.log(str.charAt(7));         
console.log(str.charAt(10));        
console.log("Salom".charAt(1));     

console.log("=======================");
// at  
console.log(str.at(0));             
console.log(str.at(2));             
console.log(str.at(-1));           
console.log(str.at(-2));            
console.log("Hello".at(-3));        

console.log("=======================");
// charCodeAt  
console.log("A".charCodeAt());      
console.log("a".charCodeAt());      
console.log(str.charCodeAt(0));    
console.log(str.charCodeAt(1));     
console.log("0".charCodeAt());      

console.log("=======================");
// concat   
console.log("Salom" + " Dunyo");    
console.log("Assalomu ".concat("alaykum"));
console.log("JS ".concat("string ", "methods"));
console.log(str.concat(" darsi"));
console.log("Front".concat("end"));

console.log("=======================");
// includes 
console.log(str.includes("go"));    
console.log(str.includes("it"));    
console.log(str.includes("tm"));    
console.log(str.includes("JS"));   
console.log("Salom".includes("lo")); 

console.log("=======================");
//  startsWith
console.log(str.startsWith("Al"));
console.log(str.startsWith("al"));  
console.log("JavaScript".startsWith("Java"));
console.log("Salom".startsWith("S")); 
console.log("Hello".startsWith("H")); 

console.log("=======================");
// endsWith 
console.log(str.endsWith("tm"));   
console.log(str.endsWith("it"));    
console.log("Salom".endsWith("om"));
console.log("JavaScript".endsWith("Script")); 
console.log("Hello".endsWith("o")); 

console.log("=======================");
// search
console.log(str.search("g"));       
console.log(str.search("A"));       
console.log(str.search(/a/i));      
console.log("Salom".search("l"));  
console.log("Hello".search("z"));   

console.log("=======================");
// indexOf  
console.log(str.indexOf("r"));      
console.log(str.indexOf("o"));      
console.log(str.indexOf("A"));      
console.log(str.indexOf("z"));      
console.log("Salom".indexOf("o"));  

console.log("=======================");

//  las`tIndexOf 
console.log(str.lastIndexOf("r"));  
console.log("Hello".lastIndexOf("l"));
console.log("banana".lastIndexOf("a"));
console.log("Salom".lastIndexOf("S")); 
console.log(str.lastIndexOf("z"));  
