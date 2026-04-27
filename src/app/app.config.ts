import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAgt5gLqgSDOYEa1-s95QYZJPBNefDE5mU",
  authDomain: "project-module-1-a5de0.firebaseapp.com",
  projectId: "project-module-1-a5de0",
  storageBucket: "project-module-1-a5de0.firebasestorage.app",
  messagingSenderId: "536778817470",
  appId: "1:536778817470:web:3c2ad341c22817214a83ef",
  measurementId: "G-LEB4D06B36"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};