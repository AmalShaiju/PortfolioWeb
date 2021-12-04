import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];
  project: Project;

  constructor() {
    this.projects.push(new Project(1, "OASIS", "Full Stack Developer", "UI Designer", "Web application project for quotation creation to project progress tracking including customer and employee management.", "ASP.NET WEB APP", ["ASP.NET Core", "C#", "MVC architecture", "Code first design", "Razer pages", "SQLITE"]));
    this.projects.push(new Project(2, "Instafeed", "Android Developer", "", "Android application where donors can post items to donate along with pickup address and donees can come collect it", "Android App", ["Android Studio", "Java", "Google Maps SDK", "XML"]));
    this.projects.push(new Project(3, "Anime North", "Xamrin Developer", "", "Xamrin quiz application which scales and works consisently on iOS, Android and Windows desktop from one codebase", "Xamrin App", ["C#", "Xamrin","XML"]));
    this.projects.push(new Project(3, "Test File", "Xamrin Developer", "", "Xamrin quiz application which scales and works consisently on iOS, Android and Windows desktop from one codebase", "Xamrin App", ["C#", "Xamrin","XML"]));
    this.project = this.projects[0];
  }
}
