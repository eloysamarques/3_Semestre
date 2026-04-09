--ABRIR O SSMS

--Criar um base de dados FilmesBD
CREATE DATABASE Filmes;
GO

--Selecionar a base de dados
USE Filmes;
GO

--Criar tabelas (Genero, Filme, Usuario)
CREATE TABLE Genero(
	IdGenero VARCHAR(40)    PRIMARY KEY,
	Nome     VARCHAR(100)   NOT NULL
);

CREATE TABLE Filmes(
	IdFilmes VARCHAR(40)    PRIMARY KEY,
	Imagem VARCHAR(100),
	Titulo VARCHAR(100) NOT NULL,
	IdGenero VARCHAR(40) FOREIGN KEY REFERENCES Genero (IdGenero)
);

CREATE TABLE Usuario(
	IdUsuario VARCHAR(40) PRIMARY KEY,
	Nome VARCHAR(100) NOT NULL,
	Senha VARCHAR(100) NOT NULL
);

ALTER TABLE Usuario
ADD Email VARCHAR(256)

ALTER TABLE Usuario
ALTER COLUMN Email VARCHAR(256) NOT NULL;

ALTER TABLE Usuario
ADD CONSTRAINT UQ_Usuario_Email UNIQUE (Email);

SELECT * FROM Usuario;