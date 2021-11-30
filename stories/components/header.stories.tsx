import { ComponentStory } from "@storybook/react";
import { HeaderDeskComponent } from "../../components/header.component/header.desk";
import * as LogoStories from './logo.stories';

export default {
    title: 'Components',
    component: HeaderDeskComponent
};

const Template: ComponentStory<typeof HeaderDeskComponent> = (args) =>  <HeaderDeskComponent {...args} />;

export const HeaderDesk = Template.bind({});
HeaderDesk.args = {
    ...LogoStories.Logo.args,
};