import { useState } from 'react';

import { LeftArrow, RightArrow, StoriesDiv, UserName, UserPic, UserPicDiv,
    UserStoriesDiv } from './style';

import Seta from '../../assets/rightArrow.svg';

export type UserStoriesData = {
    pic: string;
    nome: string;
}

export default function Stories({usuarios}: {usuarios: Array<UserStoriesData>}) {

    const scrollLenght = 78.788;
    const [scroll, setScroll] = useState<number>(0);

    const scrollLeft = () => {
        const stories = document.getElementById('stories');
        if(stories) {
            stories.scrollTo((scroll - scrollLenght), 0);
            setScroll(scroll - scrollLenght);
        }
    }
    
    const scrollRight = () => {
        const stories = document.getElementById('stories');
        if(stories) {
            stories.scrollTo((scroll + scrollLenght), 0);
            setScroll(scroll + scrollLenght);
        }
    }

    return (
        <StoriesDiv id='stories'>
            {
                usuarios.map((usuario, index) => {
                    return (
                        <UserStoriesDiv key={index}>
                            <UserPicDiv closeFriends={index % 2 && index % 3? true:false}>
                                <UserPic src={usuario.pic}/>
                            </UserPicDiv>
                            <UserName>
                                {
                                    usuario.nome.length > 8?
                                        usuario.nome.slice(0, 8-1).concat('...')
                                        :
                                        usuario.nome
                                }
                            </UserName>
                        </UserStoriesDiv>
                    );
                })
            }

            <LeftArrow src={Seta} onClick={scrollLeft}
            style={{display: scroll <= 0? 'none':'flex'}}/>

    {/*
        Tem que pegar o tamanho de cada story e da div dos stories para tirar
        retirar o tamanho certo para esconder a seta da direita.
    */}
            <RightArrow src={Seta} onClick={scrollRight}
            style={{display: scroll === ((usuarios.length - 8)*scrollLenght)? 'none':'flex'}}/>
        </StoriesDiv>
    );
}