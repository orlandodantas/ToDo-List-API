module.exports = {
  all: true,
  extends: '@istanbuljs/nyc-config-typescript',
  exclude: ['tests', 'src/models'],
  include: ['src/**/*.ts'],
};
