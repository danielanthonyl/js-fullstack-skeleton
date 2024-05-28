import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";

type Story = StoryObj<typeof Meta>;

const Meta: Meta<typeof App> = {
  title: "Pages/App",
  component: App,
};

export const Default: Story = {};

export default Meta;
