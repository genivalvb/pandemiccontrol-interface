import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router ) {
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

  pacienteDetails(id: number){
    this.router.navigate(['paciente-details/um/', id]);
  }

}
