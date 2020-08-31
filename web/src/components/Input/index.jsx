import React from 'react'
import styles from './styles.module.css';

import * as FiIcons from 'react-icons/fi';

function Input(props) {
  const style = {
    width: props.width
  };

  const icon = props.iconPrefix;

  console.log(icon);

  const FiIcon = FiIcons[icon];
  return (
    <div className={styles.inputGroup}>
      <FiIcon />
      <label htmlFor={props.name}>
        {!props.label ? null : props.label}
        {props.mandatory ? <span>*</span> : null}
      </label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        style={style}
      />
    </div>
  );
}

export { Input }
