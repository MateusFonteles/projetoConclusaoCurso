import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Postagem } from './postagem.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  
  urlBase = "http://localhost:3001/postagens"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  mostrarMensagem(msg:string):void{
    this.snackBar.open(msg, 'x', {
      duration:3000,
      verticalPosition:"top",
      horizontalPosition:"right"
    })
  }

  criar(postagem:Postagem):Observable<Postagem>{
    return this.http.post<Postagem>(this.urlBase, postagem)
  }

}

