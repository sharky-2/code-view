// =============================================
// ===== Function: preview =====
export function Preview({ html, css, js }) {

  // ===== show preview =====
  const createPreviewDocument = () => `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
  `;

  return (
    <section className="left-section" style={{ height: '100%', width: '100%' }}>
      <iframe
        title="preview"
        srcDoc={createPreviewDocument()}
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ backgroundColor: 'white' }}
      />
    </section>
  );
}
