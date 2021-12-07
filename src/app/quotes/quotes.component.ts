import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

@Component({
  selector: 'quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit, AfterViewInit {
  controller = null;
  scene = null;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const quoteTwo = document.querySelector('.section-5');

    this.controller = new ScrollMagic.Controller();
    this.scene = new ScrollMagic.Scene({
      duration: 0,
      triggerElement: quoteTwo,
      triggerHook: 0
    })
      .addTo(this.controller);

    const tl = gsap.timeline();

    this.scene.on("enter", e => {
      tl.fromTo("#quote1Triangle", { duration: 0.1, strokeDashoffset: 1000 }, { duration: 3, strokeDashoffset: 0 })
        .fromTo("#quote2Triangle", { duration: 0.1, strokeDashoffset: 1000 }, { duration: 3, strokeDashoffset: 0 }, "<");
    })

    this.scene.on("leave", e => {
      tl.to("#quote1Triangle", { duration: 1, strokeDashoffset: 1000 })
        .to("#quote2Triangle", { duration: 1, strokeDashoffset: 1000 }, "<");
    })

  }
}
