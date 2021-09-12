import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarTarefasComponent } from './cadastrar';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefasComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [TarefaService],
})
export class TarefasModule {}
