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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: "Non vedo l'ora!",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Ancora poco e sentirai che meraviglia!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Grazie mille, sono molto soddisfatto',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Sei un genio!',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Si ma non è che mi piaccia più di tanto :(',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Anche a me in realtà...',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Sicuramente non Avengers...',
                            status: 'received'
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
        },
            
        
        methods: {

            //Get the current date

            getCurrentDate: function() {
                const dateTimeNow = dayjs();
                return dateTimeString = dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            },

            // AddClass method
            notificationOn: function() {
                this.notificationText = 'Notifiche desktop attivate';
                console.log('attivato');
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
                        status: 'received' // for green container
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



