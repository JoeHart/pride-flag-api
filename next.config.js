module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    config.module.rules.push({
      test: /\.svg$/i,
      resourceQuery: /component/,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false
                  }
                }
              }
            ]
          }
        }
      }],
    })

    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: /component/ }, // exclude if *.svg?component
      issuer: /\.[jt]sx?$/,
      loader: "svg-inline-loader",
    });

    return config;
  },
};
