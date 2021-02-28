var quiz = {
      user: " ",
      questions: [
         {
            text: "Quanti tipi di blocchi sono diponibili in Scratch?",
            responses: [
               { text: "Sei" },
               { text: "Tre", correct: true },
               { text: "Quattro" },
               { text: "Nove" }
            ]
         },
         {
            text: "Con quale tipo di blocchi possiamo ripetere un'azione per un numero determinato o indeterminato di volte?",
            responses: [
                { text: "Controllo", correct: true },
                { text: "Movimento" },
                { text: "Suono" },
                { text: "Sensori" }
            ]
         },
         {
            text: "Una variabile locale...",
            responses: [
               { text: "È utilizzabile solo dall'ultimo sprite definito" },
               { text: "È utilizzabile da tutti gli sprite" },
               { text: "Non è accessibile agli sprite" },
               { text: "È utilizzabile da un solo sprite", correct: true }
            ]
         },
         {
            text: "Per confrontare il valore di due variabili, quale tipo di operatori è necessario utilizzare?",
            responses: [
               { text: "Logici", correct: true },
               { text: "Arimetici" },
               {text: "Controllo"},
               { text: "Nessuno dei precedenti" }
            ]
         },
         {
            text: "Quale tra questi è un blocco impilabile?",
            responses: [
               { text: "Variabile" },
               {text: "Tasto del mouse premuto"},
               { text: "Nascondi", correct: true },
               { text: "Tutte le risposte precedenti son vere" }
            ]
         },
         {
            text:
               "Di che colore sono i blocchi degli operatori aritmetici?",
            responses: [
               { text: "Viola" },
               { text: "Bianco" },
               { text: "Giallo" },
               { text: "Verde", correct: true },
            ]
         },
         {
            text: "Cosa si ottiene applicando l'operatore NOT ad una espressione? ",
            responses: [
               { text: " La negazione del risultato dell'espressione", correct: true },
               { text: " Il risultato viene convertito in stringa" },
               {text: "Un numero intero"},
               { text: "Nessuna delle precedenti 3 risposte è corretta" }
            ]
         },
         {
            text: "A cosa servono gli script?",
            responses: [
               { text: "A salvare un progetto Scratch " },
               { text: "A compiere delle azioni", correct: true },
               { text: "A cambiare il valore di una variabile" },
               { text: "A manipolare il contenuto delle liste" }
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
