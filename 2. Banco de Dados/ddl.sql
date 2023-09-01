create database locadoraDB;
use locadoraDB;

create table tb_cliente (
	id_cliente			int primary key auto_increment,
    nm_cliente			varchar(200) not null,
    ds_cpf				varchar(15) not null,
    ds_telefone			varchar(200) not null,
    ds_email			varchar(200) not null,
    ds_cnh				varchar(50) not null
);

create table tb_tipo_veiculo (
	id_tipo_veiculo			int primary key auto_increment,
    ds_tipo					varchar(200) not null
);

create table tb_veiculo (
	id_veiculo				int primary key auto_increment,
    id_tipo_veiculo			int not null,
    ds_modelo				varchar(200) not null,
    ds_marca				varchar(200) not null,
    nr_ano					int not null,
    ds_placa				varchar(50) not null,
    foreign key (id_tipo_veiculo) references tb_tipo_veiculo (id_tipo_veiculo)
);