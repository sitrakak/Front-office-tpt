import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-fiche-infos',
  templateUrl: './fiche-infos.component.html',
  styleUrls: ['./fiche-infos.component.css']
})
export class FicheInfosComponent implements OnInit{
  id:any;
  info: any;
  commentaire: any;
  public constructor(private route:ActivatedRoute, private infoService:InfoService, private commentaireService:CommentaireService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getInfo();
    this.getCommentaire();
  }
  
  getInfo() {
    this.infoService.getInfoById(this.id)
    .subscribe(
    (data) => {
      this.info = data;
    },
    (error) => {
      // Gérer les erreurs
      console.error('Une erreur est survenue : ', error);
    })
  }

  getCommentaire() {
    this.commentaireService.getCommentaire()
    .subscribe(data => {
      this.commentaire = data;
      console.log('bbb',data);
    },
    (error) => {
      // Gérer les erreurs
      console.error('Une erreur est survenue : ', error);
    });
  }
  
}
