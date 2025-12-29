import { useEffect, useRef, useCallback } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  createdAt: number;
}

const InteractiveBubbles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animationFrameRef = useRef<number>();
  const bubbleIdRef = useRef(0);
  const lastBubbleTimeRef = useRef(0);

  const createBubble = useCallback((x: number, y: number) => {
    const now = Date.now();
    // Limit bubble creation rate
    if (now - lastBubbleTimeRef.current < 50) return;
    lastBubbleTimeRef.current = now;

    // Limit total bubbles
    if (bubblesRef.current.length >= 15) {
      bubblesRef.current.shift();
    }

    const angle = Math.random() * Math.PI * 2;
    const speed = 0.5 + Math.random() * 1.5;
    
    bubblesRef.current.push({
      id: bubbleIdRef.current++,
      x,
      y,
      size: 4 + Math.random() * 8,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.5,
      opacity: 0.6,
      createdAt: now,
    });
  }, []);

  const animate = useCallback(() => {
    const now = Date.now();
    const container = containerRef.current;
    if (!container) return;

    // Update and filter bubbles
    bubblesRef.current = bubblesRef.current.filter(bubble => {
      const age = now - bubble.createdAt;
      return age < 500; // 500ms lifetime
    });

    // Update existing bubble elements
    bubblesRef.current.forEach(bubble => {
      const age = Date.now() - bubble.createdAt;
      const progress = age / 500;
      
      bubble.x += bubble.vx;
      bubble.y += bubble.vy;
      bubble.opacity = 0.6 * (1 - progress);
      
      const el = container.querySelector(`[data-bubble-id="${bubble.id}"]`) as HTMLElement;
      if (el) {
        el.style.transform = `translate(${bubble.x}px, ${bubble.y}px) scale(${1 - progress * 0.3})`;
        el.style.opacity = String(bubble.opacity);
      }
    });

    // Clean up old DOM elements
    const allBubbleEls = container.querySelectorAll('[data-bubble-id]');
    allBubbleEls.forEach(el => {
      const id = parseInt(el.getAttribute('data-bubble-id') || '0');
      if (!bubblesRef.current.find(b => b.id === id)) {
        el.remove();
      }
    });

    // Create new bubble elements
    bubblesRef.current.forEach(bubble => {
      if (!container.querySelector(`[data-bubble-id="${bubble.id}"]`)) {
        const el = document.createElement('div');
        el.setAttribute('data-bubble-id', String(bubble.id));
        el.className = 'fixed pointer-events-none rounded-full';
        el.style.cssText = `
          width: ${bubble.size}px;
          height: ${bubble.size}px;
          background: hsl(var(--primary) / 0.5);
          box-shadow: 0 0 ${bubble.size}px hsl(var(--primary) / 0.3);
          transform: translate(${bubble.x}px, ${bubble.y}px);
          opacity: ${bubble.opacity};
          transition: none;
          z-index: 9999;
        `;
        container.appendChild(el);
      }
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      
      // Check if hovering over interactive element
      const isInteractive = target.matches(
        'button, a, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), .interactive'
      ) || target.closest(
        'button, a, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), .interactive'
      );

      if (isInteractive) {
        createBubble(e.clientX, e.clientY);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      
      const isInteractive = target.matches(
        'button, a, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), .interactive'
      );

      if (isInteractive) {
        // Create a small cluster on enter
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            createBubble(
              e.clientX + (Math.random() - 0.5) * 20,
              e.clientY + (Math.random() - 0.5) * 20
            );
          }, i * 30);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [createBubble, animate]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default InteractiveBubbles;
