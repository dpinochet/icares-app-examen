import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {

  public loading: any;

  constructor(private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  async mostrarAlerta(mensaje: string, titulo?: string) {
    const alerta = await this.alertController.create({
      header: titulo || 'Alerta',
      message: mensaje,
      buttons: ['OK'],
    });

    await alerta.present();
  }

  async inicioLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000, // tiempo máximo que durará el spinner si no se completa la petición
  });

  await this.loading.present(); // Mostrar el spinner
  }

  cerrarLoading() {
    this.loading.dismiss();
  }

  
}
