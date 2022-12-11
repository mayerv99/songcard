import { collection as getCollection, addDoc } from "firebase/firestore";
import db from "../../services/firebase";

export default async function useWriteFirebase(collection, data) {
  try {
    await addDoc(getCollection(db, collection), data);
  } catch (error) {
    console.error("Error adding document: ", error.message);
  }
}
