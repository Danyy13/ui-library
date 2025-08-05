import type {Meta, StoryObj} from '@storybook/react';
import {CharacterGroup} from "../CharacterGroup/CharacterGroup.tsx";

const meta: Meta<typeof CharacterGroup> = {
    title: 'Components/CharacterGroup',
    component: CharacterGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        numberOfCharacters: {
            control: 'select',
            options: [3, 4, 5, 6],
            description: 'Choose the number of characters',

        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LineOfCharacters: Story = {
    args: {
        numberOfCharacters: 3,
    }
};

export const PyramidOfCharacters: Story = {
    render: () => (
        <div className={`flex flex-col justify-center items-center gap-4`}>
            <CharacterGroup key={1} numberOfCharacters={3} />
            <CharacterGroup key={2} numberOfCharacters={4} />
            <CharacterGroup key={3} numberOfCharacters={5} />
            <CharacterGroup key={4} numberOfCharacters={6} />
        </div>
    )
}