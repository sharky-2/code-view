import React, { useState } from 'react';
import { Header } from './components/header';
import { Preview } from './components/preview';
import { Code } from './components/code';

const App = () => {
  const [html, setHtml] = useState(`<h1 class="shimmer-text">
  Code-View
</h1>`);
  const [css, setCss] = useState(`/* ===== body ===== */
body {
  background: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;

  /* ===== text effect ===== */
  .shimmer-text {
    font-size: 4rem;
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

    animation: shimmerMove 2s linear infinite;
  }
}
  
/* ===== animation ===== */
@keyframes shimmerMove {
  from {background-position: 100% 0;}
  to {background-position: 0% 0;}
}`);


  return (
    <div className='body'>
      <Header />
      <section className='code-section'>
        <Preview html={html} css={css} />
        <Code html={html} css={css} setHtml={setHtml} setCss={setCss} />
      </section>
    </div>
  );
};

export default App;
