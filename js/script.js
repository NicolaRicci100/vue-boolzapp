console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
    data(){
      return{
        currentIndex: 0,
        writeMessage: '',
        searchName: '',
        user: {
          name: 'Nome Utente',
          avatar: '_io'
        },
        contacts: [
          {
            id: 1,
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
              },
              {
                id: 3,
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
              }
            ],
          },
          {
            id: 2,
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
              {
                id: 1,
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
              },
              {
                id: 2,
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                id: 3,
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
              }
            ],
          },
          {
            id: 3,
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
              {
                id: 1,
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                id: 2,
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                id: 3,
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
              }
            ],
          },
          {
            id: 4,
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
            ],
          },
          {
            id: 5,
            name: 'Alessandro L.',
            avatar: '_5',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
              }
            ],
          },
          {
            id: 6,
            name: 'Claudia',
            avatar: '_6',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
              },
              {
                id: 3,
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
              }
            ],
          },
          {
            id: 7,
            name: 'Federico',
            avatar: '_7',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
              }
            ],
          },
          {
            id: 8,
            name: 'Davide',
            avatar: '_8',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
              },
              {
                id: 3,
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
              }
            ],
          }
        ]
      }
    },

    computed:{
     currentContact(){ //trovare il contatto corrente usando l'indice
      return this.contacts[this.currentIndex];
     },
     filteredName(){ //filtrare i nomi tra i contatti
      const theWord = this.searchName.toLowerCase();
      return this.contacts.map((contact) => {
        contact.visible = contact.name.toLowerCase().includes(theWord);
        return contact;
      });  
     },
    },
    
    methods:{
      mountImg(person){ // mostrare l'immagine del contatto
        return `img/avatar${person.avatar}.jpg`;
      },
      setIndex(targetIndex){ // impostare l'indice a quello cercato
        this.currentIndex = targetIndex;
      },
      sendMessage(){ // inviare un messaggio
        if(!this.writeMessage) return;
        const message = {
          date: new Date().toLocaleString(),
          message: this.writeMessage,
          status: 'sent'
        }
        this.currentContact.messages.push(message);
        this.writeMessage = '';

        setTimeout(() => {
          const answer = {
          date: new Date().toLocaleString(),
          message: 'OK!',
          status: 'received'
        }
        this.currentContact.messages.push(answer);
        }, 1000);
      },
      deleteMessage(index){ // cancellare un messaggio
        const message = this.currentContact.messages;
        message.splice(index, 1);
      },
      closeNotification(){ // chiudere/ablitare le notifiche
        const notification = document.getElementById("notification");
        notification.classList.add ('d-none');
        setTimeout(() =>{
          alert('Le notifiche sono attive!');
        }, 100);
      }
    }
    
}).mount('#root');
