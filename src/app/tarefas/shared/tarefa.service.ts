import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Tarefa } from '.';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa | any {
    const tarefas = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((t) => {
      if (t.id === tarefa.id) {
        t = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas = this.listarTodos();
    tarefas.forEach((t) => {
      if (t.id === id) {
        t.concluida = !t.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
