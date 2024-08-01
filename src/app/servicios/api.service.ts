import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class ApiService {
   private apiUrl = 'https://intranet.icares.cl/API';
   private token: string = "";

   constructor(private http: HttpClient) {}

   private async getToken(): Promise<void> {
      const headers = new HttpHeaders().set(
         'Content-Type',
         'application/json'
      );
      const body = {
         username: environment.apiUsername,
         password: environment.apiPassword,
      };
      
      const response = await this.http
         .post<{ token: string }>(`${this.apiUrl}/token/generate.php`, body, { headers })
         .toPromise();
         let respuesta:any = response;
      this.token = respuesta.document.access_token;
   }

   public async makeRequest<T>(endpoint: string): Promise<T | undefined> {
      try {
        if (!this.token) {
          await this.getToken();
        }
  
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        
        return this.http.get<T>(`${this.apiUrl}${endpoint}`, { headers })
          .toPromise();
      } catch (error) {
        console.error('Hubo un error al realizar la solicitud:', error);
        return undefined; // Devuelve undefined en caso de error
      }
    }

   // Nuevo método para leer un solo examen por ID.
   public async getExamById(id: number): Promise<any> {
    if (!this.token) {
       await this.getToken();
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    console.log("El id es: ", id, this.token);

    return this.http.get<any>(`${this.apiUrl}/v_examen/read_one.php?id=${id}`, { headers })
       .pipe(map(res => res as any))
       .toPromise();
 }

  // Nuevo método para leer los tipos de exámenes
  public async getTipoExamen(): Promise<any[]> {
   if (!this.token) {
      await this.getToken();
   }

   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

   const response = await this.http.get<any>(`${this.apiUrl}/tipo_examen/read.php`, { headers })
      .pipe(map(res => res as any))
      .toPromise();

   if (response && response.document.records) {
      return response.document.records.map((record: { id: string, nombre: string }) => ({
         id: record.id,
         nombre: record.nombre,
      }));
   } else {
      return []; // Si no hay registros, devolvemos un arreglo vacío.
   }
}


// Nuevo método para leer lista de Profesionales
public async getListaProfesionales(): Promise<any[]> {
   if (!this.token) {
     await this.getToken();
   }
 
   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
 
   const response = await this.http.get<any>(`${this.apiUrl}/profesional/read.php`, { headers })
     .pipe(map(res => res as any))
     .toPromise();
 
   console.log(response);
 
   if (response && response.document.records) {
     return response.document.records.map((record: { id: string; nombre: string; apellido: string }) => ({
       id: record.id,  // Utilizar el ID del profesional
       nombreCompleto: record.nombre.toUpperCase() + " " + record.apellido.toUpperCase()  // Formatear el nombre completo
     }));
   } else {
     return []; // Si no hay registros, devolver un arreglo vacío.
   }
 }
 

public async createExamen(examenData: any): Promise<any> {
   if (!this.token) {
      await this.getToken();
   }

   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
                                    .set('Content-Type', 'application/json');

   return this.http.post<any>(`${this.apiUrl}/examen/create.php`, examenData, { headers })
      .toPromise();
}


public async updateExamen(examenData: any): Promise<any> {
   if (!this.token) {
     await this.getToken();
   }
 
   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
                                    .set('Content-Type', 'application/json');
 
   // Cambia `patch` a `put` o `post` según lo que esté permitido por el servidor
   return this.http.post<any>(`${this.apiUrl}/examen/update_patch.php`, examenData, { headers })
     .toPromise();
 }


 public async createExamenArchivo(archivoData: any): Promise<any> {
   if (!this.token) {
     await this.getToken();
   }
 
   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
                                    .set('Content-Type', 'application/json');
 
   return this.http.post<any>(`${this.apiUrl}/examen_archivo/create.php`, archivoData, { headers })
     .toPromise();
 }
 
   
}
