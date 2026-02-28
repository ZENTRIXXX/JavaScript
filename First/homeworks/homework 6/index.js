let age = 20;
if (age >= 90){
    console.log("bu olgan bolishi mumkin")
}
else if (age >= 80 && age < 90){
    console.log("bu pensioner")
}
else if(age >= 40 && age < 80 ) {
    console.log("Bu ishlaydi");
}
else if(age >=18 && age < 30 ) {
    console.log("bu universitetda oqiydi");
}
else if (age >= 7 && age < 18) {
    console.log("bu maktabda oqiydi");
}
else if (age >= 3 && age <7) {
    console.log("bu bogchada ishlaydi");
}
else  {
    console.log("bu hali chaqaloq");
}