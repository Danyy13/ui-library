import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './Button';
import {fn} from "storybook/test";

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ["autodocs"],
    argTypes: {
        // Configure the variant prop
        variant: {
            control: 'select', // Creates a dropdown
            options: ['primary', 'secondary', 'danger'],
            description: 'Visual style variant of the button',
            table: {
                type: { summary: "'primary' | 'secondary' | 'danger'" },
                defaultValue: { summary: 'primary' },
            },
        },

        // Configure the size prop
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the button',
            table: {
                type: { summary: "'small' | 'medium' | 'large'" },
                defaultValue: { summary: 'medium' },
            },
        },

        // Configure the disabled prop
        disabled: {
            control: 'boolean', // Creates a checkbox
            description: 'Whether the button is disabled',
        },

        // Configure the children prop
        children: {
            control: 'text', // Creates a text input
            description: 'The text content displayed inside the button',
        },

        // Configure the onClick prop
        onClick: {
            action: 'clicked', // This logs actions in the Actions panel
            description: 'Click event handler',
        },

        // Hide props that are less relevant for stories
        type: {
            control: false, // Don't show in controls panel
        },
        className: {
            control: false,
        },
    },

    // Default args that apply to all stories unless overridden
    args: {
        // Use Storybook's fn() helper to create a mock function
        // This will show up in the Actions panel when clicked
        onClick: fn(),
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Delete Item',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Small Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Large Button',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};

export const LongText: Story = {
    args: {
        children: 'This is a button with much longer text content',
    },
    parameters: {
        docs: {
            description: {
                story: 'This story shows how the button handles longer text content.',
            },
        },
    },
};