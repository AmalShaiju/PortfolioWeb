import { Injectable } from '@angular/core';
import { Skill, SkillType } from '../../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills: Skill[] = []
  
  constructor() {

    //Front End Skills
    this.skills.push(new Skill("Angular", SkillType.FRONTEND));
    this.skills.push(new Skill("TypeScript", SkillType.FRONTEND));
    this.skills.push(new Skill("Node.js", SkillType.FRONTEND));
    this.skills.push(new Skill("Angular Material", SkillType.FRONTEND));
    this.skills.push(new Skill("Ngx-bootstrap", SkillType.FRONTEND));
    this.skills.push(new Skill("RxJs", SkillType.FRONTEND));
    this.skills.push(new Skill("JavaScript(ES5 / ES6)", SkillType.FRONTEND));
    this.skills.push(new Skill("jQuery", SkillType.FRONTEND));
    this.skills.push(new Skill("Bootstrap", SkillType.FRONTEND));
    this.skills.push(new Skill("CSS", SkillType.FRONTEND));
    this.skills.push(new Skill("SASS", SkillType.FRONTEND));
    this.skills.push(new Skill("XML", SkillType.FRONTEND));
    this.skills.push(new Skill("XAML", SkillType.FRONTEND))

    //Back End Skills
    this.skills.push(new Skill(".NET", SkillType.BACKEND));
    this.skills.push(new Skill(".NET Core", SkillType.BACKEND));
    this.skills.push(new Skill("ASP.NET", SkillType.BACKEND));
    this.skills.push(new Skill("ASP.NET Core", SkillType.BACKEND));
    this.skills.push(new Skill("Web API", SkillType.BACKEND));
    this.skills.push(new Skill("REST API", SkillType.BACKEND));
    this.skills.push(new Skill("Python", SkillType.BACKEND));
    this.skills.push(new Skill("SQL", SkillType.BACKEND));
    this.skills.push(new Skill("C#", SkillType.BACKEND));
    this.skills.push(new Skill("Django", SkillType.BACKEND));
    this.skills.push(new Skill("JAVA", SkillType.BACKEND));

    //Database
    this.skills.push(new Skill("MSSQL", SkillType.DATABASE));
    this.skills.push(new Skill("MySQL", SkillType.DATABASE));
    this.skills.push(new Skill("SQLite", SkillType.DATABASE));
    this.skills.push(new Skill("MongoDB", SkillType.DATABASE));
    this.skills.push(new Skill("ETL", SkillType.DATABASE));
    this.skills.push(new Skill("SSIS", SkillType.DATABASE));

    //Mobile
    this.skills.push(new Skill("Android Studio", SkillType.MOBILE));
    this.skills.push(new Skill("Xamrin", SkillType.MOBILE));

    //Soft
    this.skills.push(new Skill("Analytical", SkillType.SOFT));
    this.skills.push(new Skill("Teamwork", SkillType.SOFT));
    this.skills.push(new Skill("Leadership", SkillType.SOFT));
    this.skills.push(new Skill("Time Management", SkillType.SOFT));
    this.skills.push(new Skill("Decision Making", SkillType.SOFT));
    this.skills.push(new Skill("Problem Solving", SkillType.SOFT));
    this.skills.push(new Skill("Attention To Detail", SkillType.SOFT));
    this.skills.push(new Skill("Organizational Skills", SkillType.SOFT));
    this.skills.push(new Skill("Effective Communication", SkillType.SOFT));



    //Professional
    this.skills.push(new Skill("Troubleshooting and Bug Fixes", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("Stake Holders Engagements", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("User-centered Design Processes", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("SEO Optimization", SkillType.PROFESSIONAL)); 
    this.skills.push(new Skill("Desktop/Mobile Development", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("Application Presentation", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("UI/UX design", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("Agile and Scrum", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("E-Commerce Website Development", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("Data Analysis / Website development", SkillType.PROFESSIONAL));
    this.skills.push(new Skill("Database Development and Management", SkillType.PROFESSIONAL));

    //Tools
    this.skills.push(new Skill("Linux OS", SkillType.TOOL));
    this.skills.push(new Skill("Mac OS", SkillType.TOOL));
    this.skills.push(new Skill("Windows OS", SkillType.TOOL));
    this.skills.push(new Skill("Git", SkillType.TOOL));
    this.skills.push(new Skill("GitHub", SkillType.TOOL));
    this.skills.push(new Skill("Azure Suite", SkillType.TOOL));
    this.skills.push(new Skill("Graph API", SkillType.TOOL));
    this.skills.push(new Skill("Power BI", SkillType.TOOL));
    this.skills.push(new Skill("Shopify", SkillType.TOOL));
    this.skills.push(new Skill("WordPress", SkillType.TOOL));
    this.skills.push(new Skill("Adobe Photoshop", SkillType.TOOL));
    this.skills.push(new Skill("InDesign", SkillType.TOOL));
    this.skills.push(new Skill("Office 365(MS Visio and more)", SkillType.TOOL));
    this.skills.push(new Skill("Canva", SkillType.TOOL));
    this.skills.push(new Skill("Google Analytics", SkillType.TOOL));
    this.skills.push(new Skill("Google Tag Manager", SkillType.TOOL));
    this.skills.push(new Skill("Google Optimize", SkillType.TOOL));
    
  }


}
