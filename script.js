//Uppgift 2//
//console.log(name) //Funkar inte före blocket eftersom const bara är tillgänglig inne i blocket
console.log('Funkar innan blocket')
//console.log(city) Före deklarationen blir värdet undefined

{let years = '27 år'; 
 var city = 'Falun'
 const name = 'Lovisa'

console.log(years);
console.log(name);
console.log(city)
console.log('inuti blocket')
}

console.log('Hej hej')
console.log(city)
//console.log(name) Fungerar inte utanför blocket

/* 1. Let och const funkerar bara inom blocket {}. Medan var fungerar utanför blocket om den deklarerats i samma funktion.
2. Console.log('...') fungerar både innan, inuti och efter blocket. Men det som skrivs ut 
beror på vilka variabler som är tillgängliga på platsen. */

// Uppgift 3 och 4 // 
const add = (num1, num2) => {
    console.log(num1 == 0);
    console.log(num2 === '0');
    console.log(num2 === 0);
    console.log(num1 == NaN);

 console.log(num1 ? 'truthy' : 'falsy');

  if (
    num1 != null &&
    num2 != null &&
    typeof num1 ==='number' &&
    typeof num2 ==='number' &&
    !Number.isNaN(num1) &&
    !Number.isNaN(num2)
  ) {
    return num1 + num2; 
 }
}


/* 1. Hade jag skapat variabeln med nyckelordet let hade funktionen fungerat likadant.
Skillnaden är att en variabel med let kan tilldelas ett nytt värde senare, medan const inte kan omtilldelas.

2. function add(num1, num2) {
    return num1 + num2;
}
3. När en funktion returnerar något får vi tillbaka ett värde*/

//uppgift 4//

/* 1. En ternary operator är en kortare variant att skriva en if/else-sats.

2. Skillnaden mellan att skriva två (==) och tre (===), är att två jämför värden och kan omvandla datatyper, 
medan tre jämför både värde och datatyp. 

3. Jag kontrollerade att num1 och num2 inte är null eller undefined genom att använda !=null.
Båda parametrarna måste uppfylla villkoret för att koden ska fortsätta in i if-statsen. 
*/

//Uppgift 5//

const num1 = 0; 
let arg1;
let sum = false;

//Test 1// 
console.log(add(sum,1));

//Test 2// 
console.log(add('0', 3));

//Test 3//
console.log(add(3, 'num1'));

//Test 4//
console.log(add(-5, num1));

//Test 5// 
console.log(add(arg1, 7)); 

//Test 6//
console.log(add());
 
console.log(num1);
console.log(sum);

/*1. En parameter är en variabel i funktionens definition som tar emot ett värde, till exempel num1 och num2.
En variabel är något som lagrar ett värde.
Ett argument är värdet som skickas till funktionen när den anropas.

2. Den sista outputen för num1 blir 0 eftersom variabeln num1 utanför funktionen har värdet 0.
Parametern num1 inne i funktionen är en annan variabel och ändrar inte num1 utanför funktionen.

3. Test 1: 
Här skickas sum och 1 till funktionen. Eftersom sum har värdet false blir num1 false och num2 blir 1.
Resultatet blir undefined eftersom num1 inte är en number. 
Därför uppfylls inte if-satsens villkor och funktionen kommer aldrig till return. 

Test 2: 
Eftersom num1 är en sträng och inte en number uppfylls inte if-satsens villkor. Funktionen kommer därför 
aldrig till return och resultatet blir undefined. 

Test 3: 
Eftersom num2 är en sträng och inte en number uppfylls inte if-satsens villkor. Funktionen kommer därför 
aldrig till return och resultatet blir undefined.

Test 4: 
Den första jämförelsen num1 == 0 blir false eftersom -5 inte är lika med 0.
Den andra jämförelsen num2 === '0' blir false eftersom num2 är siffran 0 och '0' är en sträng. De har alltså olika datatyper.
Den tredje jämförelsen num2 === 0 blir true eftersom num2 har värdet 0 och jämförs med siffran 0. Både värdet och datatypen är samma.
Den fjärde jämförelsen num1 == NaN blir false eftersom num1 har värdet -5 vilket är ett nummer och inte NaN. NaN är ett speciellt värde som inte är 
lika med något annat värde, inte ens sig självt.
Villkorsoperatorn (ternary operatorn) kontrollerar om num1 är truthy eller falsy. Eftersom num1 har värdet -5, som är ett tal som inte är 0, är värdet truthy. 
Därför skrivs 'truthy' ut i konsolen.

Här skickas -5 och num1 till funktionen. Det innebär att num1 blir -5 och num2 blir 0, eftersom variabeln num1 utanför funktionen har värdet 0. 
I if-satsen kontrolleras sedan att värdena inte är null, att båda är av typen number och att inget av värdena är NaN. 
Alla villkor är uppfyllda och if-satsen gås igenom.
Funktionen kommer därför till return och returnerar -5 + 0, alltså -5. 

Test 5: 
Eftersom num1 inte är en number uppfylls inte if-satsens villkor. Funktionen kommer därför 
aldrig till return och resultatet blir undefined. 

Test 6: 
Eftersom värdena inte är av datatypen number uppfylls inte if-satsens villkor. Funktionen kommer därför
aldrig till return och resultatet blir undefined. 
*/