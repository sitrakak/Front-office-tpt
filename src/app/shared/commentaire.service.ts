import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(
    private http:HttpClient
  ) { }
  uri_api = 'https://oraclews-tptmbds.onrender.com/commentaires';

  getCommentaire() {
    return this.http.get<any[]>(this.uri_api);
  }

  addCommentaire(commentaire:any):Observable<any> {
    return this.http.post<any>(this.uri_api, commentaire);
  }
}
