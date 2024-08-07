import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div>
      <section className="section flex-center column">
        <h1>Axel Straube</h1>
        <h2>Front-End Developer</h2>
      </section>
      <div className="section flex-center column" ref={main}>
        <div className="box gradient-blue">hi</div>
        <div className="box gradient-blue">hello</div>
        <div className="box gradient-blue">hola</div>
      </div>
      <section className="section"></section>
    </div>
  );
}
