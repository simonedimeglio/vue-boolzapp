Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        
        data: { 
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],

            counter: 0, // For contact selection (MILESTONE 2)
            showMessages: false, // To see messages (MILESTONE 2)
            myWords: '', // (MILESTONE 3)
            find: '', // For search bar (MILESTONE 4)
        },
            
        
        methods: {

            // Contact selection function on click (MILESTONE 2)
            contact: function(item) {
                this.counter = item;
                this.showMessages = true;
                console.log(this.counter);
              },

            //   ------------------------------------------------

            // SEND A NEW MESSAGE (MILESTONE 3)

            // Automatic interlocutor message
            // I prepare this one for use in the next function called "newMessage"
            interlocutorWords: function() {
                // set 1sec timeout 
                setTimeout(() => {
                    // the interlocutor text is always "ok"
                    const theInterlocutorMessage = {
                        date: '11/01/2020 12:20:03',
                        text: 'ok',
                        status: 'received' // for green container
                    }
                    this.counter.messages.push(theInterlocutorMessage); // Push this object in array
                },1000); // 1sec
            },

            // my new message
            newMessage: function() {
                // New Object -> new message
                const myNewMessage = {
                    date: '11/01/2020 12:20:02',
                    text: this.myWords,
                    status: 'sent' // for green container
                }
                this.myWords = ''; // To inizialize
                this.counter.messages.push(myNewMessage); // Push this object in array
                this.interlocutorWords(); // And now, the automatic message from the interlocutor
            },

            // SEARCH USERS FROM THE SEARCH BAR (MILESTONE 4)
            chatSearch: function(){
            return this.contacts.filter(item => {
                return item.name.toLowerCase().includes(this.find.toLowerCase());
                });
            },
        
        }
    }
);



