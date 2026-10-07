import "./Emoji.css"

type EMOJI_KEYS = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
  ["happy", "😊"],
  ["sick", "🤢"],
  ["dead", "😵"],
])

export default function Emoji() {
    let status:EMOJI_KEYS = "happy"

    function happyClick() {
        console.log(status);
        status = "happy";
        console.log(status);
    }
    return (
        <>  
            <div className="emoji">{EMOJI_MAP.get(status) || "🫥"}</div>

            <div className="acoes">
                <button onClick={happyClick}>Feliz</button>
            </div>
        </>
    )
}