import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public toastWarn: ToastController) {
    this.verificaUsuarioLogado()

  }

  verificaUsuarioLogado(){
    const logado = localStorage.getItem('logado')
    if(!logado){
      alert('Por favor realizar login')
    } else {

      const dados = JSON.parse(logado)
      let nome = dados.valEmail
      this.presentToast(nome)

    }

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

