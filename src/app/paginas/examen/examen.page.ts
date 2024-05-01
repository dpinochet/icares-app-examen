import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';

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
  constructor(private platform: Platform,
    private router: Router,private navCtrl: NavController,private apiService: ApiService) {
    if (this.platform.is('ios')) {
      this.plt = 'ios';
    } else {
      this.plt = 'android';
    }
  }

  ngOnInit() {
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
    const examenId = this.idOrden; // Reemplaza 1 con el ID del examen que deseas consultar
    this.apiService.consultaExamen(examenId).subscribe(
      response => {
        console.log('Examen consultado:', response);
        this.examen = response; // Almacena la respuesta en la variable examen
      },
      error => {
        console.error('Error al consultar el examen:', error);
      }
    );
  }
  


}
