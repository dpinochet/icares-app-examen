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
   private token: string;

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

   public async makeRequest<T>(endpoint: string): Promise<T> {
      if (!this.token) {
         await this.getToken();
      }

      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

      return this.http.get<T>(`${this.apiUrl}${endpoint}`, { headers })
         .pipe(map(res => res as T))
         .toPromise();
   }

   // Nuevo método para leer un solo examen por ID.
   public async getExamById(id: number): Promise<any> {
    if (!this.token) {
       await this.getToken();
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    console.log("El id es: ", id, this.token);

    return this.http.get<any>(`${this.apiUrl}/examen/read_one.php?id=${id}`, { headers })
       .pipe(map(res => res as any))
       .toPromise();
 }
   
}
