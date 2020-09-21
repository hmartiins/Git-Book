import React from 'react';
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';

import logo from '../../assets/logo.svg';
import imageLogin from '../../assets/imageLogin.jpeg';

import styles from './styles.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>
      <main className={styles.main}>
        <div className={styles.containerImage}>
          <img src={imageLogin} alt="" />
        </div>
        <form>
          <h1>Um total de X clientes atendidos pela loja</h1>
          <p>
            A melhor e mais diversificada livraria, 100% online e confiável. A Git’s Books oferece
            diversidade para você cliente, escolha entre ler online ou fisicamente...
          </p>
          <Input name="email" type="email" placeholder="Email" width="368px" />
          <Input name="password" type="password" placeholder="Senha" width="368px" />
          <div className={styles.btnGroup}>
            <Button
              text="Entrar"
              type="submit"
              width="175px"
              height="50px"
              styleButton="block"
              fontSize="18px"
            />
            <Button text="Cadastrar-se" type="submit" width="175px" height="50px" fontSize="18px" />
          </div>
        </form>
      </main>
    </div>
  );
}
