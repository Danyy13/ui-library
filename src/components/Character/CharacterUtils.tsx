export const UPPERCASE_LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
] as const;

export type UppercaseLetter = typeof UPPERCASE_LETTERS[number];

export interface CharacterProps {
    character: UppercaseLetter;
}

export interface CharacterGroupProps {
    numberOfCharacters: number;
}

export const getRandomCharacter = () : UppercaseLetter => {
    const index = Math.floor(Math.random() * UPPERCASE_LETTERS.length);
    return UPPERCASE_LETTERS[index];
}