import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var Config = {
  apiKey: "AIzaSyDc7wckscWh-p96PGm3RZz6b6FgLqykBK8",
  authDomain: "yeoldemarketdb.firebaseapp.com",
  databaseURL: "https://yeoldemarketdb.firebaseio.com",
  projectId: "yeoldemarketdb",
  storageBucket: "",
  messagingSenderId: "543241214962",
  appId: "1:543241214962:web:80399c77b16f783d"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  // console.log(snapShot)


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}
// Initialize Firebase
firebase.initializeApp(Config);
//===========================shop data list stored within firebase the easy way================//
// export const addCollectionAndDocuments = async ( collectionKey, objectsToAdd ) => {
//   const collectionRef = firestore.collection(collectionKey)
//   console.log(collectionRef)

//   const batch = firestore.batch()
//     objectsToAdd.forEach( obj => {
//       const newDocRef = collectionRef.doc(obj.title)
//       batch.set(newDocRef, obj)
//       // console.log(newDocRef)
//     })
//     return await batch.commit()
// }
 export const convertCollectionsSnapToMap = collections => {
   const transformedCollection = collections.docs.map( doc => {
     const { title, items } = doc.data()

     return {
       routeName: encodeURI(title.toLowerCase()),
       id: doc.id,
       title,
       items
   }
   })
   console.log(transformedCollection)
   return transformedCollection.reduce((accumulator, collection) => {accumulator[collection.title.toLowerCase()] = collection
  return accumulator
}, {})
 }

//OAuth for google sign in on firebase------------------------------------------//

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve,reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    },reject)
  })
}


  //------------------------------------------------------------------------------//
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  export default firebase