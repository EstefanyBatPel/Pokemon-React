import '../../sass/Button.scss' 

const Button = (props) => {
  return (
    <div className='button_box'>
        <button className="button">{props.icon}</button>
    </div>
  )
}

export {Button}