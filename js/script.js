Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        
        data: { 
            
            contacts: [
                {
                    name: 'Ed Sheeran',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Quando esce il nuovo singolo?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "Non vedo l'ora!",
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Ancora poco e sentirai che meraviglia!',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Elon Musk',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ho visto il lancio del nuovo razzo, congratulazioni!',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Grazie mille, sono molto soddisfatto',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Sei un genio!',
                            status: 'sent',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Bill Gates',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'Hai visto Windows 11?',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Si ma non è che mi piaccia più di tanto :(',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Anche a me in realtà...',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Robert Downey Jr',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Prossimo film?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Sicuramente non Avengers...',
                            status: 'received',
                            showMenu: false
                        }
                    ],
                },
            ],

            counter: 0, // For contact selection (MILESTONE 2)
            showMessages: false, // To see messages (MILESTONE 2)
            myWords: '', // (MILESTONE 3)
            find: '', // For search bar (MILESTONE 4)
            notificationText: 'Attiva le notifiche Desktop', // Bonus
            lastAccess: new Date().toLocaleString(), // Date 
            menuVisibility : false, // For options menu (info & delete) (MILESTONE 5)
            selectedMessage : '', // For message selection (MILESTONE 5)
        },
            
        
        methods: {
            // MILESTONE 1 AND GENERAL METHODS

            //Get the current date
            getCurrentDate: function() {
                const dateTimeNow = dayjs();
                return dateTimeString = dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            },

            // AddClass method
            notificationOn: function() {
                this.notificationText = 'Notifiche desktop attivate';
                console.log('Notifiche attivate');
            },

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
                // set 2sec timeout 
                setTimeout(() => {
                    // the interlocutor text is always "ok"
                    
                    const theInterlocutorMessage = {
                        date: this.getCurrentDate(),
                        text: 'Ok',
                        status: 'received', // for green container
                        showMenu: false
                    }
                    this.counter.messages.push(theInterlocutorMessage); // Push this object in array
                },2000); // 2sec
            },

            // my new message
            newMessage: function() {
                // New Object -> new message
                const myNewMessage = {
                    date: this.getCurrentDate(),
                    text: this.myWords,
                    status: 'sent',  // for green container
                    showMenu: false
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

            //   ------------------------------------------------

            // DELETE MESSAGE (MILESTONE 5)

            letMenuVisible: function(elem){ // apro/chiudo menu dropdown
                this.selectedMessage = elem;
                this.menuVisibility = !this.menuVisibility;            
            },    

            deleteMessage: function(index){ //menu dropdown --> cancella messaggio
                const messages = this.counter['messages'];
                messages.splice(index,1);               
            },
        }
    }
);



