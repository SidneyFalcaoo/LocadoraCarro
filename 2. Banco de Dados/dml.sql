select * from tb_cliente;
select * from tb_tipo_veiculo where id_tipo_veiculo = ?;
select * from tb_veiculo;


select ve.id_veiculo			as id,
       tv.id_tipo_veiculo		as idTipoVeiculo,
       tv.ds_tipo				as tipo,
       ve.ds_modelo				as modelo,
       ve.ds_marca				as marca,
       ve.nr_ano				as ano,
       ve.ds_placa				as placa
  from tb_veiculo				as ve
  inner join tb_tipo_veiculo	as tv  ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
  order 
     by id_veiculo;



insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh)
				values (?, ?, ?, ?, ?);

insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values (?, ?, ?, ?, ?);
                
insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values (?, ?, ?, ?, ?);

delete from tb_cliente where id_cliente = ?;

