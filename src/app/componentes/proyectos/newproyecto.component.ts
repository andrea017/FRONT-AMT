
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageListService } from 'src/app/service/imageList.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string = '';
  descripcion:string ='';
  img:string = '';
  proyecto:Proyectos = null;
 


  constructor(public imageListService: ImageListService, private proyectoService: ProyectosService, private router: Router, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  onCreate():void {
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.img);
    this.proyectoService.save(proyecto).subscribe(data => {alert ("Proyecto añadido");
    this.router.navigate(['']);
  }, err =>{
    alert("Falló");
    this.router.navigate(['']);
    
   
    

  })
  }

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params[''];
    const name = "proyecto_" + id;
    this.imageListService.uploadImage($event, name);
    
    
  }


}
