import './index.scss';
import Cabecalho from '../components/compCabecalho';
import Barra from '../components/compBarra';

export default function Home() {

    return(
        <div className='pagina-home'>
            <Cabecalho/>
            <Barra/>
        </div>
    )
}
