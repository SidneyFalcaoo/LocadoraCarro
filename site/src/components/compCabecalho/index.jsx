import './index.scss';

export default function Cabecalho() {
    

    return(
        <div className='comp-cabecalho'>
            <nav>
                <img src="/assets/img/logo.png" alt="" />
                <h1>Elite<strong>Wheelz</strong></h1>
            </nav>


            <section className='paginas'>

                <article className='pag-coluna'>
                    <img src="/assets/img/casa.svg" alt="casa" />
                    <h1>Home</h1>
                </article>

                <article className='pag-coluna'>
                    <img className='icone' src="/assets/img/icone.png" alt="" />
                    <h1>Clientes</h1>
                </article>

                <article className='pag-coluna'>
                    <img className='veiculos' src="/assets/img/carrrinho.png" alt="" />
                    <h1>Veículos</h1>
                </article>

                <article className='pag-coluna'>
                    <img className='locacao' src="/assets/img/chave.png" alt="" />
                    <h1>Locação</h1>
                </article>

            </section>
        </div>
    )
}