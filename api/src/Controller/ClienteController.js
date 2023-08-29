import { Inserir } from "../Repository/ClienteRepository.js";

import { Router } from "express";
const endPoints = Router();

endPoints.post('/cliente', async (req, resp) => {
    try {

        let clienteInserir = req.body;
        let cliente = await Inserir(clienteInserir);

        resp.send(cliente);
    }
    catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }   
});



export default endPoints;