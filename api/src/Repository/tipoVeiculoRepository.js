import conexao from './Connection.js';


export async function buscarTipoPorId(id) {
  let comando = 'select * from tb_tipo_veiculo where id_tipo_veiculo = ?';
  let [dados] = await conexao.query(comando, [id]);
  return dados;
}

export async function listarTipos() {
  let comando = `
      select id_tipo_veiculo      id,
             ds_tipo              tipo
        from tb_tipo_veiculo`;
  
  let [dados] = await conexao.query(comando);
  return dados;
}