import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  constructor(public nav: NavController, public toastWarn: ToastController) {
    this.removeMenu()
  }
  removeMenu(){
    // document.querySelector('ion-menu').style.display = 'none';


  }
  async presentToast() {
    const toast = await this.toastWarn.create({
      message: 'Preencha todos os campos',
      duration: 2000
    });
    toast.present();
  }
  logar(){
   document.querySelector('ion-menu').style.display = 'block';
   const valorEmail = (<HTMLInputElement>document.getElementById('email')).value;
   const valorSenha = (<HTMLInputElement>document.getElementById('senha')).value;

   if(valorEmail && valorSenha){
    let dados = {
      valorEmail,
      valorSenha
     }
    localStorage.setItem('logado',JSON.stringify( dados))
    this.nav.navigateForward('inicio')
   } else {
    this.presentToast()
   }

  }
  ngOnInit() {
  }


}
