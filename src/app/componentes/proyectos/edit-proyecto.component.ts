import { Proyectos } from './../../model/proyectos';
import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';
import { ImageListService } from 'src/app/service/imageList.service';

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
    public imageListService: ImageListService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params[''];
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
    const id = this.activatedRouter.snapshot.params[''];
    this.proyecto.img=this.imageListService.url
    this.proyectoS.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto: " + err);
        this.router.navigate(['']);
      })
  }

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params[''];
    const name = "proyecto_" + id;
    this.imageListService.uploadImage($event, name);
  }
}
