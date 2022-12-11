import { collection as getCollection, getDocs } from "firebase/firestore";

import db from "../../services/firebase";

export default async function useReadFirebase(collection, musicId) {
  let data = null;

  if (!collection)
  {
    return [];
  }

  await getDocs(getCollection(db, collection)).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      premium: true,
    }));
    data = newData;
  });

  return musicId ? data.filter((item) => item.id === musicId) : data;
}
