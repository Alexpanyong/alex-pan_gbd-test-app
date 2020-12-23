import React from 'react';
import './Button.scss';

interface Props {
  text: string,
  primary?: boolean
}

const Button = (props: Props) => {
  const { text, primary } = props;
  return (
    <div className={primary ? "button primary" : "button"} data-testid="button">
      {text}
    </div>
  )
};

export default Button;
