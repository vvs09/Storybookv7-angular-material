import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    "@chromatic-com/storybook"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {},
  staticDirs:['./public']
};
export default config;
