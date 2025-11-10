'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
  className?: string;
}

export default function Typewriter({ text, speed = 50, cursor = true, className }: TypewriterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const chars = text.split('');
    elementRef.current.innerHTML = '';
    
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      elementRef.current!.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: i * (speed / 1000),
      });
    });

    if (cursor && cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
      });
    }
  }, [text, speed, cursor]);

  return (
    <span className={`inline-block ${className || ''}`}>
      <span ref={elementRef} />
      {cursor && <span ref={cursorRef} className="inline-block w-0.5 h-8 bg-purple-400 ml-1 animate-pulse" />}
    </span>
  );
}