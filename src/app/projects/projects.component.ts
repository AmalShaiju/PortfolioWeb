import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  controller = null;
  scene = null;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const lap1 = document.querySelector('#lap1')
    const lap2 = document.querySelector('#lap2')
    const lap3 = document.querySelector('#lap3')
    const projectSection = document.querySelector('.projects');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 1000,
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
      console.log(scrollpos);
    })

    this.scene.on("progress", e => {
      scrollprogress = e.progress;
    })


    setInterval(() => {
      delay += (scrollprogress - delay) * accelamount;
      const tl = gsap.timeline();
      tl.to("#lap1", { duration: 0.1, top: `${(500 - (1500 * delay))}px` });
      tl.to("#lap2", { duration: 0.1, top: `${(700 - (1500 * delay))}px`});
      tl.to("#lap3", { duration: 0.1, top: `${(1000 - (1500 * delay))}px` });
    }, 33.3)
  }

  ngOnDestroy(): void {
    this.controller = null;
    this.scene = null;
  }


}
