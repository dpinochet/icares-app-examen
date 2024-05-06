import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../servicios/api.service';
import { AlertaService } from '../../servicios/alerta.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-examen-detalle',
  templateUrl: './examen-detalle.page.html',
  styleUrls: ['./examen-detalle.page.scss'],
})
export class ExamenDetallePage implements OnInit {

  @ViewChild(SignaturePad) signaturePad!: SignaturePad; // Uso del operador de aserción de no nulo

  public signaturePadOptions: Object = { // Opciones de configuración
    'minWidth': 1,
    'maxWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300,
    'penColor': 'rgb(66, 133, 244)'
  };


  drawStart() {
    console.log('Comenzó a dibujar');
  }

  drawComplete() {
    console.log('Terminó de dibujar');
  }

  clearSignature() {
    this.signaturePad.clear(); // Método para limpiar la firma
  }

  savePNG() {
    const data = this.signaturePad.toDataURL('image/png');
    console.log(data); // Aquí puedes guardar la data o enviarla a un servidor
  }

  photos: string[] = []; // Arreglo para almacenar las fotos

  examen: any; // Ajusta el tipo de dato según la respuesta esperada del endpoint
  tipo_examen:any;

  examTypes: Array<{ id: string, nombre: string }> = []; // Variable para almacenar la lista de tipos de exámenes.
  selectedExamType: string = ""; // Variable para almacenar el valor seleccionado del combo.

  profesionales: Array<{ rut: string, nombre: string }> = [];
  profesionalSeleccionado: string = "";


  constructor(
    private navCtrl: NavController,
    private apiService: ApiService,
    private alertaService: AlertaService,
    private alertController: AlertController
  ) { 
    this.examen = JSON.parse(localStorage.getItem("examen") || "");
  }

  ngOnInit() {
    this.alertaService.inicioLoading();
    this.getTipoExamen();
    this.getListaProfesionales();

  }

  async takePhoto() {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    // Agregar la foto al arreglo de fotos
    if (photo.base64String) {
      this.photos.push(`data:image/jpeg;base64,${photo.base64String}`);
    }
  }

  deletePhoto(index: number) {
    // Eliminar la foto del arreglo
    this.photos.splice(index, 1);
  }
  
  getTipoExamen() {
    this.apiService.getTipoExamen()
         .then(types => {
            this.examTypes = types; // Asigna los tipos de exámenes a la variable.
         })
         .catch(error => {
            console.error(error); // Manejo de errores.
         });
  }

  getListaProfesionales() {
    this.apiService.getListaProfesionales()
         .then(types => {
          console.log("profesionales", types);
            this.profesionales = types; // Asigna los tipos de exámenes a la variable.
            this.alertaService.cerrarLoading();
         })
         .catch(error => {
            console.error(error); // Manejo de errores.
            this.alertaService.cerrarLoading();
         });
  }

  goBack() {
    this.navCtrl.back();
  }

  enviarExamen() {
    
  }

}
