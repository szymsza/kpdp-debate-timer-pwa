module.exports = {
  webpack(config, env) {
    config.output.publicPath = './';

    if (env.isProd) {
      config.devtool = false;
    }
  }
};
