import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];
  project: Project;

  constructor() {
    this.projects.push(new Project(1, "OASIS", "Full Stack Developer", "UI Designer", "Web application project for quotation creation to project progress tracking including customer and employee management.", "ASP.NET WEB APP","https://github.com/AmalShaiju/OASIS","", ["ASP.NET Core", "C#", "MVC architecture", "Code first design", "Razer pages", "SQLITE"]));
    this.projects.push(new Project(2, "Instafeed", "Android Developer", "", "Android application where donors can post items to donate along with pickup address and donees can come collect it", "Android App","https://github.com/AmalShaiju/instafeed","", ["Android Studio", "Java", "Google Maps SDK", "XML"]));
    this.projects.push(new Project(3, "ShopWonderboy", "Shopify Developer", "UI Designer", "Shopify application for selling specific niched apparels", "SHOPIFY WEBSITE", "","https://shopwonderboy.com/", ["Shopify", "HTML","CSS","Shopify Plugins"]));
    this.projects.push(new Project(4, "BKMM & ASSOSIATES", "Wordpress Developer", "Project Lead", "Production ready brochure website designed for chartered accountant firm using latest technology of wordpress and Elementor", "WORDPRESS", "","https://bkmm.in/",["Wordpress", "Elementor","HTML","CSS","JavaScript","jQuery"]));
    this.project = this.projects[0];
  }
}
