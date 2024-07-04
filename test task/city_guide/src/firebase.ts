import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlLn3rTk6CFTgrBc37N2ENIdTrLIASqts',
  authDomain: 'app-mappie.firebaseapp.com',
  projectId: 'app-mappie',
  storageBucket: 'app-mappie.appspot.com',
  messagingSenderId: '971752653190',
  appId: '1:971752653190:web:f4009f9529041611c62c07',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const FavoritesCollectionRef = collection(db, 'favorites');
