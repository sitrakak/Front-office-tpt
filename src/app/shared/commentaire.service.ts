import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(
    private http:HttpClient
  ) { }
  uri_api = 'https://oraclews-tptmbds.onrender.com/commentaires';

  getCommentaire(id: any, type: any) {
    return this.http.get<any[]>(this.uri_api+`?type_mere=${type}&id_mere=${id}`);
  }

  addCommentaire(commentaire:any):Observable<any> {
    const formData = new FormData();
    formData.append('type_mere', commentaire.type_mere);
    formData.append('id_mere', commentaire.id_mere);
    formData.append('id_user', commentaire.id_user);
    formData.append('contenu', commentaire.contenu);

    return this.http.post<any>(this.uri_api, formData);
  }
}
