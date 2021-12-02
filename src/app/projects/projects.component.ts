import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
import {Project } from '../../models/project'

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  controller = null;
  scene = null;
  projects: Project[] = [];
  project: Project;

  constructor() {
    this.projects.push(new Project(1, "OASIS", "Full Stack Developer • UI Designer", "IoT project to give workplace insights using indoor localization, voice and schedule.","ASP.NET WEB APP"))
    this.projects.push(new Project(1, "Instafeed", "Full Stack Developer • UI Designer", "Sample App", "ANDROID APP"))

    this.project = this.projects[0];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const projectSection = document.querySelector('.projects');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 2000,
      triggerElement: projectSection,
      triggerHook: 0
    }).addIndicators()
      .setPin(projectSection)
      .addTo(this.controller);

    let accelamount = 0.08
    let scrollprogress = 0;
    let scrollpos = 0;
    let delay = 0;
    const tl = gsap.timeline();


    this.scene.on("update", e => {
      scrollpos = e.scrollPos;
    })


    this.scene.on("progress", e => {
      scrollprogress = e.progress;
    })


    setInterval(() => {
      if (scrollprogress < 0.5) {
        if (this.project.title != this.projects[0].title) {
          this.remove();
        }
        this.project = this.projects[0];
      }
      else if (scrollprogress > 0.5) {
        if (this.project.title != this.projects[1].title) {
          this.remove();
        }
        this.project = this.projects[1];
      }

      console.log(scrollpos)
      delay += (scrollprogress - delay) * accelamount;
      const tl = gsap.timeline();
      tl.to("#lap1", { duration: 0.1, top: `${(500 - (2000 * delay))}px` });
      tl.to("#lap2", { duration: 0.1, top: `${(700 - (2000 * delay))}px`});
      tl.to("#lap3", { duration: 0.1, top: `${(1000 - (2000 * delay))}px` });

      tl.to("#lap4", { duration: 0.1, top: `${(1100 - (2000 * delay))}px` });
      tl.to("#lap5", { duration: 0.1, top: `${(1300 - (2000 * delay))}px` });
      tl.to("#lap6", { duration: 0.1, top: `${(1600 - (2000 * delay))}px` });

    }, 33.3)
  }

  ngOnDestroy(): void {
    this.controller = null;
    this.scene = null;
  }

  remove() {
    console.log('s')
    var s = document.querySelectorAll('.overlay-animated');
    s.forEach(p => {
      p.classList.remove('dark-overlay');

      setInterval(() => { p.classList.add('dark-overlay'); },300)
      
    });
  }

}
