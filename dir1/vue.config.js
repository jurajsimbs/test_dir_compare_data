const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    devServer: {
        proxy: {
            '/files': {
                target: 'http://127.0.0.1:3999'
            },
            '/images': {
                target: 'http://127.0.0.1:3999'
            },
            '/authors': {
                target: 'http://127.0.0.1:3999'
            },
            '/upload/image': {
                target: 'http://127.0.0.1:3999'
            }
        }
    },
    runtimeCompiler: true,
    configureWebpack: {
        entry: {
            app: './src/demo/main.js'
        },
    }
};

if (process.env.NODE_ENV === 'production') {
    config.configureWebpack.plugins = [
        new BundleAnalyzerPlugin()
    ];
    config.configureWebpack.entry.app = './src/index.js';
    config.configureWebpack.externals = {
        vue: 'vue',
        "js-beautify": "js-beautify",
        'vue-router': 'vue-router',
        vuex: 'vuex',
        'vue-resource': 'vue-resource',
        'vee-validate': 'vee-validate',
        'vue-filepond': 'vue-filepond',
        'filepond-plugin-image-preview': 'filepond-plugin-image-preview',
        'filepond-plugin-file-validate-type': 'filepond-plugin-file-validate-type',
        moment: 'moment',
        'vue-slicksort': 'vue-slicksort',
        'js-video-url-parser': 'js-video-url-parser',
        debug: 'debug',
        'vue-tweet-embed': 'vue-tweet-embed',
        'brace': 'brace',
        'brace/mode/javascript': 'brace/mode/javascript',
        'brace/ext': 'brace/ext',
        'brace/ext/emment': 'brace/ext/emment',
        'brace/ext/language_tools': 'brace/ext/language_tools',
        'brace/mode/html': 'brace/mode/html',
        'brace/mode/css': 'brace/mode/css',
        'brace/mode/json': 'brace/mode/json',
        'brace/theme/chrome': 'brace/theme/chrome',
        'brace/ext/searchbox': 'brace/ext/searchbox',
        'brace/ext/statusbar': 'brace/ext/statusbar',
        'vuetify': 'vuetify',
        striptags: 'striptags',
        'vue-i18n': 'vue-i18n',
        lodash: 'lodash',
        'lodash.debounce': 'lodash.debounce',
        filesize: 'filesize',
        webfontloader: 'webfontloader'
    }
}

module.exports = config;