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
