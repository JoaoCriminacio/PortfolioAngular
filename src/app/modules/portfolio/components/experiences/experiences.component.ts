import { Component, signal } from '@angular/core';
import { IExperiences } from '../../models/experiences.model';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Estagiário de Suporte Técnico",
        p: "Limber Software | Fev 2023 - Abr 2023"
      },
      text: "<p>Durante meu período de estágio na Limber Software, atuei como suporte técnico auxiliando cliente a utilizarem e a entenderem melhor o ERP, produto disponibilizado pela empresa.</p>",
    },
    {
      summary: {
        strong: "Suporte Técnico",
        p: "Limber Software | Abr 2023 - Presente"
      },
      text: "<p>Desde de abril de 2023, atuo como Suporte Técnico na Limber Software, destacando-me nas áreas de atendimento ao cliente, trabalho em equipe, sistemas ERP e Firebird.</p>",
    },
  ])
}
