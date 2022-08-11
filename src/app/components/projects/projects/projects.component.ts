import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectsService){
  }

  projects: Project[] = []
  project: Project = {
    id: "0",
    projectId: history.state.data,
    projectName: "",
    projectDescription: ""
  };

  ngOnInit(): void {
    console.log(this.project.projectId);
  }

  getProjects(){
    this.projectService.getProjects(this.project.projectId)
    .subscribe(
      response =>{
        console.log(response);
      }
    )
  }

  addProject(){
    this.projectService.addProject(this.project)
    .subscribe(
      response =>{
        console.log(response)
      }
    )
  }

  next(){
    
  }
}
