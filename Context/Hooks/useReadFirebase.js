import { collection as getCollection, getDocs } from "firebase/firestore";

import db from '../../services/firebase';

export default async function useReadFirebase(collection) {
   let data = null;

   await getDocs(getCollection(db, collection)).then(querySnapshot => {               
      const newData = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, premium: true }));
      data = newData;
   })

   return data;
}
