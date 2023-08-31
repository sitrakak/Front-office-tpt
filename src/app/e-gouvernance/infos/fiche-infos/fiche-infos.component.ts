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
  comment: any= '';
  public constructor(private route:ActivatedRoute, private infoService:InfoService, private commentaireService:CommentaireService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('idUser', localStorage.getItem("idUser"));
    
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

  commenter(){
    const idUser = localStorage.getItem("idUser");
    console.log(idUser);
    
    if (this.comment) {
      const commentaire = {
        type_mere: 'INFO',
        id_mere: this.id,
        id_user: idUser,
        contenu: this.comment
      }
      console.log(commentaire);
      
      this.commentaireService.addCommentaire(commentaire)
      .subscribe(data => {
        console.log(data);
      },
      (error) => {
        console.error('Une erreur est survenue : ', error);
      });
    }
    else{
      console.log('Veuillez ajouter un commentaire');
    }
  }
  
}
