import React from 'react';
import Input from '../../components/Input/index'

export default function Login() {
  return (
    <>
      <Input
        name="name"
        label="Seu Nome"
        mandatory={true}
        type="text"
        placeholder="Nome Completo"
      />
      <Input
        name="email"
        label="E-mail"
        mandatory={true}
        type="email"
        placeholder="seu@email.com"
      />
      <Input
        name="senha"
        label="Senha"
        mandatory={true}
        type="password"
        placeholder="pelo menos 6 caracteres"
      />
      <Input
        name="confirmsenha"
        label="Insira a senha novamente"
        mandatory={true}
        type="password"
        placeholder="confirme sua senha"
      />

    </>
  );
}
