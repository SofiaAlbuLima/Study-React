interface ButtonProp {
    text: string;
    color?: 'primary' | 'secondary' | 'danger'; //"?" set the prop as optional and de or operator set the options for the color
    onClick: () => void;
}

const Button = ({text, onClick, color = "primary"}: ButtonProp) => { //color primary as default
  return (
    <button 
        className={'btn btn-' + color}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default Button