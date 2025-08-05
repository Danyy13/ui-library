import type {CharacterProps} from "../CharacterUtils.tsx";

export const Character = ({
    character,
}: CharacterProps) => {
    return (
        <div className="flex justify-center items-center w-16 aspect-square bg-[var(--color-hieroglyph)] font-bold border-4 rounded-md text-4xl">
            {character}
        </div>
    )
}