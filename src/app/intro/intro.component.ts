import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
import "scrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  //  const intro = document.querySelector('.intro');
  //  const controller = new ScrollMagic.Controller();
  //  const scene = new ScrollMagic.Scene({
  //    duration: 1000,
  //    triggerElement: intro,
  //    triggerHook: 0
  //  }).addIndicators()
  //    .setPin(intro)
  //    .addTo(controller);

   
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline();
    const signature = document.querySelector('#signature');
    console.log(signature)
    tl.fromTo('#signature', { y: 100, opacity: 0 }, { duration: 1.5, y: 0, opacity: 1 })
      .fromTo('#position', { y: 50, opacity: 0 }, { duration: 1, y: 0, opacity: 1 });
  }
 
}
