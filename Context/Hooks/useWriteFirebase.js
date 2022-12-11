import {
  collection as getCollection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import db from "../../services/firebase";

export default async function useWriteFirebase(collection, song, data) {
  if (!collection || !song) {
    return;
  }

  ref = doc(db, collection, song);

  try {
    await setDoc(ref, data);
  } catch (error) {
    console.error("Error adding document: ", error.message);
  }
}
