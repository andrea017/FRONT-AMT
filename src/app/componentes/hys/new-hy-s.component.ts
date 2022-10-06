import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-new-hy-s',
  templateUrl: './new-hy-s.component.html',
  styleUrls: ['./new-hy-s.component.css']
})
export class NewHySComponent implements OnInit {
  nombre: string;
  porcentaje : number;

  constructor(private skillS:HysService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Hys(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(data =>{
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló al añadir la skill");
      this.router.navigate(['']);
    })
  }

}
