import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCi5geAwnX764YXDgrn4A1ZqWfrLUuELjU",
  authDomain: "songcard-f75f4.firebaseapp.com",
  projectId: "songcard-f75f4",
  storageBucket: "songcard-f75f4.appspot.com",
  messagingSenderId: "653505295892",
  appId: "1:653505295892:web:d2cd9fff0f36957307d901"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
