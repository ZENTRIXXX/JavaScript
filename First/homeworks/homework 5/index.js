let a = 0 || 5;                 
let b = "" || "Hello";        
let c = null || 100;      
let d = false || true;     
let e = undefined || "null"; 

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


// 2 and (&&)
let f = true && null;       
let g = 5 && 10;            
let h = "Hi" && 0;          
let i = false && true;          
let j = "A" && "";       

console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);


// 3 not (!)
let k = !true;        
let l = !0;          
let m = !"Hello";     
let n = !null;       
let o = !undefined;  

console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);

// 4 nulish (??)
let p = null ?? "Default";     
let q = undefined ?? 10;
let r = 0 ?? 5;      
let s = "" ?? "Empty";          
let t = false ?? true;     

console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(t);
