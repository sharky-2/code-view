// =============================================
// ===== Toggle Header =====
let toggle_button = false;

export function toggle() {
  const selected_button = document.querySelector(".selected-button");
  if (toggle_button) {
    selected_button.style.transform = "translate(107%, -50%)";
    toggle_button = !toggle_button;
  } else {
    selected_button.style.transform = "translate(0%, -50%)";
    toggle_button = !toggle_button; 
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
