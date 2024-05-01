import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  constructor(private alertController: AlertController) {}

  async mostrarAlerta(mensaje: string, titulo?: string) {
    const alerta = await this.alertController.create({
      header: titulo || 'Alerta',
      message: mensaje,
      buttons: ['OK'],
    });

    await alerta.present();
  }
}
