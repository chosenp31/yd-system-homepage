'use client';

import { useEffect, useState } from 'react';
import Mermaid from './Mermaid';

interface BlogContentProps {
  htmlContent: string;
}

export default function BlogContent({ htmlContent }: BlogContentProps) {
  const [parts, setParts] = useState<{ type: 'html' | 'mermaid'; content: string }[]>([]);

  useEffect(() => {
    // Parse HTML to find mermaid code blocks
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    const result: { type: 'html' | 'mermaid'; content: string }[] = [];
    let currentHtml = '';

    // Walk through all nodes
    const walkNodes = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;

        // Check if this is a code block with mermaid language
        if (element.tagName === 'PRE') {
          const code = element.querySelector('code');
          if (code && code.className.includes('language-mermaid')) {
            // Save current HTML
            if (currentHtml) {
              result.push({ type: 'html', content: currentHtml });
              currentHtml = '';
            }
            // Add mermaid diagram
            result.push({ type: 'mermaid', content: code.textContent || '' });
            return;
          }
        }

        // Check for regular code blocks that might be mermaid
        if (element.tagName === 'CODE' && element.parentElement?.tagName !== 'PRE') {
          currentHtml += element.outerHTML;
          return;
        }
      }

      if (node.nodeType === Node.TEXT_NODE) {
        currentHtml += node.textContent;
        return;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const tagName = element.tagName.toLowerCase();
        const attributes = Array.from(element.attributes)
          .map(attr => `${attr.name}="${attr.value}"`)
          .join(' ');

        currentHtml += `<${tagName}${attributes ? ' ' + attributes : ''}>`;

        Array.from(node.childNodes).forEach(child => walkNodes(child));

        currentHtml += `</${tagName}>`;
        return;
      }
    };

    // Simple regex-based approach for mermaid blocks
    const mermaidRegex = /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g;
    let lastIndex = 0;
    let match;

    const newParts: { type: 'html' | 'mermaid'; content: string }[] = [];

    while ((match = mermaidRegex.exec(htmlContent)) !== null) {
      // Add HTML before the mermaid block
      if (match.index > lastIndex) {
        newParts.push({ type: 'html', content: htmlContent.slice(lastIndex, match.index) });
      }
      // Add mermaid block
      newParts.push({ type: 'mermaid', content: decodeHtmlEntities(match[1]) });
      lastIndex = match.index + match[0].length;
    }

    // Add remaining HTML
    if (lastIndex < htmlContent.length) {
      newParts.push({ type: 'html', content: htmlContent.slice(lastIndex) });
    }

    // If no mermaid blocks found, just use the whole content
    if (newParts.length === 0) {
      newParts.push({ type: 'html', content: htmlContent });
    }

    setParts(newParts);
  }, [htmlContent]);

  return (
    <div className="prose-dark">
      {parts.map((part, index) => (
        part.type === 'mermaid' ? (
          <Mermaid key={index} chart={part.content} />
        ) : (
          <div key={index} dangerouslySetInnerHTML={{ __html: part.content }} />
        )
      ))}
    </div>
  );
}

function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}
