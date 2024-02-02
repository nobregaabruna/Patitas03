import styled from "styled-components";

export const SideBarDiv = styled.div `
    display: grid;
    grid-template-rows: 15% 66% 15%;
    height: 100%;
    width: 18%;

    border-right: 1px solid #6b6b6b56;
`;

export const InstaLogo = styled.img `
    width: 45%;
    margin: 0 0 0 13.6%;
    align-self: center;
`;

/*----------------------------------------------------------------------------*/

export const SidePages = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SideButtonDiv = styled.div `
    display: grid;
    grid-template-columns: 13% auto;
    grid-column-gap: 8%;
    width: 80%;

    align-items: center;

    margin: 0 0 0 8.6%;
    padding: 5% 0 5% 5%;

    border-radius: 7px;
    :hover { background-color: #1c1c1c; }
`;

export const SideButtonImg = styled.img `
    width: 90%;
`;

export const SideButtonText = styled.p `
    font-size: 1.2vw;
    color: white;
`;

/*----------------------------------------------------------------------------*/