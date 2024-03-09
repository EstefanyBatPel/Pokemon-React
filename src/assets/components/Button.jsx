import '../../sass/Button.scss' 

const Button = (props) => {
  return (
    <div className='button_box'>
        <button className="button">{props.text}</button>
    </div>
  )
}

export {Button}