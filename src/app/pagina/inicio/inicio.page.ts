import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public toastWarn: ToastController) {


  }
  async presentToast(nome) {
    const toast = await this.toastWarn.create({
      message: `Seja bem-vindo ${nome}`,
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}

