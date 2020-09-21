import React from 'react';
import styles from './styles.module.css';

function Button(props) {
  const style = {
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
  };

  if (props.styleButton === 'block') {
    return (
      <button className={styles.btnBlock} type={props.type} style={style}>
        {!props.text ? null : props.text}
      </button>
    );
  } else {
    return (
      <button className={styles.btnOutline} type={props.type} style={style}>
        {!props.text ? null : props.text}
      </button>
    );
  }
}

export { Button };
