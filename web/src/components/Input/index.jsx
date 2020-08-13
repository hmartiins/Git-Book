import React from 'react'
import styles from './styles.module.css';

export default function Footer(props) {
    return (
      <div className={styles.inputGroup}>
        <label for={props.name}>
          {props.label}
          {props.mandatory ? <span>*</span> : null}
        </label>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    );
}