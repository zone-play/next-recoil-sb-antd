import { ComponentStory } from "@storybook/react";
import HomeComponent from "../../pages";
import * as HeaderStories from "../components/header.stories";

export default {
    title: 'Pages',
    component: HomeComponent
};

const Template: ComponentStory<typeof HomeComponent> = (args) => <HomeComponent {...args} />;

export const Home = Template.bind({});
Home.args = {
    ...HeaderStories.HeaderDesk.args
};