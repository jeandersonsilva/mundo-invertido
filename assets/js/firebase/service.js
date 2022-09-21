import app from './firebase.js';
import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export async function subscribeToClub (subscription) {
    const database = getFirestore (app);
    const clubCollection = collection (database, 'd&d-club');
    const docRef = await addDoc(clubCollection, subscription);
    return docRef.id;
}