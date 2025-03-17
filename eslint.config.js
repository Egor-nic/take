import antfu from '@antfu/eslint-config';

export default antfu(
  {
    react: {
      overrides: {
        'no-irregular-whitespace': ['warn'],
        'no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
        'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
      },
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
  },
);
