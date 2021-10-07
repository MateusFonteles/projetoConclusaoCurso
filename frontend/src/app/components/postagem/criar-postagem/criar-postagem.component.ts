import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../postagem.service';
import { Postagem } from '../postagem.model';

@Component({
  selector: 'app-criar-postagem',
  templateUrl: './criar-postagem.component.html',
  styleUrls: ['./criar-postagem.component.css']
})
export class CriarPostagemComponent implements OnInit {

  postagem: Postagem = {
    titulo: '',
    texto: '',
    link:'' 
  }

  constructor(private postagemService: PostagemService, private router: Router) { }

  ngOnInit(): void {
  
  }

  criarPostagem(): void{
    this.postagemService.criar(this.postagem).subscribe(()=>{
      this.postagemService.mostrarMensagem('Operação executada com sucesso')
      this.router.navigate(["/postagens"])
    })
  }

  cancelar ():void{
    this.router.navigate(["/postagens"])
  }
}
