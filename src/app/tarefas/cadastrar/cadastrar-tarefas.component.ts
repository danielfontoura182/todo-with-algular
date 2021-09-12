import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css'],
})
export class CadastrarTarefasComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa: any;
  tarefa: Tarefa = new Tarefa();

  constructor(private tarefaService: TarefaService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
