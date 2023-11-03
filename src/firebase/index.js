import { collection, getDocs } from 'firebase/firestore'
import { dbFS } from './firebaseConfig'

// export async function load() {

//     const data = []

//     const querySnapshot = await getDocs( collection( dbFS, 'todo-apps' ) )
//     querySnapshot.forEach( ( doc ) => {

//         data.push( {

//             ...doc.data(),
//             id : doc.id

//         } )
//     } )
//     return data
// }

export async function load() {
    console.log("Loading . . . ");
  
    try {
      const dataLoad = [];
      const dbCollection = collection(dbFS, 'todo-apps');
      const querySnapshot = await getDocs(dbCollection);
  
      querySnapshot.forEach((doc) => {
        const post = {
          ...doc.data(),
          id: doc.id
        };
        dataLoad.push(post);
      });
  
      console.log('Loaded data:', dataLoad); // Log the loaded data
  
      return dataLoad;
    } catch (error) {
      console.error('Error loading data:', error);
      return null; // Return null in case of an error
    }
  }
  

export function save() {

    // console.log( "Saving . . . ." )

}