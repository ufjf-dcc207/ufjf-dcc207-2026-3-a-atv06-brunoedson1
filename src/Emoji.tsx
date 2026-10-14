import { useState } from "react";
import "./Emoji.css"
import Atributo from "./Atributo";

type EMOJI_KEYS = "happy" | "sick" | "dead" | "neutro";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
  ["happy", "😊"],
  ["sick", "🤢"],
  ["dead", "😵"],
  ["neutro", "🫥"]
])

export default function Emoji() {
    const [status, setStatus] = useState<EMOJI_KEYS>("happy");
    const [saude, setSaude] = useState(4);
    const [energia, setEnergia] = useState(3);
    const [agua, setAgua] = useState(2);
    const [comida, setComida] = useState(1);
    const [luz, setLuz] = useState<boolean>(true);

    function onAlimentar() {
        setComida(Math.min(5, comida + 1));
    }

    function onHidratar() {
        setAgua(Math.min(5, agua + 1));
    }

    function onLigarLuz() {
        setLuz(!luz);
    }

    function onCiclo() {
        if(luz) {
            setEnergia(Math.min(0, energia - 1));
        } else {
            setEnergia(Math.min(5, energia + 1));
        }

    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJI_MAP.get(status) || "🫥"}</div>

            <div className="atributos">
                <Atributo icone="❤️" valor={saude}/>
                <Atributo icone="🔋" valor={energia}/>
                <Atributo icone="💧" valor={agua}/>
                <Atributo icone="🍗" valor={comida}/>
                {luz && "💡"}
            </div>

            <div className="acoes">
                <button onClick={onAlimentar}>Alimentar</button>
                <button onClick={onHidratar}>Hidratar</button>
                <button onClick={onLigarLuz}>Alterar Luz</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    )
}