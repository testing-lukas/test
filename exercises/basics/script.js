/* ==========
1.

Remdamiesi turimu skaičių masyvu:
1. Sukurkite naują masyvą, kuriame bus visi NELYGINIAI skaičiai;
2. Sukurkite masyvą, kuriame bus skaičiai, kurie dalinasi
iš 2 ARBA 5;
3. Sukurkite masyvą, kuriame bus visi skaičiai, kurie dalinasi
iš 3. Galutiniame masyve visi šie skaičiai turi būti pakelti
kvadratu!

*/

const tens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ==========
2.
Parašykite f-ją, kuri priims masyvą ir grąžins naują
masyvą su visomis PASIKARTOJANČIOMIS reikšmėmis.

*/

const findDup = arr => {
  // your code
};

console.log(findDup([4, 2, 34, 4, 1, 12, 1, 4])); //[4, 1]

/* ==========
3.
Parašykite f-ją, kuri priims skaičių ir grąžins 
kokio ilgio tai yra skaičius. 
Svarbu - rezultatas taip pat turi būti skaičius.

*/

const digitCount = num => {
  // your code
};

console.log(digitCount(8367)); //4
console.log(digitCount(563349)); //6

/* ==========
4.

a) Turime telefono numerį: +37066666666;
b) Sukurti funkciją, kuri užmaskuos visus 
numerio simbolius, išskyrius:
    x) 3 pirmus simbolius
    z) 2 paskutinius simbolius

Rezultatas: +37*********66;

*/

const phone = "+37066666666";

/* ========== 
5.

Turite herojų masyvą;
Sukurkite naują masyvą, kuriame kiekvienas objectas turės tokius
properties:
id - įdėkite indexo vertę
hero - herojaus vardas

Svarbu: name property naujame masyve neturi likti.

*/

const heros = [
  { name: "Spider-Man" },
  { name: "Thor" },
  { name: "Black Panther" },
  { name: "Captain Marvel" },
  { name: "Silver Surfer" }
];

/* ========== 
6.

Pabaikite funkciją, kuri išskirstys camelCase
tekstą į atskirus žodžius. Kas yra camelCase?
taiTiesiogTekstasKuriameKiekviensŽodisPradedamasIšDidžiosiosRaidėsIšskyrusPirmąjį :)

Examples:
"camelCasing" => "camel Casing"
"identifier" => "identifier"
"" => "" 

*/

const breakCamelCase = string => {
  // your code
};

console.log(breakCamelCase("camelCasing"));
// "camel Casing"

console.log(breakCamelCase("camelCasingTest"));
// "camel Casing Test"

/* ========== 
7.

Miško žvėrys nusprendė iškelti puotą. Kiekvienas žvėris atsineš po vieną
patiekalą, tačiau yra labai svarbi taisyklė:
- Patiekalas turi prasidėti ir baigtis tokiomis pačiomis raidėmis,
kaip ir jį atsinešusio žvėries vardas, priešingu atveju - šventėje
dalyvauti negalės!

Pabaikite funkciją, kuri priims žvėries vardą bei patiekalo pavadinimą
ir grąžins boolean, kuris pasakys ar žvėris dalyvauti šventėje gali.

*/

const feast = (beast, dish) => {
  //your function here
};

feast("great blue heron", "garlic naan"); // true
feast("chickadee", "chocolate cake"); // true
feast("brown bear", "bear claw"); // false
