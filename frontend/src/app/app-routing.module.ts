import { CriarPostagemComponent } from './components/postagem/criar-postagem/criar-postagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostagemCrudComponent } from './views/postagem-crud/postagem-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
  path: "postagens",
  component: PostagemCrudComponent
  },{
  path: "postagens/criar",
  component: CriarPostagemComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
