import {Character} from "../SimpleCharacter/Character.tsx";
import {type CharacterGroupProps} from "../CharacterUtils.tsx";
import {getRandomCharacter} from "../CharacterUtils.tsx";

export const CharacterGroup = ({
    numberOfCharacters,
}: CharacterGroupProps) => {
    const characters = [];

    for(let i = 0; i < numberOfCharacters; i++) {
        characters.push(<Character key={i} character={getRandomCharacter()} />);
    }

    return (
        <div className={`flex justify-center align-center gap-4`}>
            {characters}
        </div>
    )
}