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
        if(emoji.vida === 0) return;
        setEmoji(prevEmoji => ({...prevEmoji, comida: Math.min(5, prevEmoji.comida + 1)}));
    }

    function onHidratar() {
        if(emoji.vida === 0) return;
        setEmoji((prevEmoji) => ({...prevEmoji, agua: Math.min(5, prevEmoji.agua + 1)}));
    }

    function onLigarLuz() {
        setEmoji((prevEmoji) => ({...prevEmoji, luz: !prevEmoji.luz}));
    }
 
    function onCiclo() {
        if(emoji.vida === 0) return;

        setEmoji((prevEmoji) => ({...prevEmoji, comida: Math.max(0, prevEmoji.comida - 1)}));
        if (emoji.comida === 0) {
            setEmoji((prevEmoji) => ({...prevEmoji, vida: Math.max(0, prevEmoji.vida - 1)}));
        }

        setEmoji((prevEmoji) => ({...prevEmoji, agua: Math.max(0, prevEmoji.agua - 1)}));
        if (emoji.agua === 0) {
            setEmoji((prevEmoji) => ({...prevEmoji, vida: Math.max(0, prevEmoji.vida - 1)}));
        }

        if (emoji.luz) {
            setEmoji((prevEmoji) => ({...prevEmoji, energia: Math.max(0, prevEmoji.energia - 1)}));
            if (emoji.energia === 0) {
                setEmoji((prevEmoji) => ({...prevEmoji, vida: Math.max(0, prevEmoji.vida - 1)}));
            }
        } else {
            setEmoji((prevEmoji) => ({...prevEmoji, energia: Math.min(5, prevEmoji.energia + 1)}));
        }
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