import './index.scss';
import axios from 'axios';

import Cabecalho from '../components/compCabecalho';
import Barra from '../components/compBarra';
import { useState, useEffect } from 'react';

export default function Home() {
    const [TipoVeiculo, setTipoVeiculo] = useState (' ');
    const [ModeloVeiculo, setModeloVeiculo] = useState (' ');
    const [MarcaVeiculo, setMarcaVeiculo] = useState(' ');
    const [AnoVeiculo, setAnoVeiculo] = useState(' ');
    const [PlacaVeiculo, setPlacaVeiculo] = useState(' ');
    const [Veiculos, setVeiculos] = useState ([]);

    function adicionarVeiculo(){
        let Veiculo = {
            tipo: TipoVeiculo,
            modelo: ModeloVeiculo,
            marca: MarcaVeiculo,
            ano: AnoVeiculo,
            placa: PlacaVeiculo
        }

        setVeiculos([Veiculo])
    }

    return(
        <div className='pagina-home'>
            <Cabecalho/>

            <main className='principarte'>
                <Barra/>

                <article className='s1'>
                    <p><strong>Área administrativa</strong></p>
                    <h1>Controle de Veiculos</h1>
                </article>

                <section className='s2'>
                    <h1>Novo veículo</h1>

                    <input type='text' placeholder='Tipo' value={TipoVeiculo} onChange={e => setTipoVeiculo(e.target.value)}></input>
                    <input type='text' placeholder='Modelo' value={ModeloVeiculo} onChange={e => setModeloVeiculo(e.target.value)}></input>
                    <input type='text' placeholder='Marca' value={MarcaVeiculo} onChange={e => setMarcaVeiculo(e.target.value)}></input>
                    <input type='text' placeholder='Ano' value={AnoVeiculo} onChange={e => setAnoVeiculo(e.target.value)}></input>
                    <input type='text' placeholder='Placa' value={PlacaVeiculo} onChange={e => setPlacaVeiculo(e.target.value)}></input>

                    <button className='salve' onClick={adicionarVeiculo}>Salvar</button>
                </section>

                <section className='s3'>
                    <h1>Lista de Veículos</h1>

                    <table>

                    </table>
                </section>
            </main>
        </div>
    )
}
