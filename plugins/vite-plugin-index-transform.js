const transformIndexHtml = (code) => {
  // switch (process.env.NODE_ENV) {
  //   case 'production':
  //     return code.replace(/__INDEX__/, '/demo/index.prod.js');
  //   default:
  //     return code.replace(/__INDEX__/, '/demo/index.dev.js');
  // }
  return code.replace(/__INDEX__/, '/docs/index.js');
};

const indexTransformPlugin = {
  name: 'index-transform',
  enforce: 'pre',
  // vite build is production will not invoke `transformIndexHtml`
  transform(code, id) {
    if (id.endsWith('.html')) {
      return { code: transformIndexHtml(code), map: null };
    }
  },
  transformIndexHtml
};

module.exports = indexTransformPlugin;
