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
  const html_button = document.querySelector(".html-button")
  const css_button = document.querySelector(".css-button")
  if (value === "html") {
    html_button.classList.add("active")
    css_button.classList.remove("active")
  } else {
    css_button.classList.add("active")
    html_button.classList.remove("active")
  }
}
