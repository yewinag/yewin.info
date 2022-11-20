const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@interfaces': path.resolve(__dirname, './src/Interfaces'),
      '@api': path.resolve(__dirname, './src/API'),
      '@layouts': path.resolve(__dirname, './src/Layouts'),
      '@redux': path.resolve(__dirname, './src/Redux'),
      '@configs': path.resolve(__dirname, './src/Configs'),
      '@modules': path.resolve(__dirname, './src/Modules'),
      '@utils': path.resolve(__dirname, './src/Utils'),
      '@translations': path.resolve(__dirname, './src/Translations'),
      //   "@validations": path.resolve(__dirname, "./src/Validations"),
    },
  },
};
