import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE:string='';
  descripcionE: string= '';
  fechaE:string='';
  logoE:string='';
  tareasE:string='';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate():void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fechaE, this.logoE, this.tareasE);
    this.experienciaService.save(expe).subscribe(data => {alert ("Experiencia añadida");
    this.router.navigate(['']);
  }, err =>{
    alert("Falló");
    this.router.navigate(['']);
  })

  }

}
