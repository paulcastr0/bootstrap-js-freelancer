/*
PARTE JAVASCRIPT
A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
*/

const button = document.getElementById("button");

button.addEventListener("click",function() {

});

const work = [
    {
        job : "Back-End",
        salary: "20.50"
    },
    {
        job : "Front-End",
        salary: "15.30"
    },
    {
        job : "Full-Stack",
        salary: "33.60"
    }
]



function clickFormButton(event){
    event.preventDefault();
    //Estraggo i valori dall'HTML
    let typeOfWork = document.getElementById("inputTypeofWork").value;
    let hours = document.getElementById("inputHours").value;
    let discount = document.getElementById("inputDiscount").value;
    let salary = 0;
  
    for (i = 0; i < work.length; i++){
      if(typeOfWork == work[i].job) {
          salary = work[i].salary * hours;
          
      }
    }
    
    if(discount == "YHDNU32" || 
       discount == "JANJC63" || 
       discount == "PWKCN25" || 
       discount == "SJDPO96" || 
       discount == "POCIE24") {
       salary = salary * 0,75;
    }else if (discount !== ""){
       alert("Il codice sconto inserito non è valido")
    }
  
document.getElementById("output1").innerHTML = `<h3 class ="output" id = "output1">The Final Price is : ${salary}</h3>`

} 


//button.addEventListener("click",result);