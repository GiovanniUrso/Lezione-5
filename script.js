// Lavoriamo con oggetti : Metodi Statici, Ereditarietà

// Un'azienda ha dei dipendenti e vuole visualizzare il cognome e la città di residenza di ognuno di essi


class Azienda {
    static tuttidipendenti = [];
    constructor(nomeazienda, tuttidipendenti){
        
        this.nomeazienda = nomeazienda;
        this.tuttidipendenti = tuttidipendenti;
    }
}
class Dipendente {
    constructor(nome, cognome, citta,datadinascita){
        this.nome = nome;
        this.cognome = cognome;
        this.citta = citta;
        this.datadonascita = datadinascita;
    }
}
                                                        // C'e' un ERRORE!

let dipendente1 = new Dipendente();
dipendente1.nome = 'Giovanni';
dipendente1.cognome = 'Urso';
dipendente1.citta = 'Cosenza';
dipendente1.datadonascita = new Date('1992-07-20')
dipendente1.nomeazienda = 'Pirelli';

let dipendente2 = new Dipendente();
dipendente2.nome = 'Antonio';
dipendente2.cognome = 'Rossi';
dipendente2.citta = 'Roma';
dipendente2.datadonascita = new Date('1995-01-11')
dipendente2.nomeazienda = 'Fiat';

let dipendente3 = new Dipendente();
dipendente3.nome = 'Marco';
dipendente3.cognome = 'Verdi';
dipendente3.citta = 'Milano';
dipendente3.datadonascita = new Date('1993-04-31')
dipendente3.nomeazienda = 'Maserati';

Azienda.tuttidipendenti.push(dipendente1,dipendente2,dipendente3);

Azienda.tuttidipendenti.forEach((dip)=>{
    const container = document.getElementById('container');
    const div = document.createElement('div');
    container.appendChild(div);
    
    div.innerHTML = `${dip.cognome}` + "   " +`${dip.citta}`

    
})




