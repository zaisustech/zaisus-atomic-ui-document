import type { StorybookConfig } from '@storybook/react-native';
import path from 'path';

const main: StorybookConfig = {
  stories: [
    // Stories inside .rnstorybook
    // path.resolve(__dirname, './stories/**/*.stories.@(ts|tsx|js|jsx)'),

    // Stories inside example/src
    path.resolve(__dirname, '../src/**/*.stories.@(ts|tsx|js|jsx)'),
  ],

  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};

export default main;