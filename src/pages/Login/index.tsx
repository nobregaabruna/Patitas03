import { HomeDiv, Header, Logoimagem, Logomarca } from "./style";
import NavBar from "../../components/Status Bar - Dark.svg";
import logoPatitas from "../../assets/Logo.svg";
import marcaPatas from "../../assets/Marca.svg";

export default function Home() {
    return (
        <HomeDiv>
            <Header src={NavBar}/>
            <Logoimagem src={logoPatitas}/>
            <Logomarca src={marcaPatas}/>
            <button>Cadastrar</button>
        </HomeDiv>
    );
}
