import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../models/projects.model';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/ToDoList.png',
      alt: '',
      title: "To Do List",
      width: '100px',
      height: '90px',
      description: 'Esse projeto é uma aplicação simples para gerenciar tarefas, permitindo adicionar e remover itens facilmente.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://joaocriminacio.github.io/ToDoList/'
        }
      ]
    },
    {
      src: 'assets/img/projects/CalculadoraIMC.png',
      alt: '',
      title: "Calculadora IMC",
      width: '100px',
      height: '90px',
      description: 'Esse projeto permite calcular o Índice de Massa Corporal (IMC) informando sua altura e peso. O resultado é exibido junto com a classificação do IMC, indicando se ele está dentro da faixa ideal ou não.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://joaocriminacio.github.io/CalculadoraIMC/'
        }
      ]
    },
    {
      src: 'assets/img/projects/GeradorNumerosMegaSena.png',
      alt: '',
      title: "Gerador de Números Para Mega Sena",
      width: '100px',
      height: '90px',
      description: 'Esse projeto permite que você escolha entre 6, 7, 8 ou 9 números para serem gerados aleatoriamente para a Mega Sena.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://joaocriminacio.github.io/GeradorNumerosMS/'
        }
      ]
    },
  ]);

  public openDialog (data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
