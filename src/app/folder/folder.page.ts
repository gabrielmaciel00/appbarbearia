import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(public nav: NavController, public toastWarn: ToastController, public menu: MenuController) {

    this.ionViewDidEnter()
    this.ionViewWillLeave()
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
    this.nav.navigateForward('/')
   }

  }
  ngOnInit() {
  }
  ionViewDidEnter(){
    this.menu.enable(false);

  }
  ionViewWillLeave(){
    this.menu.enable(true);

  }


}


