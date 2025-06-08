export function Preview({ html, css }) {
  const createPreviewDocument = () => `
    <html>
      <head><style>${css}</style></head>
      <body>${html}</body>
    </html>
  `;

  return (
    <section className="left-section">
      <iframe
        title="preview"
        srcDoc={createPreviewDocument()}
      />
    </section>
  );
}
