// 1.
// Jei neteko girdėti, fetch metodas leidžia ištraukti JSON duomenis ir iš mūsų
// lokalios direktorijos. Turite endpoint kintamąjį, kurį reikia panaudoti,
// kad ištrauktumėte visą informaciją iš cars.json failo.
//
// Susikurkite async funkciją, kuri atliks fetch ir pabaigoje padarys return
// su visais gautais duomenimis. Ją panaudokite tolimesniuose žingsniuose.
// Dėmesio: atkreipkit dėmesį, kad JSON faile properties yra iš didžiosios raidės!

const CARS_ENDPOINT = "../exercises/cars.json"; // Patikrinkite ar kelias iki failo teisingas!

// 1.1
//
// Parašykite funkciją, kurią iškvietus konsolėje grąžins masyvą, kuriame
// bus TOP 3 mašinos su daugiausiai arklio galių (Horsepower fieldas).
// Svarbu - masyve grąžinkite tik Name ir Horsepower fieldus.
//
// Rezultatas:
// [
//   {
//     horsepower: 230,
//     name: "pontiac grand prix"
//   },
//   {
//     horsepower: 225,
//     name: "pontiac catalina"
//   },
//   {
//     horsepower: 225,
//     name: "buick estate wagon (sw)"
//   }
// ]

/* Your code goes here */

// 1.2
// Parašykite funkciją, kurią iškvietus konsolėje grąžins masyvą, kuriame
// bus bus nurodytos visi automobilių kilmės regionai (Origin fieldas).
//
// Rezultatas:
// [ "USA", "Europe", "Japan" ]

/* Your code goes here */

// 1.3
// Parašykite funkciją, kuri priims vieną parametrą - cilindrų skaičių - ir
// grąžins masyvą su automobilių pavadinimais (Name fieldas).
//
// Parametras: 3
// Rezultatas:
// [ "mazda rx2 coupe", "maxda rx3", "mazda rx-4", "mazda rx-7 gs" ]

/* Your code goes here */

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// 2.
//
// Turime milžinišką JSON failą, kuriame rasime populiariausius USA tinklinius
// restoranus ir jų valgiaraščius. Atliksime nedidelę analizę.
//
// Remdamiesi praėjusios užduoties principu, susikurkite funkciją, kuri
// ištrauks JSON duomenis iš juos return'ins. Ja pasinaudokite tolimesniuose
// žingsniuose.
//
// Prieš pradėdami dirbti pasižiūrėkite kaip struktūrizuojami duomenys.

const FOODS_ENDPOINT = "../exercises/foods.json"; // Patikrinkite ar kelias iki failo teisingas!

/* Your code goes here */

// 2.1
// Parašykite funkciją, kuri suras restoraną, savo meniu turintį daugiausiai "Hot Dog"
// patiekalų. Remkitės foodType property, bet atkreipkit dėmesį, kad ne visi foodItems
// ją turi.
//
// Sukonkretinus duomenis ties vienu kandidatu, konsolėje išveskite objektą:
// restaurant: restorano pavadinimas
// hotDogCount: skaičius, kiek iš viso meniu yra "Hot Dog" itemų
//
// Kitaip tariant - pamodifikuokite pirminį objektą, kad gautumėte pageidaujamą formatą.
//
// Rezultatas:
// {
//    restaurant: "Sonic",
//    hotDogCount: 9
// }

/* Your code goes here */

// 2.2
// Parašykite funkciją, kuri suras pačias "sočiausias" salotas, t.y. su daugiausiai
// kalorijų. :)
//
// Siūloma veiksmų seka:
// a. Išrinkite tik restoranus, kurių foodItems turi foodType === "Salad";
// b. Kiekvieno gauto restorano foodItems išfiltruokite, kad liktų tik "Salad";
// c. Išrūšiuokite ir gaukite kiekvieno restorano "Salad" su didžiausiu calories kiekiu;
// d. Išrūšiuokite visus restoranus tarpusavyje pagal jų "stipriausius" "Salad" laureatus;
//
// Rezultatą grąžinkite pamodifikuotame objekte:
// restaurant - restorano pavadinimas;
// saladName - stipriausių salotų pavadinimas;
// saladCalories - stipriausių salotų kalorijų kiekis;
//
// Atsakymas konsolėje:
// {
//     restaurant: "Wendys",
//     saladName: "Caesar Chicken Salad",
//     calories: 720
// };

/* Your code goes here */
