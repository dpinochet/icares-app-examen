import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { AlertaService } from '../../servicios/alerta.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.page.html',
  styleUrls: ['./examen.page.scss'],
})
export class ExamenPage implements OnInit {
  examen: any; // Ajusta el tipo de dato según la respuesta esperada del endpoint
  idOrden:number;
  nombreExamen:string;
  plt;
  slideOpts = {
    slidesPerView: 1.2,
  };
  constructor(
    private platform: Platform,
    private router: Router,
    private navCtrl: NavController,
    private apiService: ApiService,
    private alertaService: AlertaService,
    private alertController: AlertController
  ) {
    if (this.platform.is('ios')) {
      this.plt = 'ios';
    } else {
      this.plt = 'android';
    }
  }

  ngOnInit() {
  }

  async mostrarAlerta(mensaje: string, titulo?: string) {
    const alerta = await this.alertController.create({
      header: titulo || 'Alerta',
      message: mensaje,
      buttons: ['OK'],
    });

    await alerta.present();
  }


  openMenu() {
    this.router.navigate(['product-list']);
  }
  onSearchChange(event) {

  }


  goBack() {
    this.navCtrl.back();
  }

  consultaExamen() {
    const examenId = this.idOrden; 
    this.apiService.getExamById(examenId)
         .then(exam => {
            console.log(exam);
         })
         .catch(error => {
            this.mostrarAlerta('Error al cargar el examen', 'Error');
            console.error(error);
         });
  }
  


}
