import conexao from './Connection.js'

export async function Inserir (cliente) {
    let comando = `insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh) values (?, ?, ?, ?, ?)`;

    const [clientes] = await conexao.query(comando, 
        [
            cliente.cliente,
            cliente.cpf,
            cliente.telefone,
            cliente.email,
            cliente.cnh
        ]);
        
    cliente.id = clientes.insertId;
    return cliente;
}
