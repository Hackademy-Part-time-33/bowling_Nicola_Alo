/*
Traccia 1:
Crea un oggetto persona con le seguenti caratteristiche:
nome
cognome
eta'
un metodo che permetta di salutare
*/

let persona = {
        'name': 'Nicola',
        'surname': 'Alò',
        'age': '35',
        
        SayHello: function () {
            return `Ciao, mi chiamo ${this.name}`;
            
        }
                       
        }


        console.log(persona.SayHello());



        /*
Traccia 2:
Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
mostrare tutti i contatti dell’agenda
chiamare un contatto
eliminare un contatto dall’agenda
aggiungere un nuovo contatto
modificare un contatto esistente

Suggerimento:
let rubrica = {
  'contacts': [
      {'nome': 'Nicola', 'telefono': '3331111111'},
      {'nome': 'Lorenzo', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Jenny', 'telefono': '3334444444'}
  ],
  ...
}
*/

let rubrica = {
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],

    showContacts: function() {
        this.contacts.forEach(el => console.log(`Nome: ${el.nome} - Numero: ${el.telefono}`));       
    },

    addContact: function(newName, newNumber) {
        this.contacts.push({'nome': newName, 'telefono': newNumber});
    },

    modContact: function(modName, modTel) {
        let isFound = false;
        this.contacts.forEach(el => {
            if(el.nome.toLowerCase() == modName.toLowerCase()) {
                el.telefono = modTel;
                isFound=true;
            } 
        })

        if(!isFound) {
            console.log(`Nome: ${modName}, non trovato`);
        }
    },

    delContact: function(delName){
        let index = this.contacts.findIndex(el => el.nome.toLowerCase() === delName.toLowerCase());
        console.log(index);
        if(index !== -1) {
            this.contacts.splice(index, 1)
        } else {
            console.log(`${delName} non trovato`);
        }


    },

    callContact: function(callName) {
        let isExist = false;
        this.contacts.forEach(el => {
            if (el.nome.toLowerCase() == callName.toLowerCase()) {
            isExist=true;
            console.log(`Sto chiamando ${el.nome} al ${el.telefono}`);
        }  
    })
         if (!isExist) {
            console.log(`Non sono riuscito a trovare il nome ${callName} in rubrica`);
        } 

    },
}

rubrica.showContacts();
rubrica.addContact('Gigi', '3335555555');
rubrica.modContact('gigi', '3336666666')
rubrica.delContact('jenny');
rubrica.callContact('paaaaola')
console.log(rubrica.contacts);

/*
Traccia 3:
Crea un oggetto bowling con le seguenti caratteristiche:
una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
diverse funzionalità tra cui:
creare 10 punteggi casuali per ogni giocatore:
Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
trovare il punteggio finale per ogni giocatore:
Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
determinare il vincitore

EXTRA:
Crea un metodo per stilare la classifica finale dei giocatori

DATI DI PARTENZA:
let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    ...
}
*/

let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
        addScore: function(){
            this.players.forEach(el => {
                for (i=0; i<10; i++) {
                el.scores.push(Math.floor(Math.random() * 11))
                }
            })

        },

        sumScore: function(){
            this.players.forEach(el => {
                let totalScore = el.scores.reduce((a, b) => a + b);
                el.totalScore = totalScore;
                console.log(`Il punteggio totale di ${el.name} è ${el.totalScore}`);
                
            })
        },

        addPlayer: function(name){
            this.players.push({'name': name, 'scores': []});
        },

        getRank: function(){
             this.players.sort((a, b) => b.totalScore - a.totalScore);
             this.players.forEach((el, index) => {
                console.log(`${index + 1} posto, ${el.name} con ${el.totalScore} punti`);})
            },


}

bowling.addPlayer('Ciccio');
bowling.addPlayer('Zuzzurellone');
bowling.addScore();
bowling.sumScore();
bowling.getRank();
console.log(bowling.players);
