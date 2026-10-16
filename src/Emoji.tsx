import { useState } from "react";
import "./Emoji.css"
import Atributo from "./Atributo";
import type { EMOJI_KEYS, EmojiType } from "./types";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
  ["happy", "😊"],
  ["sick", "🤢"],
  ["dead", "😵"],
  ["neutro", "🫥"]
])

export default function Emoji() {

    const [emoji, setEmoji] = useState<EmojiType>({
        vida: 5,
        energia: 3,
        agua: 2,
        comida: 1,
        luz: true
    });

    function onAlimentar() {
        // if(saude === 0) return;
        // setComida(Math.min(5, comida + 1));
    }

    function onHidratar() {
        // if(saude === 0) return;
        // setAgua(Math.min(5, agua + 1));
    }

    function onLigarLuz() {
        // setLuz(!luz);
    }

    function onCiclo() {
        // if(saude === 0) return;
        // setComida(Math.max(0, comida - 1));
        // if (comida === 0) {
        //     setSaude(Math.max(0, saude - 1));
        // }
        // setAgua(Math.max(0, agua - 1));
        // if (agua === 0) {
        //     setSaude((prevSaude) => Math.max(0, prevSaude - 1));
        // }
        // if (luz) {
        //     setEnergia(Math.max(0, energia - 1));
        //     if (energia === 0) {
        //         setSaude((prevSaude) => Math.max(0, prevSaude - 1));
        //     }
        // } else {
        //     setEnergia(Math.min(5, energia + 1));
        // }
    }

    let status = EMOJI_MAP.get("happy");
    if (emoji.agua === 0 || emoji.comida === 0 || emoji.energia === 0) {
        status = EMOJI_MAP.get("sick");
    }
    if (emoji.vida === 0) {
        status = EMOJI_MAP.get("dead");
    }

    return (
        <div className="emoji">
            <div className="situacao">{status}</div>

            <div className="atributos">
                <Atributo icone="❤️" valor={emoji.vida}/>
                <Atributo icone="🔋" valor={emoji.energia}/>
                <Atributo icone="💧" valor={emoji.agua}/>
                <Atributo icone="🍗" valor={emoji.comida}/>
                {emoji.luz && "💡"}
            </div>

            <div className="acoes">
                <button onClick={onAlimentar}>Alimentar</button>
                <button onClick={onHidratar}>Hidratar</button>
                <button onClick={onLigarLuz}>{emoji.luz ? 'Desligar' : 'Ligar'}</button>
                <button onClick={onCiclo}>Ciclo</button>
            </div>
        </div>
    )
}