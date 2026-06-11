function convertirCelciusEnFajrenheit(celcius){
   let fahrenheit=0
fahrenheit=(celcius*9/5)+32
return fahrenheit;
}
let fahrenheit=0;
fahrenheit=convertirCelciusEnFajrenheit(0);
console.log(fahrenheit);
fahrenheit=convertirCelciusEnFajrenheit(25);
console.log(fahrenheit);
fahrenheit=convertirCelciusEnFajrenheit(100);
console.log(fahrenheit);