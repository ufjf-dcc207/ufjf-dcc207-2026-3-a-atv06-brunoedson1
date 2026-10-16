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

    const [saude, setSaude] = useState(4);
    const [energia, setEnergia] = useState(3);
    const [agua, setAgua] = useState(2);
    const [comida, setComida] = useState(1);
    const [luz, setLuz] = useState<boolean>(true);

    function onAlimentar() {
        if(saude === 0) return;
        setComida(Math.min(5, comida + 1));
    }

    function onHidratar() {
        if(saude === 0) return;
        setAgua(Math.min(5, agua + 1));
    }

    function onLigarLuz() {
        setLuz(!luz);
    }

    function onCiclo() {
        if(saude === 0) return;
        setComida(Math.max(0, comida - 1));
        if (comida === 0) {
            setSaude(Math.max(0, saude - 1));
        }
        setAgua(Math.max(0, agua - 1));
        if (agua === 0) {
            setSaude((prevSaude) => Math.max(0, prevSaude - 1));
        }
        if (luz) {
            setEnergia(Math.max(0, energia - 1));
            if (energia === 0) {
                setSaude((prevSaude) => Math.max(0, prevSaude - 1));
            }
        } else {
            setEnergia(Math.min(5, energia + 1));
        }
    }

    let status = EMOJI_MAP.get("happy");
    if (agua === 0 || comida === 0 || energia === 0) {
        status = EMOJI_MAP.get("sick");
    }
    if (saude === 0) {
        status = EMOJI_MAP.get("dead");
    }

    return (
        <div className="emoji">
            <div className="situacao">{status}</div>

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
                <button onClick={onLigarLuz}>{luz ? 'Desligar' : 'Ligar'}</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    )
}