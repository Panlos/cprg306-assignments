import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const db = require('./firebase');

export async function getItems(userId) {
  const items = [];
  try {
    const itemsCollection = db.collection('users').doc(userId).collection('items');
    const snapshot = await itemsCollection.get();
    snapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error('Error getting items: ', error);
    throw new Error('Failed to get items');
  }
}

export async function addItem(userId, item) {
    try {
      const itemsCollection = db.collection('users').doc(userId).collection('items');
      const docRef = await itemsCollection.add(item);
      return docRef.id;
    } catch (error) {
      console.error('Error adding item: ', error);
      throw new Error('Failed to add item');
    }
  }
  
