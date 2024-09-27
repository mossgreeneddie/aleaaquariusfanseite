/* Hello everyone! If you're wondering how I made this small function, I simply made two arrays. One of the arrays contained a list of alphabetas, while the other contained a list of names. Then, I wrote a function to choose one random alphabeta and one random name and then put them together. I hope you enjoy using the Random Name Generator! */
/*Magische*/
var magisch = [
    'eine Finde-Finja',
    'ein Seesafir',
    'ein Kras',
    'eine Grahnqualle',
    'ein Jarias',
    'ein Warkan',
    'eine Isibelle',
    'ein Gilf',
    'ein Kobold',
    'ein Tasfar',
    'ein Helms',
    'ein Wribbels',
    'ein Helms',
    'ein Scropionfisch',
    'eine Lafora',
    'eine Nixe',
    'eine Robbe',
    'ein Pudelpfuhler',
    'ein Lauscherschnecke',
    'ein Wal',
    'ein Delfin',
    'ein Hai',
    'ein Kobold',
] 
var list;

function magische() {
 document.getElementById("name").innerHTML = "Dein Magischer könnte  " + magisch[Math.floor(Math.random() * magisch.length)] + " sein!";;;
}

/*Stämme*/

var stamm = [
    'Walwanderer, die Beschützer der Wale,',
    'Oblivionen, die Geheimhalter und Beschützer der Meerwelt,',
    'Darkoner, die Krieger der Meerwelt,',
    'Schai, die Künstler der Meerwelt,',
    'Roix, die Heiler und Ärzte der Meerwelt,',
    'Marmullas, die Lehrer der Meerwelt,',
    'Kendarer, die Geschichtenerzähler der Meerwelt,',
    'Zalti, die Bauern der Meerwelt,',
    'Quinks, die Handwerker der Meerwelt,',
    'Lorka, die Händler der Meerwelt,',
    'Brim, die Müllverbrenner,',
    'Utamaren, die Anführer der Meerwelt,',
    'Topster, die Spaßmacher der Meerwelt,',
    'Anschu, die Wasserbefehligung,',
    'Valerianer, die Psychologen der Meerwelt,',
    'Hoa, die Köche der Meerwelt,',
    'Vennuit, die Eispfleger,',
    'Omarion (unbekannte Aufgabe)',
    'Adetari, die Helfer für Familien auf Trosk,',
    'Sentross, die ehmaligen Geldverwalter der Meerwelt,',
    'Havanians, die ehmaligen Helfer der Armen der Meerwelt,',
    'Yonai, die Wissenschaftler der Meerwelt,',
    'Uair, die Spione der Meerwelt,',
    'Meermenschen zur Organisation der Bürokraie in der Meerwelt,',
    'Abyrionen, Meermenschen der Tiefsee,',
    'Meermenschen zum Schutz der Korallenriffe der Meerwelt,',
    'Kentas, die Journalisten der Meerwelt,'
] 
var list;

function stämme() {
 document.getElementById("derstamm").innerHTML = "Dein Stamm könnten die " + stamm[Math.floor(Math.random() * stamm.length)] + " sein!";;;
}

/*namen*/
var first = [
    'Nexon',
    'Lennox',
    'Alea',
    'Artama',
    'Bilor',
    'Brandur',
    'Aquillius',
    'Evelin',
    'Falhaller',
    'Hora',
    'Isla',
    'Ivarr',
    'Jinx',
    'Keblarr',
    'Mio',
    'Nala',
    'Nelani',
    'Namemnon',
    'Neepheli',
    'Ramin',
    'Siska',
    'Yasin',
    'Zerius',
    'Zuzuna',
    'Kit',
    'Ravenna',
    'Fiona',
    'Requ',
    'Tenpa',
    'Emmy',
    'Tawn',
    'Gewa',
    'Jusou',
    'Neom',
    'Xenia',
    'Xalia',
] 
var mensch = [
	'Meermensch',
	'Flussmensch',
    'Seemensch',
]
var list;

function sea() {
 document.getElementById("see").innerHTML = "Dein "+ mensch[Math.floor(Math.random() * mensch.length)] + " Name könnte " + first[Math.floor(Math.random() * first.length)] + " sein!";;;
}

/*alphacru*/

var star = [
	'Puppis (Achterdeck des Schiffs)',
	'Aquila (Adler)',
	'Ara (Altar)',
	'Andromeda (Andromeda)',
	'Bootes (Bärenhüter)',
	'Crater (Becher)',
	'Cepheus (Kepheus)',
	'Carina (Kiel des Schiffs)',
	'Hydrus (Kleine Wasserschlange)',
	'Ursa Minor (Kleiner Bär)',
	'Canis Minor (Kleiner Hund)',
	'Leo Minor (Kleiner Löwe)',
	'Grus (Kranich)',
	'Cancer (Krebs)',
	'Crux (Kreuz des Südens)',
	'Lyra (Leier)',
	'Leo (Löwe)',
	'Lynx (Luchs)',
	'Antlia (Luftpumpe)',
	'Pictor (Maler)',
	'Microscopium (Mikroskop)',
	'Reticulum (Netz)',
	'Corona Borealis (Nördliche Krone)',
	'Octans (Oktant)',
	'Orion (Orion)',
	'Apus (Paradiesvogel)',
	'Pegasus (Pegasus)',
	'Horologium (Pendeluhr)',
	'Perseus (Perseus)',
	'Pavo (Pfau)',
	'Sagitta (Pfeil)',
	'Phönix (Phönix)',
	'Corvus (Rabe)',
	'Pyxis (Schiffskompass)',
	'Scutum (Schild)',
	'Serpens (Schlange)',
	'Ophiuchus (Schlangenträger)',
	'Sagittarius (Schütze)',
	'Cygnus (Schwan)',
	'Dorado (Schwertfisch)',
	'Vela (Segel des Schiffs)',
	'Sextans (Sextant)',
	'Scorpius (Skorpion)',
	'Capricornus (Steinbock)',
	'Taurus (Stier)',
	'Corona Australis (Südliche Krone)',
	'Piscis Australis (Südlicher Fisch)',
	'Triangulum Australe (Südliches Dreieck)',
	'Mensa (Tafelberg)',
	'Columba (Taube)',
	'Telescopium (Teleskop)',
	'Tucana (Tukan)',
	'Libra (Waage)',
	'Cetus (Walfisch)',
	'Aquarius (Wassermann)',
	'Hydra (Wasserschlange)',
	'Aries (Widder)',
	'Norma (Winkelmaß)',
	'Lupus (Wolf)',
	'Centaurus (Zentaur)',
	'Circinus (Zirkel)',
	'Gemini (Zwillinge)',
] 
var alphabeta = [
	'Betacru',
	'Alphacru',
]
var list;

function cru() {
 document.getElementById("alpha").innerHTML = "Dein "+ alphabeta[Math.floor(Math.random() * alphabeta.length)] + " Name könnte " + star[Math.floor(Math.random() * star.length)] + " sein!";;;
}