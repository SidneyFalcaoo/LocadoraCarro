import './index.scss';
import Cabecalho from '../components/compCabecalho';
import Barra from '../components/compBarra';

export default function Home() {

    return(
        <div className='pagina-home'>
            <Cabecalho/>

            <main className='principarte'>
                <Barra/>

                <article className='s1'>
                    <p><strong>Área administrativa</strong></p>
                    <h1>Controle de Clientes</h1>
                </article>

                <section className='s2'>
                    <h1>Novo cliente</h1>
                </section>
            </main>
        </div>
    )
}
