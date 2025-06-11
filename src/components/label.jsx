// =============================================
// ===== Imports =====
import './../assets/style/style.css'

// =============================================
// ===== Function: icon label =====
export function icon_label({text, icon}) {
  return (
    <label className='icon-label'>
      <img src={icon} />
      {text}
    </label>
  );
}