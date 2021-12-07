import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";
import { Project } from '../../models/Project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  controller = null;
  scene = null;

  constructor(public ps: ProjectService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const projectSection = document.querySelector('.projects');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 4500,
      triggerElement: projectSection,
      triggerHook: 0
    })
      .setPin(projectSection)
      .addTo(this.controller);

    let accelamount = 0.1
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
      if (scrollprogress <= 0.25) {
        if (this.ps.project.title != this.ps.projects[0].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[0];
      }
      else if (scrollprogress > 0.25 && scrollprogress <= 0.60) {
        if (this.ps.project.title != this.ps.projects[1].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[1];
      }
      else if (scrollprogress > 0.60 && scrollprogress <= 0.9) {
        if (this.ps.project.title != this.ps.projects[2].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[2];
      }
      else if (scrollprogress > 0.) {
        if (this.ps.project.title != this.ps.projects[3].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[3];
      }

      delay += (scrollprogress - delay) * accelamount;
      const tl = gsap.timeline();
      tl.to("#lap1", { duration: 0.1, top: `${(500 - (4500 * delay))}px` })
        .to("#lap2", { duration: 0.1, top: `${(700 - (4500 * delay))}px` }, "<")
        .to("#lap3", { duration: 0.1, top: `${(1000 - (4500 * delay))}px` }, "<")

        .to("#lap4", { duration: 0.1, top: `${(1000 - (4500 * delay))}px` }, "<")
        .to("#lap5", { duration: 0.1, top: `${(1200 - (4500 * delay))}px` }, "<")
        .to("#lap6", { duration: 0.1, top: `${(1500 - (4500 * delay))}px` }, "<")
        .to("#lap7", { duration: 0.1, top: `${(1700 - (4500 * delay))}px` }, "<")

        .to("#lap8", { duration: 0.1, top: `${(2500 - (4500 * delay))}px` }, "<")
        .to("#lap9", { duration: 0.1, top: `${(2700 - (4500 * delay))}px` }, "<")
        .to("#lap10", { duration: 0.1, top: `${(3000 - (4500 * delay))}px` }, "<")
        .to("#lap11", { duration: 0.1, top: `${(3200 - (4500 * delay))}px` }, "<")

        .to("#lap12", { duration: 0.1, top: `${(3600 - (4500 * delay))}px` }, "<")
        .to("#lap13", { duration: 0.1, top: `${(3800 - (4500 * delay))}px` }, "<")
        .to("#lap15", { duration: 0.1, top: `${(4100 - (4500 * delay))}px` }, "<")

    },0.5)
  }

  ngOnDestroy(): void {
    this.controller = null;
    this.scene = null;
  }

  animateOveraly() {
    var s = document.querySelectorAll('.overlay-animated');
    s.forEach(p => {
      p.classList.remove('dark-overlay');
      setInterval(() => { p.classList.add('dark-overlay'); }, 300)
    });
  }

}
