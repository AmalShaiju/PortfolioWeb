import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];
  project: Project;

  constructor() {
    this.projects.push(new Project(1, "OASIS", "Full Stack Developer", "Team Lead",
      "Web application project for quote creation to project progress tracking including customer and employee management.",
      "ASP.NET WEB APP", "https://github.com/AmalShaiju/OASIS", "",
      ["ASP.NET Core", "C#", "MVC Architecture,", "Code First Design", "Razer Pages", "SQLITE"],
      "Acquired code organizational skills by using appropriate design patterns for Object-oriented-programing and learned to work in a collaborative environment"));

    this.projects.push(new Project(2, "Donation App", "Android Developer", "UI Designer", "Android application where donors can post items to donate along with pickup address and donees can come collect it", "Android App", "https://github.com/AmalShaiju/instafeed", "",
      ["Android Studio", "Java", "Google Maps SDK", "XML"],
      "Got exposed to mobile development and learned the basics of Xamarin and UWP"));

    this.projects.push(new Project(3, "Shop Wonderboy", "Shopify Developer", "UI Designer",
      "Shopify powered E-commerce website for anime niche apparels. Includes marketing campagins ranging from Email to facebook messenger", "SHOPIFY WEBSITE", "",
      "https://shopwonderboy.com/", ["Shopify", "HTML", "CSS", "Shopify Plugins", "SEO optimization", "Klaviyo","Instafeed"],
      "Learned to prioritize tasks and modules based on their urgency."
      ));

    this.projects.push(new Project(4, "BKMM & ASSOSIATES", "Wordpress Developer", "Product Manager",
      "Production ready brochure website designed for chartered accountant firm using latest technology of wordpress and Elementor",
      "WORDPRESS WEBSITE", "", "https://bkmm.in/", ["Wordpress", "MYSQL", "Elementor", "HTML", "CSS", "JavaScript", "jQuery"],
      "Improved database management/administration and ETL skills. Learned to gather requirements from a client further translating them into the design and finally developing it into a production-ready website."));
    this.project = this.projects[0];
  }
}
