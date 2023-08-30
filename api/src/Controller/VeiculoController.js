import { inserir, consultar, alterar, deletar } from "../Repository/VeiculoRepository.js";

import { Router } from "express";
const endPoints = Router();

endPoints.post('/veiculo', async (req, resp) => {
    try {
        let veiculo = req.body;

        if (!veiculo.modelo)
        throw new Error('Modelo obrigatório');
  
      if (!veiculo.ano || isNaN(veiculo.ano))
        throw new Error('Ano deve ser um número')
  
      
      
      let r1 = await consultar(veiculo.placa);
      if (r1.length > 0)
        throw new Error('Placa já cadastrada!');
  
      
      let r2 = await buscarTipoPorId(veiculo.idTipoVeiculo);
      if (r2.length == 0)
        throw new Error('Tipo inválido');
  
        let Resposta = await inserir(veiculo);
        resp.send(Resposta);
        
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    } 
});

endPoints.get('/veiculo/busca', async (req, resp) => {
    try {
        let modelo = req.query.modelo;
        let x = await consultar (modelo);

        resp.send(x);
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
});

endPoints.put('/veiculo/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let carro = req.body;

        let resposta = await alterar(id, carro);
        resp.send();
    } catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
});

endPoints.delete('/veiculo/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let x = await deletar(id);

        resp.send();
    }  catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
    }
})

export default endPoints;