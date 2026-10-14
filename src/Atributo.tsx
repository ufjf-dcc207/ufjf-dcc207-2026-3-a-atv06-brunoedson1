import "./Atributo.css";

type AtributoProps = {
    icone: string;
    valor: number;
}

export default function Atributo({ icone, valor }: AtributoProps) {
    return (
        <div className="atributo">
            {valor}{icone.repeat(valor)}<span className="inativo">{icone.repeat(5 - valor)}</span>
        </div>
    );
}