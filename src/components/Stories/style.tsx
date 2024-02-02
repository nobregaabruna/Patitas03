import styled from "styled-components";

type StoriesData = { closeFriends?: boolean; };

export const StoriesDiv = styled.ul `
    display: flex;
    width: 90%;

    margin: 5vh;

    overflow-x: hidden;
    scroll-behavior: smooth;
    ::-webkit-scrollbar { display: none; }
    ms-overflow-style: none;  /* IE e Edge */
    scrollbar-width: none;  /* Firefox */
`;

/*----------------------------------------------------------------------------*/

export const UserStoriesDiv = styled.li `
    display: flex;
    flex-direction: column;

    margin: 0 1.94% 0 0;

    align-items: center;
`;

export const UserPicDiv = styled.div<StoriesData> `
    display: flex;
    width: 4.5vw;
    height: 4.5vw;

    align-items: center;
    justify-content: center;
    
    padding: 3px;

    border-radius: 50%;
    ${(cf) => cf.closeFriends?
        'background-color: #1ac44a;'
        :
        'background-image: linear-gradient(45deg, yellow 10%, red, #c900bb, #c900bb);'
    }
`;

export const UserPic = styled.img `
    display: flex;
    width: 4.5vw;
    height: 4.5vw;
    
    border: 2px solid black;
    border-radius: 50%;
    
    object-fit: cover;
`;

export const UserName = styled.p `
    font-size: 0.9vw;
    margin: 5% 0 0 0;
    color: white;
`;

/*----------------------------------------------------------------------------*/

export const RightArrow = styled.img `
    width: 2vw;
    position: absolute;
    right: 7.5%;
    top: 8%;
`;

export const LeftArrow = styled.img `
    width: 2vw;
    position: absolute;
    left: 6%;
    top: 8%;
    rotate: 180deg;
`;