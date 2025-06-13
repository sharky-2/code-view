// =============================================
// ===== Imports =====
import React, { useState, useRef, useEffect } from 'react';

import * as labels from './../components/label';
import * as button from './../components/buttons';

import terminalIcon from './../assets/icons/terminal.png';
import terminalCopy from './../assets/icons/copy.png';

import * as scripts from './../scripts/script';

// =============================================
// ===== Function: code editor =====
export function Code({ html, css, js, setHtml, setCss, setJs }) {

  // ===== fill textarea =====
  const [activeTab, setActiveTab] = useState('html');
  const [lineCount, setLineCount] = useState(1);

  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  // ===== change between projects =====
  function handleChange(e) {
    const value = e.target.value;

    if (activeTab === 'html') {
      setHtml(value);
    } else if (activeTab === 'css') {
      setCss(value);
    } else {
      setJs(value);
    }

    setLineCount(value.split('\n').length);
  }

  useEffect(() => {
    const currentValue =
      (activeTab === 'html'
        ? html
        : activeTab === 'css'
        ? css
        : js) || '';

    setLineCount(currentValue.split('\n').length);
  }, [html, css, js, activeTab]);

  function syncScroll(e) {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();

      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const value =
        (activeTab === 'html'
          ? html
          : activeTab === 'css'
          ? css
          : js) || '';

      const newValue = value.substring(0, start) + '  ' + value.substring(end);

      if (activeTab === 'html') {
        setHtml(newValue);
      } else if (activeTab === 'css') {
        setCss(newValue);
      } else {
        setJs(newValue);
      }

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  }

  // ===== line =====
  const lines = Array.from({ length: lineCount }, (_, i) => i + 1);
  const getCurrentValue = () =>
    (activeTab === 'html' ? html : activeTab === 'css' ? css : js) || '';

  return (
    <section className="right-section">

      {/* ===== text section ===== */}
      <div className="hero">
        <labels.icon_label text="Download program" icon={terminalIcon} />
        <div className="open-source">gh repo clone sharky-2/code-view</div>

        <nav className="button-section">
          <button
            className={`html-button ${activeTab === 'html' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('html');
              scripts.toggle_script('html');
            }}
          >project.html</button>

          <button
            className={`css-button ${activeTab === 'css' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('css');
              scripts.toggle_script('css');
            }}
          >style.css</button>

          <button
            className={`js-button ${activeTab === 'js' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('js');
              scripts.toggle_script('js');
            }}
          >script.js</button>
        </nav>
      </div>

      {/* ===== code editor section ===== */}
      <div className="code-editor-section">
        <div ref={lineNumbersRef} className="line-numbers">
          {lines.map((line) => (
            <div key={line} style={{ height: '1.2em' }}>
              {line}
            </div>
          ))}
        </div>

        <div className="copy-code">
          <button.icon_button icon={terminalCopy} text={"copy"} 
            onClick={() => {
              const textarea = document.querySelector(`.${activeTab}-textarea`);
              scripts.copy_code(textarea);
            }} 
          />
        </div>

        <textarea
          ref={textareaRef}
          className={`${activeTab}-textarea`}
          value={getCurrentValue()}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onScroll={syncScroll}
          placeholder={`Write your ${activeTab.toUpperCase()} here...`}
        />
      </div>

      {/* ===== info section ===== */}
      <div className="info-section">
          <labels>Demo version — exciting features coming soon!</labels>
          <labels>This is just the beginning — stay tuned for more updates!</labels>
          <labels>New features on the way — keep an eye out!</labels>
      </div>
    </section>
  );
}
