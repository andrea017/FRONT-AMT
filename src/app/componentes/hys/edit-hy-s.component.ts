import { Hys } from 'src/app/model/hys';
import { Component, OnInit } from '@angular/core';
import { HysService } from 'src/app/service/hys.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-hy-s',
  templateUrl: './edit-hy-s.component.html',
  styleUrls: ['./edit-hy-s.component.css']
})
export class EditHySComponent implements OnInit {
  skill : Hys = null;
  constructor(private skillS: HysService, private activatedRouter:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err =>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad: " + err);
        this.router.navigate(['']);
      })
  }

}
