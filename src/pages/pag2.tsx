import { Link } from "react-router-dom"
import './pag2.css'

export function Pag2(){

    let escolha: string = '';

    const dataAtual: Date = new Date();
    const dia: number = dataAtual.getDate();

    const textosp: string[] = [
        "Sou mais leve que uma pluma, mas até o mais forte não pode me segurar por muito tempo. O que sou?...[oʇuǝΛ O]",
        "Quanto mais você tira, mais eu cresço. O que sou?...[oɔɐɹnq O]",
        "Sou redondo com a roda, mas não sou feito de metal. O que sou?...[ɐzzıd ɐɯn]"
    ];

    function sortearTextop(textos: string[]): string {
        const indiceSorteado: number = Math.floor(Math.random() * textos.length);
        return textosp[indiceSorteado];
    }

    const textoSorteadop: string = sortearTextop(textosp);

    const textosi: string[] = [
        "Sou sempre cheio, mas nunca transbordo.O que sou?...[oɐ̰ןɐq O]",
        "Quanto mais tira de mim, mais forte eu fico.o que sou?...[oıɔuǝ̮ןıs O]",
        "Sou um amigo leal que nunca te abandona, mas você precisa me alimentar com suas palavras?...[oıɹɐ̗ıp ɯ∩]"
    ];

    function sortearTextoi(textos: string[]): string {
        const indiceSorteado: number = Math.floor(Math.random() * textos.length);
        return textosi[indiceSorteado];
    }

    const textoSorteadoi: string = sortearTextoi(textosi);

    if (dia % 2 === 0) {
        escolha = textoSorteadop
    } else {
        escolha = textoSorteadoi
    }

    return(
        <div className="pag2">
        
        <h1>Charadas engraçadas atualizadas comicas de 2025 100% atualizadas garantia de risos e alegria</h1>

        <h2>{escolha}</h2>

        <Link to='/pag1'>
        <button id="pag2b">Pagina 1</button>
        </Link>

        <Link to='/'>
        <button id="pag2b">Voltar</button>
        </Link>

        <Link to='/pag3'>
        <button id="pag2b">Pagina 3</button>
        </Link>
        </div>
    );
}