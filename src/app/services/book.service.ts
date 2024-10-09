import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: AngularFirestore) {}

  addBook(book: any) {
    return this.firestore.collection('books').add(book);
  }

  getBooks() {
    return this.firestore.collection('books').snapshotChanges();
  }
}
