import { HomeDiv, Logoimagem } from "./style";
import logoPatitas from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Link to="/login">
            <HomeDiv>
                oi
            </HomeDiv>
        </Link>
    );
}