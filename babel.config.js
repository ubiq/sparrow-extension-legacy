module.exports = function (api) {
  api.cache(false)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: [
              'chrome >= 80',
              'firefox >= 78.3',
            ],
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
  }
}
