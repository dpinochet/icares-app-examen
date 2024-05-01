import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = 'https://intranet.icares.cl/API';
  private generateTokenUrl = `${this.apiBaseUrl}/token/generate.php`;
  private token: string;

  constructor(private http: HttpClient) { }

  // Método para solicitar un token utilizando las credenciales proporcionadas
  generateToken(): Observable<string> {
    const credentials = {
      username: environment.apiUsername,
      password: environment.apiPassword
    };

    return this.http.post<{ document: { access_token: string } }>(this.generateTokenUrl, credentials)
      .pipe(
        catchError(error => throwError('Error al generar el token')),
        switchMap(response => {
          let token = response.document.access_token;
          if (token) {
            this.setToken(token);
            return token;
          } else {
            return throwError('Token no recibido en la respuesta');
          }
        })
      );
  }

  // Método para establecer el token
  setToken(token: string): void {
    this.token = token;
  }

  // Método para realizar solicitudes HTTP con el token
  request(method: string, endpoint: string, body?: any): Observable<any> {
    const url = `${this.apiBaseUrl}/${endpoint}`;
    const options: any = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };

    if (body) {
      options.body = body;
    }

    return this.http.request(method, url, options)
      .pipe(
        catchError(error => {
          // Si se recibe un error 401 (Unauthorized), renovar el token y volver a intentar la solicitud
          if (error.status === 401) {
            return this.refreshTokenAndRetry(method, endpoint, body);
          }
          return throwError(error);
        })
      );
  }

  // Método para renovar el token y volver a intentar la solicitud
  private refreshTokenAndRetry(method: string, endpoint: string, body?: any): Observable<any> {
    // Lógica para renovar el token (puedes llamar a tu servicio de autenticación aquí)
    // En este ejemplo, simplemente generamos un nuevo token usando las credenciales anteriores
    return this.generateToken().pipe(
      switchMap(newToken => {
        // Actualiza el token en el servicio
        this.setToken(newToken);
        // Vuelve a intentar la solicitud con el nuevo token
        return this.request(method, endpoint, body);
      })
    );
  }

  // Método para consultar un examen específico por ID
  consultaExamen(id: number): Observable<any> {
    return this.request('GET', `examen/read_one.php?id=${id}`);
  }
}
