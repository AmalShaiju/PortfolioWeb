import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  controller = null;
  scene = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const contactSection = document.querySelector('.contact-section');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: contactSection,
      triggerHook: 0
    })
      .setPin(contactSection)
      .addTo(this.controller);

    const tl = gsap.timeline();

    this.scene.on("enter", e => {
      tl.fromTo("#contact-title", { duration: 0.1, left: '-15rem' }, { duration: 1, left: '7rem' });
    })

    this.scene.on("leave", e => {
      tl.to("#contact-title", { duration: 1, left: '-15rem' });
    })

  }

}
