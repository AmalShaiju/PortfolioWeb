import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
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
      duration: 5000,
      triggerElement: projectSection,
      triggerHook: 0
    }).addIndicators()
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
      else if (scrollprogress > 0.25 && scrollprogress <= 0.50) {
        if (this.ps.project.title != this.ps.projects[1].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[1];
      }
      else if (scrollprogress > 0.50 && scrollprogress <= 0.75) {
        if (this.ps.project.title != this.ps.projects[2].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[2];
      }
      else if (scrollprogress > 0.75) {
        if (this.ps.project.title != this.ps.projects[3].title) {
          this.animateOveraly();
        }
        this.ps.project = this.ps.projects[3];
      }

      console.log(scrollpos)
      delay += (scrollprogress - delay) * accelamount;
      const tl = gsap.timeline();
      tl.to("#lap1", { duration: 0.1, top: `${(500 - (5000 * delay))}px` });
      tl.to("#lap2", { duration: 0.1, top: `${(700 - (5000 * delay))}px`});
      tl.to("#lap3", { duration: 0.1, top: `${(1000 - (5000 * delay))}px` });

      tl.to("#lap4", { duration: 0.1, top: `${(1000 - (5000 * delay))}px` });
      tl.to("#lap5", { duration: 0.1, top: `${(1200 - (5000 * delay))}px` });
      tl.to("#lap6", { duration: 0.1, top: `${(1500 - (5000 * delay))}px` });
      tl.to("#lap7", { duration: 0.1, top: `${(1700 - (5000 * delay))}px` });

      tl.to("#lap8", { duration: 0.1, top: `${(2500 - (5000 * delay))}px` });
      tl.to("#lap9", { duration: 0.1, top: `${(2700 - (5000 * delay))}px` });
      tl.to("#lap10", { duration: 0.1, top: `${(3000 - (5000 * delay))}px` });
      tl.to("#lap11", { duration: 0.1, top: `${(3200 - (5000 * delay))}px` });

      tl.to("#lap12", { duration: 0.1, top: `${(3700 - (5000 * delay))}px` });
      tl.to("#lap13", { duration: 0.1, top: `${(3900 - (5000 * delay))}px` });
      tl.to("#lap14", { duration: 0.1, top: `${(4300 - (5000 * delay))}px` });
      tl.to("#lap15", { duration: 0.1, top: `${(4300 - (5000 * delay))}px` });

    }, 33.3)
  }

  ngOnDestroy(): void {
    this.controller = null;
    this.scene = null;
  }

  animateOveraly() {
    var s = document.querySelectorAll('.overlay-animated');
    s.forEach(p => {
      p.classList.remove('dark-overlay');
      setInterval(() => { p.classList.add('dark-overlay'); },300)
    });
  }

}
