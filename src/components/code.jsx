// =============================================
// ===== Import =====
import React, { useState, useRef, useEffect } from 'react';

// ===== Modules =====
import * as labels from './../components/label'

// ===== Scripts =====
import * as scripts from './../scripts/script'

// ===== Icons =====
import codeIcon from './../assets/icons/code.png'

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

    useEffect(() => {
        const currentValue = activeTab === 'html' ? html : css;
        setLineCount(currentValue.split('\n').length);
    }, [html, css, activeTab]);


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

            const value = activeTab === 'html' ? html : css;
            const newValue = value.substring(0, start) + '  ' + value.substring(end);

            if (activeTab === 'html') {
            setHtml(newValue);
            } else {
            setCss(newValue);
            }

            setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = start + 2;
            }, 0);
        }
    }

    const lines = Array.from({ length: lineCount }, (_, i) => i + 1);

    return (
        <section className="right-section">
            <div className="hero">
            {/* title */}
            <labels.icon_label text={"code"} icon={codeIcon} />

                {/* buttons */}
                <nav className="button-section">
                    <button
                    className="html-button active"
                    onClick={() => {
                        setActiveTab('html');
                        scripts.toggle_script("html");
                    }}
                    >
                    project.html
                    </button>
                    <button
                    className="css-button"
                    onClick={() => {
                        setActiveTab('css');
                        scripts.toggle_script("css");
                    }}
                    >
                    style.css
                    </button>
                </nav>
            </div>

            <div className="code-editor-section">
                {/* Line numbers gutter */}
                <div ref={lineNumbersRef} className="line-numbers">
                    {lines.map((line) => (
                    <div key={line} style={{ height: '1.2em' }}>
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
                    onKeyDown={handleKeyDown}
                    onScroll={syncScroll}
                    placeholder="Write your HTML here..."
                    />
                ) : (
                    <textarea
                    ref={textareaRef}
                    className="css-textarea"
                    value={css}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onScroll={syncScroll}
                    placeholder="Write your CSS here..."
                    />
                )}
            </div>
        </section>
    );
}
