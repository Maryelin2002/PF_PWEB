-- CREATE DATABASE AplicacionDoctores;
USE AplicacionDoctores;

CREATE TABLE DOCTORES
(
ID_DOCTOR INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR(100) NOT NULL,
APELLIDO VARCHAR(100) NOT NULL,
EMAIL VARCHAR(50) NOT NULL,
CLAVE VARCHAR(50) NOT NULL
);

CREATE TABLE PACIENTES
(
ID_PACIENTE INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
CEDULA VARCHAR(100) NOT NULL,
NOMBRE VARCHAR(100) NOT NULL,
APELLIDO VARCHAR(100) NOT NULL,
TIPO_SANGRE VARCHAR(100) NOT NULL,
GENERO VARCHAR(100) NOT NULL,
FECHA_NACIMIENTO DATE NOT NULL,
ALERGIAS VARCHAR(100) NOT NULL,
FOTO LONGBLOB,
ID_DOCTOR INT NOT NULL,
FOREIGN KEY(ID_DOCTOR) REFERENCES DOCTORES(ID_DOCTOR)
);

CREATE TABLE CONSULTAS
(
ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ID_PACIENTE INT NOT NULL,
ID_DOCTOR INT NOT NULL,
FECHA DATE NOT NULL,
MOTIVO VARCHAR(200) NOT NULL,
SEGURO VARCHAR(100) NOT NULL,
MONTO INT NOT NULL,
DIAGNOSTICO VARCHAR(100) NOT NULL,
NOTA VARCHAR(100),
EVIDENCIA LONGBLOB,
FOREIGN KEY(ID_PACIENTE) REFERENCES PACIENTES(ID_PACIENTE),
FOREIGN KEY(ID_DOCTOR) REFERENCES DOCTORES(ID_DOCTOR)
);

/*
DROP TABLE CONSULTAS;
DROP TABLE PACIENTES;
DROP TABLE DOCTORES;
*/