
let date = new Date();

let dateInfo = {
  year: date.getFullYear(),        
  month: date.getMonth() + 1,      
  day: date.getDate(),             
  weekDay: date.getDay(),          
  hours: date.getHours(),          
  minutes: date.getMinutes(),      
  seconds: date.getSeconds(),      
  milliseconds: date.getMilliseconds(), 
  timestamp: date.getTime(),       
  dateString: date.toDateString(), 
  timeString: date.toTimeString(),
  iso: date.toISOString(),         
  utc: date.toUTCString(),         
  locale: date.toLocaleString(),   
  localeDate: date.toLocaleDateString(), 
  localeTime: date.toLocaleTimeString()  
};


console.log(dateInfo);


let obj = {
    ism: "Azizbek",
    status: "oqiydi"
}

let jsonData = JSON.stringify(obj, {}, 4)

console.log(jsonData);
console.log("\n");
console.log("\n");
let parseData = JSON.parse(jsonData)
console.log(parseData);
