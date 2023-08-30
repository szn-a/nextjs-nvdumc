'use client';
import { gsap } from 'gsap/dist/gsap';

import { useIsomorphicLayoutEffect } from '../helpers/isomorphicEffect';
import { useRef } from 'react';

export default function Home() {
  const container = useRef(null);
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current?.reversed(!tl.current.reversed());
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h1>Use the button to toggle a Timeline</h1>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
        <div className="box">Box 3</div>
      </section>
    </main>
  );
}
