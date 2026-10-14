import {useState} from "react";
import "./Atributo.css";

type AtributoProps = {
    icone: string;
}

export default function Atributo({ icone }: AtributoProps) {
    const [valor, setValor] = useState(0);
    
    function onValueUp() {
        setValor((v) => {
            if(v === 5) {
                return 0;
            } else {
                return v + 1;
            }
        });
        setValor((prevValor) => {
            if(prevValor === 5) {
                return 0;
            } else {
                return prevValor + 1
            }
        });
    }

    return (
        <div className="atributo">
            <span className="ativo">{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5 - valor)}</span>
            <button onClick={onValueUp}>+</button>
        </div>
    )

}