import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, AfterViewInit {
  controller = null;
  scene = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const aboutmeSection = document.querySelector('.section-2');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: aboutmeSection,
      triggerHook: 0
    }).addIndicators()
      .setPin(aboutmeSection)
      .addTo(this.controller);

    const tl = gsap.timeline();

    this.scene.on("enter", e => {
      tl.fromTo("#aboutme-title", { duration: 0.1, left:'-15rem' }, { duration: 1, left:'10rem' });
    })

    this.scene.on("leave", e => {
      tl.to("#aboutme-title", { duration: 1, left:'-15rem' });
    })
    
  }

}
