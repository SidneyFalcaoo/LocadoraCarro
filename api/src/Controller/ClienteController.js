import { inserir, consultar, alterar, deletar } from "../Repository/ClienteRepository.js";

import { Router } from "express";
const endPoints = Router();

endPoints.post('/cliente', async (req, resp) => {
    try {
        let cliente = req.body;

        if (!cliente.nome) 
            throw new Error('Nome Obrigatório');

        if (!cliente.cpf || isNaN(cliente.cpf))
            throw new Error ('cpf deve ser um numero');


        
        let Resposta1 = await consultar(cliente.nome);
        if (Resposta1.length == 0)
        throw new Error('Tipo invalido')

        let Resposta2 = await consultar(cliente.cpf || cliente.telefone || cliente.email || cliente.cnh) 
        if (Resposta2.length > 0)
        throw new Error('Dados já cadastrados! ');

        let Resposta = await inserir(cliente);
        resp.send(Resposta);
        
    }
    catch (err) {
        resp.status(500).send({ erro: err.message });
    }   
});

endPoints.get('/cliente/busca', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let x = await consultar(nome);

        resp.send(x);
    }
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
});

endPoints.put('/cliente/:id', async (req, resp) => {
    try {

    const id = req.params.id;
    const cliente = req.body;

    const resposta = await alterar(id, cliente);
    resp.send();
    }
    catch (err) {
    resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
})

endPoints.delete('/cliente/:id' , async (req, resp) => {
    try {
        let id = req.params.id;
        let x = await deletar(id);
        resp.send();
    }
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro! '});
    }
})

export default endPoints;