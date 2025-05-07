import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Lift: Story;
export declare const Rotate: Story;
export declare const Bounce: Story;
export declare const Glow: Story;
