import conexao from './Connection.js'

export async function Inserir (cliente) {
    let comando = `insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh) values (?, ?, ?, ?, ?)`;

    const [clientes] = await conexao.query(comando, [cliente.cliente, cliente.cpf, cliente.telefone, cliente.email, cliente.cnh]);
    cliente.id = clientes.insertId;
    return cliente;
}

export async function ListarPorNome(nome) {
    let sql = `select id_cliente, nm_cliente, ds_email, ds_cpf, ds_telefone, ds_cnh from tb_cliente where nm_cliente like ?`

    let [dados] = await conexao.query(sql, ['%'+nome+'%']);
    return dados;
}

export async function Alterar(id, cliente) {
    const comando = `update tb_cliente set nm_cliente = ?, ds_email = ?, ds_cpf = ?, ds_telefone = ?, ds_cnh = ? where id_cliente = ? `;

    const [info] = await conexao.query(comando, 
        [
            cliente.cliente, 
            cliente.email, 
            cliente.cpf, 
            cliente.telefone, 
            cliente.cnh,
            id
        ]);

    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}

export async function Deletar(id) {
    let comando = ` delete from tb_cliente where id_cliente = ? `;

    let [info] = await conexao.query(comando, [id]);
    let linhasAfetadas = info.affectedRows;
    return linhasAfetadas;
}