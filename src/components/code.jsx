import React, { useState, useRef, useEffect } from 'react';

export function Code({ html, css, setHtml, setCss }) {
  const [activeTab, setActiveTab] = useState('html');

  const [lineCount, setLineCount] = useState(1);

  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  function handleChange(e) {
    if (activeTab === 'html') {
      setHtml(e.target.value);
      setLineCount(e.target.value.split('\n').length);
    } else {
      setCss(e.target.value);
      setLineCount(e.target.value.split('\n').length);
    }
  }

  // Sync scroll of line numbers with textarea scroll
  function syncScroll(e) {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
  }

  const lines = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <section className="right-section">
      {/* Buttons omitted for brevity */}

      <div className="code-section" style={{ display: 'flex' }}>
        {/* Line numbers gutter */}
        <div
          ref={lineNumbersRef}
          className="line-numbers"
        >
          {lines.map((line) => (
            <div key={line} style={{ height: '1.5em' }}>
              {line}
            </div>
          ))}
        </div>

        {/* Textarea */}
        {activeTab === 'html' ? (
          <textarea
            ref={textareaRef}
            className="html-textarea"
            value={html}
            onChange={handleChange}
            onScroll={syncScroll}
            placeholder="Write your HTML here..."
          />
        ) : (
          <textarea
            ref={textareaRef}
            className="css-textarea"
            value={css}
            onChange={handleChange}
            onScroll={syncScroll}
            placeholder="Write your CSS here..."
          />
        )}
      </div>
    </section>
  );
}
