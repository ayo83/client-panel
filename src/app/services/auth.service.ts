import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs/observable";
import { resolve } from "url";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

// Login Method
  login(email: string, password: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err =>reject(err))
    });
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

// Logout Method
  logout(){
    this.afAuth.auth.signOut();
  }

// Register Method
register(email: string, password: string) {
  return new Promise((resolve, reject) =>{
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err =>reject(err))
  });
}
  
}
