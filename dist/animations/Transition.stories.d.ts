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
export declare const Fade: Story;
export declare const Slide: Story;
export declare const Scale: Story;
export declare const Flip: Story;
export declare const Combined: Story;
export declare const CustomDuration: Story;
