import { HomeDiv, Logoimagem, ButtonStyles } from "./style";
import logoPatitas from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import React, {FC,InputHTMLAttributes} from 'react';



export default function Home() {
    return (
        <Link to="/cadastrar">
            <HomeDiv>
                cadastrar
                <Logoimagem src={logoPatitas}/>
            </HomeDiv>
        </Link>
    );
}

interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    children: any;
    onClick: any;
}

export const Button: FC<IButtonProps> = ({
    children,
    onClick = () => {},
    ...props
}) => {
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick(e);
    };
    return (
        <Button onClick={handleOnClick} {...props}>
            {children}
        </Button>
    );
};


