import './../assets/style/style.css'

export function icon_button({text, icon}) {
  return (
    <button className='icon-button'>
      <img src={icon} />
      {text}
    </button>
  );
}

export function blue_button({text, icon}) {
  return (
    <button className='blue-button'>
      <img src={icon} />
      {text}
    </button>
  )
}