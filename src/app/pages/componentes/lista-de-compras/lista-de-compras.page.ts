import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { Tarefa1Service } from 'src/app/services/tarefa1.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.page.html',
  styleUrls: ['./lista-de-compras.page.scss'],
})
export class ListaDeComprasPage {
  tarefa1: any[] = [];
  constructor(
    private alertCtrl: AlertController,
    private tarefa1Service: Tarefa1Service,
    private actionSheetCtrl: ActionSheetController) { }
    


    tituloPersonalizado = 'Título Personalizado';


  ionViewDidEnter() {
    this.listarTarefa();
  }
  listarTarefa() {
    this.tarefa1 = this.tarefa1Service.listar();
  }

  async showadd() {
    const alert = await this.alertCtrl.create({
      header: 'Informe sua tarefa',
      inputs: [
        {
          name: 'tarefa',
          type: 'text',
          placeholder: 'Descreva a sua tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary',
          handler: () => {

          }
        }, {
          text: 'Salvar',
          handler: (tarefa) => {
            this.tarefa1Service.salvar(tarefa, () => {
              this.listarTarefa();
            }
            );

          }
        }
      ]
    });

    await alert.present();
  }

  delete(item: any) {
    this.tarefa1Service.delete(item, () => {
      this.listarTarefa();
    }
    );
  }

  async openActions(tarefa: any) {
    //let loading = await this.loadingCtrl.create({message: "Processando..."});
    const actionSheet = await this.actionSheetCtrl.create({
      header: "O QUE DESEJA FAZER",
      buttons: [{
        text: tarefa.feito ? 'Colocar como pendente' : 'Marcar como realizado',
        icon: tarefa.feito ? 'close-circle' : 'checkmark-circle',
        handler: () => {
          tarefa.feito = !tarefa.feito;
          //loading.present();

          this.tarefa1Service.atualizar(tarefa, () => {
            this.listarTarefa();
          })

        }
      },
      ]
    });
    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
  }
  
  
}
