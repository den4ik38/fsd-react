import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci dolorem est, eaque odit rerum officiis, exercitationem aliquid sequi sed provident minima ea beatae porro tempore itaque animi. Animi nulla quasi sed expedita aperiam aliquam consequuntur porro natus ad rem accusamus alias, maiores nesciunt? Excepturi, repudiandae magni. Ut iste non ea commodi error iusto ipsum ad laboriosam sit repudiandae sunt quas cupiditate animi architecto debitis unde, quod pariatur aliquam assumenda beatae, sequi vero veritatis. Repellat deserunt itaque atque dignissimos vitae architecto illo eaque optio magni aspernatur necessitatibus ex, est veniam reprehenderit pariatur. Facere saepe quos quae amet aspernatur officia pariatur.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto adipisci dolorem est, eaque odit rerum officiis, exercitationem aliquid sequi sed provident minima ea beatae porro tempore itaque animi. Animi nulla quasi sed expedita aperiam aliquam consequuntur porro natus ad rem accusamus alias, maiores nesciunt? Excepturi, repudiandae magni. Ut iste non ea commodi error iusto ipsum ad laboriosam sit repudiandae sunt quas cupiditate animi architecto debitis unde, quod pariatur aliquam assumenda beatae, sequi vero veritatis. Repellat deserunt itaque atque dignissimos vitae architecto illo eaque optio magni aspernatur necessitatibus ex, est veniam reprehenderit pariatur. Facere saepe quos quae amet aspernatur officia pariatur.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
