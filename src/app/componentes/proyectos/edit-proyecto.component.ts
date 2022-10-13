import { Proyectos } from './../../model/proyectos';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto: Proyectos=null;

  constructor(
    private proyectoS:ProyectosService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute,
   
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto: " + err);
        this.router.navigate(['']);
      })
  }

  
}
