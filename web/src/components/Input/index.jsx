import React from 'react'
import styles from './styles.module.css';

function Input(props) {
  const style = {
    width: props.width
  };

  const Iconxuxuxu = props.iconPrefix
  return (
    <div className={styles.inputGroup}>
      <Iconxuxuxu />
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

export {Input}
