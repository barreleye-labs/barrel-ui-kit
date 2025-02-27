import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [ "../packages/src/components/**/*.stories.@(mjs|ts|tsx)", "./**/*.stories.@(mjs|ts|tsx)","../packages/**/*.mdx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
