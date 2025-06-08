import React, { useState } from 'react';

// =============================================
// ===== Modules =====
import * as button from './buttons'
import * as labels from './label'

// ===== Images =====
import codeIcon from './../assets/icons/code.png';

// ===== Scripts =====
import * as scripts from './../scripts/script'

export function Code({ html, css, setHtml, setCss }) {
    const [activeTab, setActiveTab] = useState('html');

    return (
        <section className="right-section">

            <labels.icon_label text={"code"} icon={codeIcon} />

            <nav className="button-section">
                <button.icon_button text="HTML" icon={codeIcon} onClick={() => setActiveTab('html')}  />
                
                <button
                    className={`px-4 py-2 rounded ${
                    activeTab === 'css' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => setActiveTab('css')}
                >
                    CSS
                </button>
            </nav>

            {activeTab === 'html' ? (
            <textarea
                className=""
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                placeholder="Write your HTML here..."
            />
            ) : (
            <textarea
                className=""
                value={css}
                onChange={(e) => setCss(e.target.value)}
                placeholder="Write your CSS here..."
            />
            )}
        </section>
    );
}
