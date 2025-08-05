import type {Meta, StoryObj} from '@storybook/react';
import {Character} from './Character.tsx';
import {UPPERCASE_LETTERS, getRandomCharacter} from "../CharacterUtils.tsx";

const meta: Meta<typeof Character> = {
    title: 'Components/Character',
    component: Character,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        character: {
            control: 'select',
            options: UPPERCASE_LETTERS,
            description: 'Choose the letter/character',

        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        character: getRandomCharacter(),
    }
};
