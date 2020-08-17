import React from 'react'
import styles from './styles.module.css';

function Input(props) {
  const style = {
    width: props.width
  }
  return (
    <div className={styles.inputGroup}>
      <label for={props.name}>
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

export {Input}
