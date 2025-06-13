// =============================================
// ===== Toggle Header =====
export function toggle(value) {
  const sections = [
    document.querySelector(".selected-button"),
    document.querySelector(".button-section"),
    document.querySelector(".code-editor-section"),
    document.querySelector(".hero"),
    document.querySelector(".info-section"),
  ]

  const method = value === "code" ? "remove" : "add"

  sections.forEach(section => {
    if (section) {
      section.classList[method]("active")
    }
  })
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

// =============================================
// ===== Copy Code =====
export function copy_code(textarea) {
  navigator.clipboard.writeText(textarea.value);
}