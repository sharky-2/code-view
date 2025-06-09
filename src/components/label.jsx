// =============================================
// ===== Css =====
import './../assets/style/style.css'

export function icon_label({text, icon}) {
  return (
    <label className='icon-label'>
      <img src={icon} />
      {text}
    </label>
  );
}