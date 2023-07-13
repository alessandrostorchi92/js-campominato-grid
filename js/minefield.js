// Consegna 1:
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata composta da 100 celle (ci saranno quindi 10 caselle per ognuna delle 10 righe). Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Consegna 2: Il computer deve generare 16 numeri casuali: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// Procedimento 1: 
// 1) Scrivo prima cosa voglio fare passo passo in italiano, dividendo il lavoro in micro problemi
// 2) Per accettarmi di capire se sto facendo le cose bene ad ogni step utilizzo il "console.log"
// 3) Creo un btn, a cui associo la funzione addEventListener, su cui l'utente cliccherà per generare
// una griglia di gioco quadrata composta da 100 celle
// 4) Genero virtualmente il primo quadrato della mia griglia di gioco
// 5) Attraverso un ciclo for genero tutti i quadrati della griglia del campo minato 
// 6) Creo un addEventListener su ogni singolo square della griglia al fine di poterli colorare di azzurro al click 

// Procedimento 2: 
// 1) Generare mediante la funzione Math Random() 16 numeri casuali non ripetuti 

"use strict"

const btnPlay = document.querySelector("#btn_play");

/**
 * @type {HTMLElement}
 */
const gridContainer = document.querySelector(".grid-container");

btnPlay.addEventListener("click", onBtnClick);

function onBtnClick() {

    const totalSquares = 100;

    // Genero la griglia in modo virtuale sottoforma di array, ma non viene aggiunta al Dom automaticamente. Successivamente devo aggiungerla al file html
    const gridList = createGrid(totalSquares);
    console.log(gridList);

    // Invoco la funzione che aggiunge al Dom i vari quadrati.
    printGrid(gridContainer, gridList) 

    // Invoco la funzione per generare le caselle, nelle quali saranno posizionate le bombe
    createBombs ()

    // Invoco la funzione per colorare la cella di rosso se l'utente clicca su una bomba
    // endGame ()
}

/**
 * Questa funzione genera un singolo quadrato virtuale della griglia
 * @param {string} squareContent Contenuto testuale da inserire all'interno del quadrato creato
 * @param {number} totalSquares  Numero totale di quadrati da creare
 * @returns {HTMLDivElement}
 */

function createSingleSquare(squareContent, totalSquares) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.textContent = squareContent;

    return square;
}

/**
 * Dato il numero di celle da cui sarà composta la griglia (100 celle), facendolo passare come argomento della funzione, creo tutta la griglia
 * @param {num} squaresNumber Numero di quadrati da creare all'interno della griglia
 * @return {HTMLDivElement[]} 
 */
function createGrid(squaresNumber) {
    const grid = [];
    for (let i = 1; i <= squaresNumber; i++) {
        // Salvo in una variabile l'output della funzione createSingleSquare altrimenti andrei a perdere quell'output 
        const newSquare = createSingleSquare(i);
        grid.push(newSquare);
        newSquare.addEventListener("click", function() {
            newSquare.classList.toggle("bg-primary");
            console.log(`Hai colorato la cella numero ${i}`);
        })
    }

    return grid;

}

/**
 * Attraverso un'altra funzione stampo la griglia in html, aggiungendo ad un elemento html la lista dei quadrati
 * Appendo attravrso il ciclo for i quadrati all'elemento html container
 * @param {HTMLElement} container 
 * @param {HTMLDivElement[]} squaresList
 */

function printGrid(container, squaresList) {
    for(let i = 0; i < squaresList.length; i++){
        container.append(squaresList[i]);
    }
}

/**
 * Dichiarazione funzione per generare le bombe con un array di 16 numeri casuali non ripetuti compresi tra 1 e 100
 * @param {num} bombsNumber è il numero delle bombe presenti nella griglia
 * @return {num[]} arrayBombs è l'array contenente il numero delle celle in cui verrano inserite le bombe
 */

function createBombs () {
    const arrayBombs = [];
    for (let i = 0; i < 16; i++) {
        const bombsBoxes =  Math.floor(Math.random() * 100) + 1;
        if (!arrayBombs.includes(bombsBoxes))
            arrayBombs.push(bombsBoxes);
            // Altrimenti potrei usare anche questo metodo per impedire la ripetizione dei numeri delle celle
            // if (arrayBombs.indexOf(bombsBoxes) === -1){
            //     arrayBombs.push(bombsBoxes);
            // } else {
            //     i--
        }
        // Verifico attraverso la funzione console.log se la funzione è corretta
        console.log(`Le caselle delle bombe sono: ${arrayBombs}`);

        return arrayBombs;
    }


    



