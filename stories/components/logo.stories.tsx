import { LogoComponent } from "../../components/logo.component";
import { ComponentStory } from '@storybook/react';

export default {
    title: 'Components',
    component: LogoComponent
};

const Template: ComponentStory<typeof LogoComponent> = (args) => <LogoComponent {...args} />;

export const Logo = Template.bind({});
Logo.args = {
    logoAlt: 'Tesla Logo',
    logoWidth: 128,
    logoHeight: 45
};