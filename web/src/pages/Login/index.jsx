import React from 'react';
import { Input } from '../../components/Input/index';

import logo from '../../assets/logo.svg'
import styles from './styles.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>
      {/* <div className={styles.inputGroup}>
        <Input
          name="name"
          label="Seu Nome"
          mandatory={true}
          type="text"
          placeholder="Nome Completo"
          width="470px"
        />
          label="E-mail"
          mandatory={true}
          type="email"
          placeholder="seu@email.com"
          width="470px"
        />
      </div> */}
    </div>
  );
}
