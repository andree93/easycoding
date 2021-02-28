var quiz = {
      user: " ",
      questions: [
         {
            text: "Quanti modificatori di accesso esistono?",
            responses: [
               { text: "Due" },
               { text: "Tre", correct: true },
               { text: "Quattro" },
               { text: "Uno" }
            ]
         },
         {
            text: "A cosa serve un metodo Getter?",
            responses: [
                { text: "A leggere il valore di un attributo di un oggetto", correct: true },
                { text: "A controllare che l'oggetto abbia una determinata proprietà" },
                { text: "A istanziare una classe" },
                { text: "Nessuna delle precedenti" }
            ]
         },
         {
            text: "Cos'è un oggetto?",
            responses: [
               { text: "Un comportamento di una classe" },
               { text: "L'istanza di una classe", correct: true },
               { text: "Un tipo di dato" },
               { text: "Nessuna delle precedenti" }
            ]
         },
         {
            text: "A cosa serve un metodo Setter?",
            responses: [
                { text: "A controllare che l'oggetto abbia una determinata proprietà" },
                { text: "A istanziare un oggetto" },
                { text: "A cambiare il valore di un attributo di un oggetto", correct: true },
                { text: "Nessuna delle precedenti" }
            ]
         },
         {
            text: "Qual è il modificatore d'accesso più restrittivo?",
            responses: [
               { text: "public" },
               {
                  text: "protected"
              },
               { text: "private", correct: true },
               { text: "default" }
            ]
         },
         {
            text:
               "A cosa serve un metodo costruttore?",
            responses: [
               { text: "Ad inizializzare un'istanza", correct: true },
               { text: "A creare una classe" },
               { text: "A estendere una classe" },
               { text: "Avviare il programma" }
            ]
         },
         {
            text: "Cosa rappresenta la variabile this all'interno di un metodo di istanza? ",
            responses: [
               { text: " Il puntatore alla classe dell'oggetto" },
               { text: "Una variabile privata"},
               { text: "Nessuna delle precedenti 3 risposte è corretta" },
               { text: " Il puntatore all'istanza corrente", correct: true }
            ]
         },


         {
            text: "Cos'è il polimorfismo?",
            responses: [
               { text: "L’attitudine di un oggetto a mostrare più implementazioni per una singola funzionalità", correct: true },
               { text: "Un metodo speciale di una classe" },
               { text: "Un meccanismo per cambiare il valore di ritorno di una funzione a seconda delle necessità" },
               { text: "è una tecnica per implementare l'information hiding" }
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
