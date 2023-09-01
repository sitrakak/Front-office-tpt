import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
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
  public constructor(private route:ActivatedRoute, private infoService:InfoService, private commentaireService:CommentaireService, private authService: AuthService){}

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
      console.error('Une erreur est survenue : ', error);
    })
  }

  getCommentaire() {
    this.commentaireService.getCommentaire(this.id, 'INFO')
    .subscribe((resp: any) => {
      this.commentaire = resp.data;
      
      for (const comment of this.commentaire) {
        this.authService.getUserById(comment.id_user)
          .subscribe((user: any) => {
            comment.user = user.nom;
          });
      }
    },
    (error) => {
      console.error('Une erreur est survenue : ', error);
    });
  }

  commenter(){
    const idUser = localStorage.getItem("idUser");
    
    if (this.comment) {
      const commentaire = {
        type_mere: 'INFO',
        id_mere: this.id,
        id_user: idUser,
        contenu: this.comment
      }
      
      this.commentaireService.addCommentaire(commentaire)
      .subscribe(data => {
        this.getCommentaire();
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
