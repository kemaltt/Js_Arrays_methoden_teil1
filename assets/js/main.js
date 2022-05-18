// Arrays==================================
//Lev1_1--------------------------
let adresse = ['Brandenburger Allee', '40789', 'Monheim', 'Nrw']
console.log(adresse);

let besteFreunde = ['John', 'Alex', 'Heidi', 'Sinan', 'Mustafa', 'Normän']
console.log(besteFreunde);

let teilnehmer = ['Pascal', 'Alex', 'Cipi', 'Kadi', 'Mustafa', 'Normän', 'Kemal', 'Kadir']

// let person = ['Kemal', 'Tütüncü', 'kemaltt', 36, 'Fahrrad fahren', 'Kayseri', 'SuperCode']
// console.log(person)

let person = ['Kemal', 'Tütüncü', 'kemaltt', 36, 'Fahrrad fahren', 'Kayseri', 'SuperCode', adresse, besteFreunde]
console.log(person)
console.log('This is the array besteFreunde inside person :' + person[8]);
console.log('This is the array adresse inside person :' + person[7]);
console.log('This is the array teilnehmer inside person :' + teilnehmer);

// ===========================================================================

//Lev1_1_2--------------------------

console.log(adresse.length);
console.log(person.length);
console.log(teilnehmer.length);


// ===========================================================================

//Lev1_2--------------------------

let meineTrainer1 = ['Eric', 'Steffen', 'Simon', ' Ahmed']
console.log(meineTrainer1);


let meineTrainer2 = new Array("Max", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";

console.log(meineTrainer3);

// ===========================================================================

//Lev1_3--------------------------

let numberArray = [5, 6, 7, 8, 9, 10]
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);
// console.log(numberArray[numberArray.length - 1]);

// ===========================================================================
//Lev1_4-------Arrays Split()-------------------

let meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.';
let meinText2 = 'Wie geht es dir heute?';
let meinText3 = 'Heute ist ein großer Tag für uns.';

let split1 = meinText1.split();
let split2 = meinText1.split('');
let split3 = meinText1.split(' ');
let split4 = meinText2.split();
let split5 = meinText2.split('');
let split6 = meinText2.split(' ');
let split7 = meinText3.split();
let split8 = meinText3.split('');
let split9 = meinText3.split(' ');


console.log(split1);
console.log(split2);
console.log(split3);
console.log(split4);
console.log(split5);
console.log(split6);
console.log(split7);
console.log(split8);
console.log(split9);

// ===========================================================================
//Lev1_5_1-------Arrays push()-------------------

let songs = [
    'Bohemian Rhapsody', 'Stairway to Heaven', ' Hotel California'
]
let totalSongs = songs.push("Sweet Child O'Mine")
console.log(songs);
console.log(totalSongs);

let besteFussballerAllerZeiten = ['Lionel Messi', 'Robert Lewandowski', 'Cristiano Ronaldo', 'Neymar', 'Kylian Mbappé']
console.log(besteFussballerAllerZeiten);

besteFussballerAllerZeiten.push('Gianluigi Donnarumma')
console.log(besteFussballerAllerZeiten);

//----------------------
const artists = ["michael", "elvis"];
artists.push("justin", "charlie");
console.log(artists);

songs.push('Hey Jude', 'Smells like Teen')
console.log(songs);

besteFussballerAllerZeiten.push('Oliver Kahn', 'Iker')
console.log(besteFussballerAllerZeiten);

//Lev1_5_2-------Arrays push() in array-------------------

let heroUndEnemy = [
    ['Batman', 'The Joker'],
    ['Professor X', 'Magneto'],
    ['Thor', 'Thor']
]
console.log(heroUndEnemy);
heroUndEnemy.push(['Superman', 'Lex Luthor'], ['Wolverine', 'Sabretooth'], ['Ghost Rider', 'Mephisto'])

console.log(heroUndEnemy);

// ===========================================================================
//Lev1_6-------Arrays pop()-------------------

let entfernterSong = songs.pop()
console.log(entfernterSong); //Smells like Teen
console.log(totalSongs); //4

console.log(songs); //['Bohemian Rhapsody', 'Stairway to Heaven', ' Hotel California', "Sweet Child O'Mine", 'Hey Jude']


let entfernterFussballer = besteFussballerAllerZeiten.pop();
console.log(entfernterFussballer);
console.log(besteFussballerAllerZeiten);

// ===========================================================================
////Lev1_7-------Arrays unshift()-------------------

let deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten']
console.log(deutscheGerichte);

deutscheGerichte.unshift('Bremer Knipp')
console.log(deutscheGerichte);

// ===========================================================================
////Lev1_8-------Arrays shift()-------------------

deutscheGerichte.shift();
deutscheGerichte.shift();
deutscheGerichte.shift();
console.log(deutscheGerichte);

let nichtGut = deutscheGerichte.shift();
console.log(nichtGut);
console.log(deutscheGerichte);

// ===========================================================================
////Lev1_9-------Arrays Push Pop Shift Unshift Difference-------------------

let newArr = [23, 54, 75]
console.log(newArr);

newArr.push(11, 32, 42, 5, 71)
console.log(newArr);

newArr.unshift(1, 3, 7, 8, 14)
console.log(newArr);

newArr.pop();
newArr.pop();
console.log(newArr);

newArr.shift();
newArr.shift();
console.log(newArr);

// ===========================================================================
////Lev1_12------- Arrays slice()-------------------

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let copyImg1 = array.slice(7, 15);
console.log(copyImg1);
let copyImg2 = array.slice(6, 12);
console.log(copyImg2);