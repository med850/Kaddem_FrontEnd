import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http : HttpClient) { }

  public getEtudiant(){

    return this.http.get(`${baseUrl}/etudiant`);


  }


  public addEtudiant(etudiant:any){

    return this.http.post(`${baseUrl}/etudiant/add/`,etudiant);


  }

  public addEtudiantAndAssignToEquipeContrat(etudiant:any, idE: number, idC: number){

    console.log(etudiant);
    return this.http.post(`${baseUrl}/etudiant/add_etudiant/assign_equipe_contrat/${idE}/${idC}`,etudiant);


  }




}
