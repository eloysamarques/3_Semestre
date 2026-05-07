import { useState } from "react";
import "./App.css"
import Saudacao from "./assets/componentes/exercicio01/saudacao";
import Produto from "./assets/componentes/exercicio02/produto";
import Perfil from "./assets/componentes/exercicio03/perfil";
import Botao from "./assets/componentes/exercicio04/botao";
import Filme from "./assets/componentes/exercicio05/filme";
import Aluno from "./assets/componentes/exercicio06/aluno";
import Card from "./assets/componentes/exercicio07/card";
import Contato from "./assets/componentes/exercicio08/contato";
import Jogos from "./assets/componentes/exercicio09/jogos";
import ItemLoja from "./assets/componentes/exercicio10/itemLoja";

import alunoImagem from "./assets/aluno-imagem.jpg";
import alunoImagem3 from "./assets/aluno-imagem3.jpg";
import mine from "./assets/minecraft.png";
import free from "./assets/free-fire.jpg";
import homem from "./assets/homem-aranha-play.jpg";

const App = () => {
  return (
    <>
      <h1>Exercício 1 - Saudação</h1>
      <Saudacao nome="Elo" />
      <Saudacao nome="Maria" />
      <Saudacao nome="Guilherme" />

      <h1>Exercício 2 - Produtos</h1>
      <Produto 
        nome="Notebook" 
        preco={2500.00} 
        descricao="Notebook de alta performance para programação e design gráfico."
      />
      <Produto 
        nome="Mouse Gamer" 
        preco={150.50} 
        descricao="Mouse com precisão de 16000 DPI e 8 botões programáveis."
      />
      <Produto 
        nome="Teclado Mecânico" 
        preco={350.00} 
        descricao="Teclado mecânico RGB com switches blue para máxima resposta."
      />

      <h1>Exercício 3 - Perfis</h1>
        <Perfil
          nome="João Silva"
          idade={28}
          profissao="Desenvolvedor Frontend"
        />
        <Perfil
          nome="Maria Santos"
          idade={32}
          profissao="Designer UX/UI"
        />
        <Perfil
          nome="Carlos Oliveira"
          idade={25}
          profissao="Analista de Dados"
        />

      <h1>Exercício 4 - Botões</h1>
      <Botao cor = "#4CAF50" texto="Botão Verde" />

      <h1>Exercício 5 - Filmes</h1>
      <Filme 
        titulo="Carros"
        ano={2006}
        genero="Infantil/Comédia"
        nota={10.0}
      />
      <Filme 
        titulo="Toy Story"
        ano={1995}
        genero="Infantil/Comédia"
        nota={8.7}
      />
      <Filme 
        titulo="Para todos os garotos que já amei"
        ano={2018}
        genero="Infantil/Comédia"
        nota={9.0}
      />

      <h1>Exercício 6 - Alunos</h1>
      <Aluno 
        nome="Ana Clara"
        curso="Engenharia de Software"
        imagem={alunoImagem}
      />
      <Aluno 
        nome="Carla Oliveira"
        curso="Sistemas de Informação"
        imagem={alunoImagem3}
      />

      <h1>Exercício 7 - Cards</h1>
      <Card>
        <h2>Titulo do Card</h2>
        <p>Este é o conteúdo do Card 1. Ele pode conter qualquer elemento React.</p>
      </Card>

      <h1>Exercício 8 - Contatos</h1>
      <Contato 
        nome="Lucas Pereira"
        email="lucas.pereira@example.com"
        telefone="(11) 98765-4321"
      />
      <Contato 
        nome="Mariana Costa"
        email="mariana.costa@example.com"
        telefone="(21) 91234-5678"
      />
      <Contato 
        nome="Rafael Souza"
        email="rafael.souza@example.com"
        telefone="(31) 99876-5432"
      />
      <Contato
        nome="Fernanda Lima"
        email="fernanda.lima@example.com"
        telefone="(41) 98765-4321"
      />
      <Contato
        nome="Gabriel Alves"
        email="gabriel.alves@example.com"
        telefone="(51) 98765-4321"
      />

      <h1>Exercício 9 - Jogos</h1>
      <Jogos 
        nome="Minecraft"
        plataforma="PC"
        preco={119.99}
        imagem={mine}
      />
      <Jogos 
        nome="Homem-Aranha: Miles Morales"
        plataforma="PlayStation, PC"
        preco={199.99}
        imagem={homem}
      />
      <Jogos 
        nome="Free Fire"
        plataforma="PC, Mobile"
        preco={249.99}
        imagem={free}
      /> 

      <h1>Exercicio 10 - Loja</h1>

      <ItemLoja
        nome="iPhone 17 Pro Max"
        preco="12,500"
        categoria="Eletrônicos"
        estoque={150}
      />

      <ItemLoja
        nome="MacBook Air M4"
        preco="7,246"
        categoria="Eletrônicos"
        estoque={50}
      />
      <ItemLoja
        nome="Apple Watch Series 10"
        preco="4,999"
        categoria="Eletrônicos"
        estoque={0}
      />

    </>
  );
}

export default App;