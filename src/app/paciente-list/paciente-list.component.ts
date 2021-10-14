import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) {
    this.pacientes = [];
   }

  ngOnInit(): void {
    this.getPacientes();
  }

  private getPacientes(){
    this.pacienteService.getPacientesList().subscribe(data => {
      this.pacientes = data;
    });
  }

}
