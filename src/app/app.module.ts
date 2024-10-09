import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importando FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importando HttpClientModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, // Adicionando FormsModule
    HttpClientModule // Adicionando HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"appbook-ffa40","appId":"1:929035028814:web:f66130e62cdb7ff86ab61f","storageBucket":"appbook-ffa40.appspot.com","apiKey":"AIzaSyAi9yzTSrWwkhRHNdQUJH5xYipYTv-pDUI","authDomain":"appbook-ffa40.firebaseapp.com","messagingSenderId":"929035028814","measurementId":"G-452FHLHXD1"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
