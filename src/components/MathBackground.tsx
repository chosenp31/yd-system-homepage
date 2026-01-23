'use client';

import { useEffect, useState } from 'react';

const codeSnippets = [
  'const solve = (x) => x * 2;',
  'function fibonacci(n) {',
  '  return n <= 1 ? n',
  '    : fib(n-1) + fib(n-2);',
  '}',
  'SELECT * FROM users',
  'WHERE active = true',
  'ORDER BY created_at;',
  'npm install react',
  'git commit -m "feat"',
  'docker build -t app .',
  'async function fetch() {',
  '  const res = await api();',
  '  return res.json();',
  '}',
  'interface User {',
  '  id: number;',
  '  name: string;',
  '}',
  'export default App;',
  'import { useState }',
  'from "react";',
  'const [state, set]',
  '  = useState(null);',
  'useEffect(() => {',
  '  // side effect',
  '}, [deps]);',
  'type Props = {',
  '  children: React.Node',
  '};',
  'CREATE TABLE orders (',
  '  id SERIAL PRIMARY,',
  '  total DECIMAL(10,2)',
  ');',
  'INSERT INTO logs',
  'VALUES (now(), data);',
];

const mathFormulas = [
  'f(x) = ax + b',
  'y = mx + c',
  'E = mc^2',
  'a^2 + b^2 = c^2',
  'x = (-b +- sqrt) / 2a',
  'sum(i=1 to n) = n(n+1)/2',
  'lim x->0 sin(x)/x = 1',
  'integral dx = x + C',
  'd/dx (x^n) = nx^(n-1)',
  'log(ab) = log a + log b',
  'sin^2 + cos^2 = 1',
  'e^(i*pi) + 1 = 0',
];

interface FloatingItem {
  id: number;
  content: string;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  speed: number;
}

export default function MathBackground() {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const allContent = [...codeSnippets, ...mathFormulas];
    const initialItems: FloatingItem[] = [];

    for (let i = 0; i < 30; i++) {
      initialItems.push({
        id: i,
        content: allContent[Math.floor(Math.random() * allContent.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.03 + Math.random() * 0.05,
        scale: 0.7 + Math.random() * 0.5,
        speed: 0.02 + Math.random() * 0.03,
      });
    }

    setItems(initialItems);

    const interval = setInterval(() => {
      setItems(prev => prev.map(item => ({
        ...item,
        y: item.y - item.speed,
        x: item.x + (Math.random() - 0.5) * 0.1,
        ...(item.y < -10 ? {
          y: 110,
          x: Math.random() * 100,
          content: allContent[Math.floor(Math.random() * allContent.length)],
        } : {})
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

      {/* Floating items */}
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute font-mono text-[var(--primary)] whitespace-nowrap select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            transform: `scale(${item.scale})`,
            fontSize: '0.75rem',
          }}
        >
          {item.content}
        </div>
      ))}

      {/* Additional gradient effects */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-[150px] opacity-5" />
    </div>
  );
}
