import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import do AngularFirestore

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage {
  book = {
    title: '',
    author: '',
  };

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private firestore: AngularFirestore  // Injeção do serviço AngularFirestore
  ) {}

  addBook() {
    // Verifica se os campos estão preenchidos
    if (this.book.title.trim() === '' || this.book.author.trim() === '') {
      console.error('Preencha todos os campos.');
      return;
    }

    // Adiciona o livro ao Firestore com os caminhos especificados
    this.firestore.collection('books').add({
      'Título': this.book.title, // Usando o caminho 'Título/book.title'
      'Autor': this.book.author   // Usando o caminho 'Autor/book.author'
    }).then(
      () => {
        console.log('Livro adicionado com sucesso');
        this.clearForm(); // Limpa o formulário após adicionar
        this.navCtrl.pop(); // Volta para a página anterior
      },
      (error) => {
        console.error('Erro ao adicionar livro:', error);
      }
    );
  }

  // Método para limpar o formulário após adicionar o livro
  clearForm() {
    this.book = {
      title: '',
      author: '',
    };
  }
}
