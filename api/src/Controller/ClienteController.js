import { inserir, consultar, alterar, deletar } from "../Repository/ClienteRepository.js";

import { Router } from "express";
const endPoints = Router();

endPoints.post('/cliente', async (req, resp) => {
    try {
        let cliente = req.body;
        let r = await inserir(cliente);

        resp.send(r);
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