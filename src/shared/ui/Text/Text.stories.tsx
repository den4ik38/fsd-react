import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title ipsum lorem',
    text: 'description description',
};

export const PrimaryError = Template.bind({});
PrimaryError.args = {
    title: 'Title ipsum lorem',
    text: 'description description',
    theme: ThemeText.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title ipsum lorem',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'description description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title ipsum lorem',
    text: 'description description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title ipsum lorem',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'description description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
