'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#4f7cff',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#3a5fcc',
    lineColor: '#7ba3ff',
    secondaryColor: '#8b5cf6',
    tertiaryColor: '#12122a',
    background: '#0a0a1a',
    mainBkg: '#12122a',
    secondBkg: '#1a1a3e',
    textColor: '#ffffff',
    fontSize: '14px',
  },
});

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      containerRef.current.innerHTML = '';

      mermaid.render(id, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
        if (containerRef.current) {
          containerRef.current.innerHTML = `<pre class="text-red-400">${chart}</pre>`;
        }
      });
    }
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="my-8 flex justify-center overflow-x-auto"
    />
  );
}
