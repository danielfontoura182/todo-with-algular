import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '..';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos() {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, id: any, nome: any): void {
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa "${nome}"?`)) {
      this.tarefaService.remover(id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(id: any, nome: any): void {
    if (confirm(`Deseja concluir a tarefa "${nome}"?`)) {
      this.tarefaService.alterarStatus(id);
      this.tarefas = this.listarTodos();
    }
  }
}
