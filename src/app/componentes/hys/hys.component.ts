import { Hys } from './../../model/hys';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Hys[]=[];

  constructor(private skillS:HysService, private tokenService:TokenService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSkills():void{
    this.skillS.lista().subscribe(data => {
      this.skill =data;
    })
  }

  delete(id?:number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data =>{
        this.cargarSkills();
      }, err =>{
        alert("No se pudo borrar la skill");
      }
        )
    }
  }
}
