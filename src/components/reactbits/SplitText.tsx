'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextProps {
  text: string;
  from?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
  stagger?: number;
  className?: string;
}

export default function SplitText({ 
  text, 
  from = 'bottom', 
  duration = 1, 
  stagger = 0.05, 
  className 
}: SplitTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const chars = text.split('');
    elementRef.current.innerHTML = '';
    
    const startY = from === 'top' ? -50 : from === 'bottom' ? 50 : 0;
    const startX = from === 'left' ? -50 : from === 'right' ? 50 : 0;

    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = `translate(${startX}px, ${startY}px)`;
      elementRef.current!.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay: i * stagger,
        ease: 'power3.out',
      });
    });
  }, [text, from, duration, stagger]);

  return (
    <span ref={elementRef} className={className} />
  );
}