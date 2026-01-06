import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'installation',
    'atomic-design',
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/accordion',
        'components/action-sheet',
        'components/badge',
        'components/button',
        'components/card',
        'components/carousel',
        'components/divider',
        'components/dropdown-field',
        'components/empty-state',
        'components/form-field-container',
        'components/icon',
        'components/list-item',
        'components/pager',
        'components/progress-bar',
        'components/progress-circle',
        'components/rich-text',
        'components/segmented-control',
        'components/snackbar',
        'components/spacer',
        'components/stepper',
        'components/tab-view',
        'components/text',
        'components/text-input-field',
        'components/toast',
        'components/visible',
      ],
    },
    'theme',
    'tokens',
  ],
};

export default sidebars;
