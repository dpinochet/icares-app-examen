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
  idOrden:number=0;
  nombreExamen:string="";
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

  

  async mostrarAlerta(mensaje: string, titulo?: string, botones?:any) {
    const alerta = await this.alertController.create({
      header: titulo || 'Alerta',
      message: mensaje,
      cssClass: '',
      buttons: botones || ['Aceptar'],
    });

    await alerta.present();
  }


  openMenu() {
    this.router.navigate(['product-list']);
  }
  onSearchChange(event:any) {

  }


  goBack() {
    this.navCtrl.back();
  }

  consultaExamen() {
    const examenId = this.idOrden; 
    if (!examenId) {
      this.mostrarAlerta('Debe ingresar número Orden de Exámen', 'Falta Información');
    }
    else {
      this.alertaService.inicioLoading();
      this.apiService.getExamById(examenId)
           .then(exam => {
            this.alertaService.cerrarLoading();
              console.log(exam);
              localStorage.removeItem("examen");
              localStorage.setItem("examen", JSON.stringify(exam.document));
              this.router.navigate(["/examen-detalle"]);
           })
           .catch(error => {
            this.alertaService.cerrarLoading();
              this.mostrarAlerta('El exámen Nº ' + this.idOrden, 'Sin Información');
              console.error(error);
           });
    }
   
  }
  


}
