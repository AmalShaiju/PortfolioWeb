import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor() {
  
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const lap1 = document.querySelector('#lap1')
    const lap2 = document.querySelector('#lap2')
    const lap3 = document.querySelector('#lap3')

    const intro = document.querySelector('.projects');
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      duration: 9000,
      triggerElement: intro,
      triggerHook: 0
    }).addIndicators()
      .setPin(intro)
      .addTo(controller);


    let accelamount = 0.1
    let scrollpos = 0;
    let delay = 0;
    const tl = gsap.timeline();


    scene.on("progress", e => {
      console.log(e)
      if (e.scrollDirection != "REVERSE") {
        tl.to("#lap1", { duration: 0.1, opacity: 1 - e.progress, y: lap1.getBoundingClientRect().y - (e.progress * 10) })
      } else {
        tl.to("#lap1", { duration: 0.1, opacity: e.progress, y: lap1.getBoundingClientRect().y + (e.progress * 10) })
      }
    })

    //setInterval(() => {
    //  delay += (scrollpos - delay) * accelamount;
    //  const tl = gsap.timeline();
    // // tl.to("#lap1", { duration: 0.2, y: lap1.getBoundingClientRect().y -10 })
    //},33.3)
  }

  animate() {
    const tl = gsap.timeline();
    tl.fromTo(".dark-overlay", { width: "0%" }, { duration: 0.2, width: "100%" })
      .fromTo(".dark-overlay", { x: 0, opacity: 1 }, { duration: 1, x: 50, opacity: 0 });
  }

}
