import React, { useState } from 'react';
import { Header } from './components/header';
import { Preview } from './components/preview';
import { Code } from './components/code';

const App = () => {
  const [html, setHtml] = useState('<h1>Hello, World!</h1>');
  const [css, setCss] = useState('h1 { color: #ccc; }');

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
