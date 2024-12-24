const preset = require('../../packages/config/prettier-preset');

module.exports = {
  ...preset,
  importOrder: ['^./instrument', ...preset.importOrder],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
};
