// =============================================
// ===== Toggle Header =====
export function toggle(value) {
  const sections = {
    header_button: document.querySelector(".selected-button"),
    buttons: document.querySelector(".button-section"),
    code_editor: document.querySelector(".code-editor-section"),
    hero: document.querySelector(".hero"),
    info: document.querySelector(".info-section"),
  };

  if (value === "code") {
    sections.header_button.classList.remove("active")
    sections.buttons.classList.remove("active")
    sections.hero.classList.remove("active")
    sections.code_editor.classList.remove("active")
    sections.info.classList.remove("active")
  } else {
    sections.header_button.classList.add("active")
    sections.buttons.classList.add("active")
    sections.hero.classList.add("active")
    sections.code_editor.classList.add("active")
    sections.info.classList.add("active")
  }
}

// =============================================
// ===== Toggle Script =====
export function toggle_script(value) {
  const buttons = {
    html: document.querySelector(".html-button"),
    css: document.querySelector(".css-button"),
    js: document.querySelector(".js-button"),
  };

  Object.keys(buttons).forEach(key => {
    if (key === value) {
      buttons[key].classList.add("active");
    } else {
      buttons[key].classList.remove("active");
    }
  });
}
