use Task

create table LOGIN
(COD_LOGIN integer not null,
 DES_EMAIL varchar(200) not null,
 DES_SENHA varchar(100) not null,)
 ALTER TABLE LOGIN ADD PRIMARY KEY (COD_LOGIN)


 CREATE TABLE FREELANCER 
 (COD_FREELANCER INTEGER NOT NULL,
  DES_CPF VARCHAR(14) NOT NULL,
  ARQ_CURRICULO TEXT NULL)
  ALTER TABLE FREELANCER ADD PRIMARY KEY (COD_FREELANCER)


  CREATE TABLE EMPREGADOR 
  (COD_EMPREGADOR INTEGER NOT NULL,
   DES_CNPJ VARCHAR(18) NOT NULL,
   DES_AREA_DE_ATUA��O VARCHAR(MAX) NULL)
   ALTER TABLE EMPREGADOR ADD PRIMARY KEY (COD_EMPREGADOR)


   CREATE TABLE USUARIO
   (COD_USUARIO INTEGER NOT NULL,
    COD_EMPREGADOR INTEGER NULL,
	COD_LOGIN INTEGER NOT NULL,
	COD_FREELANCER INTEGER NULL,
	ARQ_FOTO IMAGE NULL,
	NUM_TELEFONE VARCHAR(15) NOT NULL,
	DES_EMAIL_CONTATO VARCHAR(200) NOT NULL,
	DTA_NASCIMENTO DATE NOT NULL,
	NOM_USUARIO VARCHAR(200) NOT NULL)
    ALTER TABLE USUARIO ADD PRIMARY KEY (COD_USUARIO)
	ALTER TABLE USUARIO ADD FOREIGN KEY (COD_EMPREGADOR) REFERENCES EMPREGADOR (COD_EMPREGADOR)
	ALTER TABLE USUARIO ADD FOREIGN KEY (COD_LOGIN) REFERENCES LOGIN (COD_LOGIN)
	ALTER TABLE USUARIO ADD FOREIGN KEY (COD_FREELANCER) REFERENCES FREELANCER (COD_FREELANCER)


	CREATE TABLE LOCALIZACAO
	(COD_USUARIO INTEGER NOT NULL,
	 NUM_CEP VARCHAR(11) NOT NULL,
	 DES_CIDADE VARCHAR(200) NOT NULL,
	 DES_BAIRRO VARCHAR(200) NOT NULL,
	 DES_ESTADO VARCHAR(200) NOT NULL,
	 DES_COMPLEMENTO VARCHAR(50) NOT NULL,
	 DES_LONGITUDE VARCHAR(30) NULL,
	 DES_LATITUDE VARCHAR(30) NULL)
     ALTER TABLE LOCALIZACAO ADD FOREIGN KEY (COD_USUARIO) REFERENCES USUARIO (COD_USUARIO)


	 CREATE TABLE PAGAMENTO
	 (COD_PAGAMENTO INTEGER NOT NULL,
	  COD_EMPREGADOR INTEGER NOT NULL,
	  COD_FREELANCER INTEGER NOT NULL,
	  HOR_TRABALHADAS TIME NOT NULL,
	  VAL_PAGO MONEY NOT NULL,
	  DTA_PAGAMENTO DATE NOT NULL)
	  ALTER TABLE PAGAMENTO ADD PRIMARY KEY (COD_PAGAMENTO)
	  ALTER TABLE PAGAMENTO ADD FOREIGN KEY (COD_EMPREGADOR) REFERENCES EMPREGADOR (COD_EMPREGADOR)
	  ALTER TABLE PAGAMENTO ADD FOREIGN KEY (COD_FREELANCER) REFERENCES FREELANCER (COD_FREELANCER)
	

	CREATE TABLE VAGA 
	(COD_VAGA INTEGER NOT NULL,
	 COD_EMPREGADOR INTEGER NOT NULL,
	 NOM_VAGA VARCHAR(200) NOT NULL,
	 DES_LOCAL VARCHAR(MAX) NOT NULL,
	 DTA_PERIODO DATE NULL,
	 NUM_VAGAS INTEGER NULL,
	 VAL_SALARIO FLOAT NULL,
	 DES_VAGA VARCHAR(MAX) NOT NULL,
	 DTA_ENTREVISTA DATE NULL)
	 ALTER TABLE VAGA ADD PRIMARY KEY (COD_VAGA)
	 ALTER TABLE VAGA ADD FOREIGN KEY (COD_EMPREGADOR) REFERENCES EMPREGADOR (COD_EMPREGADOR)


	 CREATE TABLE CANDIDATURAS
	 (COD_FREELANCER INTEGER NOT NULL,
	  COD_VAGA INTEGER NOT NULL,
	  ARQ_RECIBO TEXT NOT NULL,
	  DES_STATUS VARCHAR(50) NOT NULL,
	  DTA_ADMISSAO DATE NOT NULL,
	  DTA_DEMISSAO DATE NOT NULL,
	  DES_RESULTADO VARCHAR(50) NOT NULL)
	  ALTER TABLE CANDIDATURAS ADD FOREIGN KEY (COD_FREELANCER) REFERENCES FREELANCER (COD_FREELANCER)
	  ALTER TABLE CANDIDATURAS ADD FOREIGN KEY (COD_VAGA) REFERENCES VAGA (COD_VAGA)

	  SELECT * FROM CANDIDATURAS
	  SELECT * FROM EMPREGADOR
	  SELECT * FROM FREELANCER
	  SELECT * FROM LOCALIZACAO
	  SELECT * FROM LOGIN
	  SELECT * FROM PAGAMENTO
	  SELECT * FROM USUARIO
	  SELECT * FROM VAGA