// =============================================
// ===== Imports =====
import React, { useState } from 'react';

import { Header } from './components/header';
import { Preview } from './components/preview';
import { Code } from './components/code';

const App = () => {
  const [html, setHtml] = useState(`<div class="shimmer-text" id="title-btn">
  click me: <span id="count">0</span>
</div>
`);

  const [css, setCss] = useState(`/* ===== body ===== */
body {
  background: white;
  color: white;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;

  /* ===== text effect ===== */
  .shimmer-text {
    font-size: 2rem;
    color: #316dec;
    background: linear-gradient(
    90deg,
    #316dec 40%,
    #e3ecff 50%,
    #316dec 60%
    );
    background-repeat: no-repeat;
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;

    animation: shimmerMove 2s linear infinite;
  }
}
  
/* ===== animation ===== */
@keyframes shimmerMove {
  from {background-position: 100% 0;}
  to {background-position: 0% 0;}
}`);

  const [js, setJs] = useState(`let count = 0;

const title = document.getElementById('title-btn');
const countDisplay = document.getElementById('count');

title.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
`);


  return (
    <div className='body'>
      <Header />
      <section className='code-section'>
        <Preview html={html} css={css} js={js} />
        <Code 
          html={html} 
          css={css} 
          js={js} 
          setHtml={setHtml} 
          setCss={setCss} 
          setJs={setJs} 
        />
      </section>
    </div>
  );
};

export default App;
