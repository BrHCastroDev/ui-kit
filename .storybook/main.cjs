module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, {configType}) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ui-kit/'
    }

    return config
  }
}
