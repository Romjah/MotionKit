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
export declare const Success: Story;
export declare const Error: Story;
export declare const Warning: Story;
export declare const Info: Story;
export declare const Loading: Story;
export declare const WithMessage: Story;
