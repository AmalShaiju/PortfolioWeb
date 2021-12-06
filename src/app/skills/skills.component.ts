import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Skill, SkillType } from '../../models/skill';
import { SkillService } from '../services/skill.service';
import { gsap } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
import { animate } from '@angular/animations';
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  controller = null;
  scene = null;
  public selectedSkillSet: Skill[] = [];
  public selectedSkillTitle: string = "SKILLS";

  public frontEnd: Skill[];
  public backEnd: Skill[];
  public database: Skill[];
  public professional: Skill[];
  public soft: Skill[];
  public mobile: Skill[];
  public tool: Skill[];
  private tl = gsap.timeline();

  constructor(private ss: SkillService) {
    this.selectedSkillSet = this.frontEnd;

    this.frontEnd = this.ss.skills.filter(p => p.skillType == SkillType.FRONTEND);
    this.backEnd = this.ss.skills.filter(p => p.skillType == SkillType.BACKEND);
    this.database = this.ss.skills.filter(p => p.skillType == SkillType.DATABASE);
    this.professional = this.ss.skills.filter(p => p.skillType == SkillType.PROFESSIONAL);
    this.soft = this.ss.skills.filter(p => p.skillType == SkillType.SOFT);
    this.mobile = this.ss.skills.filter(p => p.skillType == SkillType.MOBILE);
    this.tool = this.ss.skills.filter(p => p.skillType == SkillType.TOOL);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const skillSection = document.querySelector('.section-skill');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 1000,
      triggerElement: skillSection,
      triggerHook: 0
    }).addIndicators()
      .setPin(skillSection)
      .addTo(this.controller);


    this.scene.on("progress", e => {
      const oldTitle = this.selectedSkillTitle;
      let newTitle = "";

      if (e.progress <= 0.16) {
        this.selectedSkillSet = this.frontEnd;
        this.selectedSkillTitle = "FRONT END"
        newTitle = "FRONT END";
      }
      else if (e.progress > 0.16 && e.progress <= 0.32) {
        this.selectedSkillSet = this.backEnd;
        this.selectedSkillTitle = "BACK END"
        newTitle = "BACK END";
      }
      else if (e.progress > 0.28 && e.progress <= 0.48) {
        this.selectedSkillSet = this.database;
        this.selectedSkillTitle = "DATABASE";
        newTitle = "DATABASE";
      }
      else if (e.progress > 0.42 && e.progress <= 0.64) {
        this.selectedSkillSet = this.mobile;
        this.selectedSkillTitle = "MOBILE"
        newTitle = "MOBILE";
      }
      else if (e.progress > 0.56 && e.progress <= 0.80) {
        this.selectedSkillSet = this.professional;
        this.selectedSkillTitle = "PROFESSIONAL"
        newTitle = "PROFESSIONAL";
      }
      else if (e.progress > 0.80) {
        this.selectedSkillSet = this.soft;
        this.selectedSkillTitle = "PERSONAL"
        newTitle = "PERSONAL"
      }
      if (oldTitle != newTitle) {
        this.animateTitle();
      }
    })

  }

  animateTitle() {
    this.tl.fromTo("#skill-title", { duration: 0, left: '-100rem', opacity: 0 }, { duration: 1, left: '5rem', opacity: 1 });
  }
}