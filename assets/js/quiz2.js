var quiz = {
      user: " ",
      questions: [
         {
            text: "Quale linguaggio è in grado di comprendere ed eseguire direttamente il processore di un computer?",
            responses: [
               { text: "C" },
               { text: "Linguaggio macchina, binario ", correct: true },
               { text: "Scratch" },
               { text: "C++" }
            ]
         },
         {
            text: "Quali tipi di linguaggi necessitano di un interpreter per essere eseguiti?",
            responses: [
                { text: "Interpretati", correct: true },
                { text: "Compilati" },
                { text: "Linguaggio macchina" },
                { text: "Tutti" }
            ]
         },
         
         {
            text: "Cosa ritorna una funzione void?",
            responses: [
               { text: "Un oggetto" },
               {
                  text: "Un intero"},
               { text: "true o false" },
               { text: "Nulla", correct: true }
            ]
         },
		 
         {
            text:
               "Nel While loop, le istruzioni contenute nel corpo...",
            responses: [
               { text: "sono eseguite  solo la prima volta" },
               { text: "sono eseguite ad ogni iterazione, finchè la condizione risulta vera", correct: true },
               { text: "non sono mai eseguite", },
               { text: "Sono sempre eseguite almeno una volta" }
            ]
         },

         {
            text: "In in una funzione contenente un ciclo do-while con un'istruzione per stampare 'Ciao Mondo' e come condizione 'false' (o una qualunque espressione che dia come risultato 'false'), quante volte viene stampata la frase? ",
            responses: [
               { text: "Zero" },
               { text: "Due"},
               { text: "Una", correct: true },
               { text: "Il programma restituisce un errore ed esce" }
            ]
         },





         {
            text: "Con il Do-While Loop... ",
            responses: [
               { text: " Le istruzioni contenute nel corpo sono sempre eseguite almeno una volta", correct: true },
               { text: " Non è possibile modificare una variabile esterna al loop" },
               {text: "Il loop non può essere infinito"},
               { text: "Nessuna delle precedenti 3 risposte è corretta" }
            ]
         },
         {
            text: "Il corpo di una funzione di un metodo non void...",
            responses: [
               { text: "Non può contenere variabili locali" },
               { text: "Deve sempre avere come ultima istruzione un return, per restituire un valore del tipo dichiarato", correct: true },
               { text: "Deve sempre restituire 0" },
               { text: "Restituisce una lista di valori" }
            ]
         },
         {
            text: "A cosa serve il costrutto if-else",
            responses: [
               { text: "A ripetere un blocco di istruzioni" },
               { text: "A verificare una condizione" },
               { text: "Tutte e 3 le risposte precedenti sono false" },
               { text: "A decidere quale blocco di istruzioni eseguire a seconda del risultato dell'espressione usata come condizione", correct: true },
            ]
         },

         {
            text: "Cosa succede se all'interno di un metodo, modifico il valore di un parametro?",
            responses: [
               { text: "Cambia soltanto il valore del parametro perchè locale al metodo, e rimane inalterato il valore dell'argomento", correct: true },
               { text: "Cambia sia il valore del parametro che dell'argomento" },
               { text: "Si verifica un errore" },
               { text: "Viene impedita la modifica" }
            ]
         },


         {
            text: "Qual è l'indice della prima cella di un array?",
            responses: [
               { text: "0", correct: true },
               { text: "1" },
               { text: "la imposta il programmatore" },
               { text: "true" }
            ]
         }


      ]
   },
   userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
   el: "#app",
   data: {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false
   },
   filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
   },
   methods: {
		 restart: function(){
			 	this.questionIndex=0;
		 		this.userResponses=Array(this.quiz.questions.length).fill(null);
		 },
      selectOption: function(index) {
         Vue.set(this.userResponses, this.questionIndex, index);
         //console.log(this.userResponses);
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      prev: function() {
         if (this.quiz.questions.length > 0) this.questionIndex--;
      },
      // Return "true" count in userResponses
      score: function() {
         var score = 0;
         for (let i = 0; i < this.userResponses.length; i++) {
            if (
               typeof this.quiz.questions[i].responses[
                  this.userResponses[i]
               ] !== "undefined" &&
               this.quiz.questions[i].responses[this.userResponses[i]].correct
            ) {
               score = score + 1;
            }
         }
         return score;

         //return this.userResponses.filter(function(val) { return val }).length;
      }
   }
});
