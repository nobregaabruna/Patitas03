import { InstaLogo, SideBarDiv, SideButtonDiv, SideButtonImg, SideButtonText, SidePages } from "./style";

import Instagram from '../../assets/instagram.svg';
import Menu from '../../assets/hamburguio.svg';
import homi from '../../assets/homi.jpg';
import Home from '../../assets/home.svg';
import Bussola from '../../assets/bussola.svg';
import Pesquisa from '../../assets/search.svg';
import Reels from '../../assets/reels.svg';
import Coracao from '../../assets/coracao.svg';
import Criar from '../../assets/criar.svg';
import Mensagem from '../../assets/mensagem.svg'

export default function SideBar() {

    const Botoes = [
        [Home, 'Página Inicial'],
        [Pesquisa, 'Pesquisa'],
        [Bussola, 'Explorar'],
        [Reels, 'Reels'],
        [Mensagem, 'Mensagens'],
        [Coracao, 'Notificações'],
        [Criar, 'Criar'],
    ];

    return (
        <SideBarDiv>
            <InstaLogo src={Instagram}/>

            <SidePages>
                {
                    Botoes.map((botao, index) => {
                        return (
                            <SideButtonDiv key={index}>
                                <SideButtonImg src={botao[0]}/>
                                <SideButtonText>{botao[1]}</SideButtonText>
                            </SideButtonDiv>
                        );
                    })
                }

                <SideButtonDiv>
                    <SideButtonImg src={homi} style={{ objectFit: 'cover',
                        width: '3vh', height: '3vh', borderRadius: '50%'}}/>
                    <SideButtonText>Perfil</SideButtonText>
                </SideButtonDiv>
            </SidePages>

            <SideButtonDiv style={{alignSelf: 'flex-end'}}>
                <SideButtonImg src={Menu}/>
                <SideButtonText>Mais</SideButtonText>
            </SideButtonDiv>
        </SideBarDiv>
    );
}