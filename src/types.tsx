export type EMOJI_KEYS = "happy" | "sick" | "dead" | "neutro";

export type AtributoType = 0|1|2|3|4|5;

export type EmojiType = {
    vida: AtributoType;
    energia: AtributoType;
    agua: AtributoType;
    comida: AtributoType;
    luz: boolean;
}