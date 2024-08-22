import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../servicios/api.service';
import { AlertaService } from '../../servicios/alerta.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import SignaturePad from 'signature_pad';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-examen-detalle',
  templateUrl: './examen-detalle.page.html',
  styleUrls: ['./examen-detalle.page.scss'],
})
export class ExamenDetallePage implements OnInit {

  @ViewChild('signatureCanvas', { static: true }) signaturePadElement!: ElementRef<HTMLCanvasElement>;
  signaturePad!: SignaturePad;

  public signaturePadOptions: Object = {
    minWidth: 1,
    maxWidth: 5,
    penColor: 'rgb(66, 133, 244)'
  };

  photos: string[] = [];
  examen: any;
  tipo_examen: any;

  examTypes: Array<{ id: string, nombre: string }> = [];
  selectedExamType: string = "";
  profesionales: Array<{ id: string, nombreCompleto: string }> = [];
  profesionalSeleccionado: string = "";

  constructor(
    private navCtrl: NavController,
    private apiService: ApiService,
    private alertaService: AlertaService,
    private alertController: AlertController,
    private loadingController: LoadingController 
  ) { 
    this.examen = JSON.parse(localStorage.getItem("examen") || "");
  }

  ngOnInit() {
    this.alertaService.inicioLoading();
    this.getTipoExamen();
    this.getListaProfesionales();
  }

  ionViewDidEnter() {
    // Inicializar SignaturePad
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement, this.signaturePadOptions);
  }

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

  async takePhoto() {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    if (photo.base64String) {
      this.photos.push(`data:image/jpeg;base64,${photo.base64String}`);
    }
  }

  deletePhoto(index: number) {
    this.photos.splice(index, 1);
  }

  getTipoExamen() {
    this.apiService.getTipoExamen()
      .then(types => {
        this.examTypes = types;
      })
      .catch(error => {
        console.error(error);
      });
  }

  getListaProfesionales() {
    this.apiService.getListaProfesionales()
      .then(types => {
        console.log("profesionales", types);
        this.profesionales = types;
        this.alertaService.cerrarLoading();
      })
      .catch(error => {
        console.error(error);
        this.alertaService.cerrarLoading();
      });
  }

  goBack() {
    this.navCtrl.back();
  }

  async enviarExamen() {
    const loading = await this.loadingController.create({
      message: 'Procesando...',
    });
    await loading.present();

    if (this.examen.comentario == "") {
      this.examen.comentario = "Sin observaciones";
    }
    const examenPayload = {
      fecha: this.examen.fecha,
      id_paciente: this.examen.id_paciente,
      id_profesional: this.profesionalSeleccionado,
      id_tipo: this.selectedExamType,
      comentario: this.examen.comentario,
      codigo: this.examen.codigo,
      presc: this.examen.presc,
      observaciones: this.examen.observaciones,
      resultados: this.examen.resultados,
      firma: this.signaturePad.toDataURL('image/png'), // Firma en formato base64
      id: this.examen.id
    };

    try {
      const archivoPayload = {
        fecha: this.examen.fecha,
        id_examen: this.examen.id,
        descripcion: "Archivo asociado al examen",
        archivo: "archivoapp",
        id_tipo: this.selectedExamType,
        id_profesional: this.profesionalSeleccionado,
        estado: 2,
        presc: this.examen.presc,
        observaciones: this.examen.observaciones,
        resultados: this.examen.resultados,
        firma: this.signaturePad.toDataURL('image/png') // Firma en formato base64
      };

      const archivoResponse = await this.apiService.createExamenArchivo(archivoPayload);
      console.log('Archivo del examen registrado exitosamente:', archivoResponse);
      const nuevoIdExamenArchivo = archivoResponse.document;

      for (const photo of this.photos) {
        const uploadResponse = await this.apiService.uploadImage(photo);
        console.log('Imagen subida exitosamente:', uploadResponse);
        const nuevoNombreImagen = uploadResponse.document;

        const imagenPayload = {
          id_examen: nuevoIdExamenArchivo,
          foto: nuevoNombreImagen
        };

        await this.apiService.createExamenImagen(imagenPayload);
        console.log('Registro de imagen creado exitosamente');
      }

      this.limpiarFormulario();
      this.navCtrl.navigateRoot('/examen');
      this.alertaService.mostrarAlerta('Examen actualizado exitosamente');
    } catch (error) {
      console.error('Error al procesar el examen:', error);
      this.alertaService.mostrarAlerta('Error al procesar el examen');
    } finally {
      await loading.dismiss();
    }
  }

  limpiarFormulario() {
    this.examen = {
      fecha: '',
      id_paciente: '',
      id_profesional: '',
      id_tipo: '',
      comentario: '',
      codigo: '',
      archivo: '',
      presc: '',
      observaciones: '',
      resultados: '',
      firma: ''
    };
    this.profesionalSeleccionado = '';
    this.selectedExamType = '';
    this.signaturePad.clear();
    this.photos = [];
  }
}
