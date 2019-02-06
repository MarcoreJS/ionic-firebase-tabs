import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // categories: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private firestore: AngularFirestore
  ) {
    // this.categories = this.firestore.collection<any>('categories').valueChanges();
  }

}
