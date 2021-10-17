import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-paciente-details',
  templateUrl: './paciente-details.component.html',
  styleUrls: ['./paciente-details.component.css']
})
export class PacienteDetailsComponent implements OnInit {

  id: number;
  paciente: Paciente;
  constructor(private route: ActivatedRoute, private pacienteService: PacienteService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.paciente = new Paciente();
    this.pacienteService.getPacienteById(this.id).subscribe( data => {
      this.paciente = data;
    });
  }

}
