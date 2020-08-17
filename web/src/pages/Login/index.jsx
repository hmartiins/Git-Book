import React from 'react';
import {Input} from '../../components/Input/index'

export default function Login() {
  return (
    <>
      <Input
        name="name"
        label="Seu Nome"
        mandatory={true}
        type="text"
        placeholder="Nome Completo"
        width="470px"
      />
      <Input 
        name="email"
        label="E-mail"
        mandatory={true}
        type="email"
        placeholder="seu@email.com"
        width="470px"
      />
    </>
  );
}
