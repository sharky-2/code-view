// =============================================
// ===== Imports =====
import './../assets/style/style.css'

// =============================================
// ===== Function: icon button =====
export function icon_button({text, icon, onClick}) {
  return (
    <button className='icon-button'  onClick={onClick}>
      <img src={icon} />
      {text}
    </button>
  );
}

// =============================================
// ===== Function: blue button =====
export function blue_button({text, icon}) {
  return (
    <button className='blue-button'>
      <img src={icon} />
      {text}
    </button>
  )
}