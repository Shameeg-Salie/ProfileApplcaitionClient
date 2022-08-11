import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl = "https://localhost:44351/api/project"
  constructor(private http: HttpClient) {}

  getProjects(projectId: string): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl+'/'+projectId);
  }

  addProject(project: Project): Observable<Project>{
    return this.http.post<Project>(this.baseUrl, project);
  }
}
