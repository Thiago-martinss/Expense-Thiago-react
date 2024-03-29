import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default };



   /*
 database.ref('expenses').on('child_removed', (snapshot) => {
     console.log(snapshot.key, snapshot.val())
 })


 database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})


database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})



 database.ref('expenses').on('value', (snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) =>{
        expenses.push ({
           id:childSnapshot.key,
           ...childSnapshot.val()
        })

    })
    console.log(expenses)

 




 


database.ref('expenses').push({
    notes: {
        sdsdss: {
            description: 'Descrição',
            note:"Minha Nota",
            amount:100,
            createdAt:1100
        }
    }

})
 const firebaseNotes = {
     notes: {
         dadada: {
             title: 'Primeira nota',
             body:'Essa é minha nota'
         },
         dsdsd2: {
            title: 'Segunda nota',
            body:'Essa é minha nota'
     }
 }



 database.ref().set({
    name:'Thiago Martins',
    age:28,
    isSingle: true,
    location: {
        city:'Paulinia',
        country:'Brazil'
    },
    job: {
        title: 'Engenheiro de software',
        company: 'Amazon'

    }
})


 

 }).then(() => {
     console.log('Data is saved!')
 }).catch((e) =>  {
     console.log("This failed", el)
 })

database.ref('attributes').set({
    height:1.90,
    weight:100

}).then

database.ref('age').set(29)


database.ref('isSingle').remove().then(()=>{
    console.log("data was removed")
}).catch((e) =>{
    console.log('error',e )
})

database.ref()
.once('value')
.then((snapshot) => {
    const val = snapshot.val()
console.log(val)

}).catch((e) =>{
    console.log("Erro ao recuperar data", e)
})



const onValueChange =

setTimeout(() => {
    database.ref('age').set(28)
}, 3500);

setTimeout(() => {
    database.ref(onValueChange).off
}, timeout);

*/
