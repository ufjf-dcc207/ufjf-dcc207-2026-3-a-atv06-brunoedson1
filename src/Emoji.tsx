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

    function happyClick() {
        console.log("Status:", status);
        console.log("Happy");
        setStatus("happy");
    }

    function sickClick() {
        console.log("Status:", status);
        console.log("Sick");
        setStatus("sick");
    }

    function deadClick() {
        console.log("Status:", status);
        console.log("Dead");
        setStatus("dead");
    }

    function cicloClick() {
        switch (status) {
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            case "dead":
                setStatus("happy");
                break;
            default:
                setStatus("neutro");
                break;
        }
    }

    console.log("desenhando");
    console.log("Status:", status);
    return (
        <>  
            <div className="container">
                <div className="emoji-grande">{EMOJI_MAP.get(status) || "🫥"}</div>

                <div className="atributos">
                    <Atributo icone="❤️"/>
                    <Atributo icone="🔋"/>
                    <Atributo icone="💧"/>
                    <Atributo icone="🍗"/>
                </div>

                <div className="acoes">
                    <button onClick={happyClick}>Feliz</button>
                    <button onClick={sickClick}>Doente</button>
                    <button onClick={deadClick}>Morto</button>
                    <button onClick={cicloClick}>Ciclo</button>
                </div>
            </div>
        </>
    )
}