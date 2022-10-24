import { EducacionService } from './../../service/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { TokenService } from 'src/app/service/token.service';
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  databaseDropList: Educacion[] = [];
  finalDatabaseObject: Educacion[];
 
 

  constructor(private educacionS:EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarEducacion():void{
    this.educacionS.lista().subscribe(data => {this.educacion = data;})
  }

  delete(id?:number){
    if (id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar");
        }
          )
    }
  }

 
}