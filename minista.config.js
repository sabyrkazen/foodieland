import { defineConfig } from 'minista'
import path from 'path'

/**
 * @see https://minista.qranoko.jp/docs/config-file
 */
export default defineConfig({
  // Корень проекта (обычно не меняется)
  root: '',

  // Базовый путь (если деплой не в корень сайта, поменяй)
  base:
    process.env.NODE_ENV === 'production' ? '/friendly-frontend-starter/' : '/',

  // Папка с публичными файлами (копируются как есть)
  public: 'public',

  // Папка для сборки (туда складывается результат)
  out: 'dist',

  assets: {
    // Общая папка для ассетов (шрифты, иконки, картинки, скрипты)
    outDir: 'assets',
    outName: '[name]',

    // Картинки (оптимизируются и ресайзятся при сборке)
    images: {
      outDir: 'assets/images',
      outName: '[name]',
      remoteName: 'remote',
      optimize: {
        layout: 'constrained',
        breakpoints: [
          360, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840,
        ],
        resolution: [1, 2],
      },
    },

    // Поддержка импорта SVG как React/JSX-компонентов
    svgr: {
      svgrOptions: {},
    },

    // SVG-спрайт из папки с иконками
    icons: {
      srcDir: 'src/assets/icons',
      outDir: 'assets/images',
      outName: '[dirname]',
      svgstoreOptions: {
        // Удаляем fill/stroke из символов, чтобы управлять цветом через CSS
        cleanSymbols: ['fill', 'stroke'],
      },
    },

    // Шрифты (woff2 и пр.)
    fonts: {
      outDir: 'assets/fonts',
      outName: '[name]',
    },

    // Имя основного бандла
    bundle: {
      outName: 'bundle',
    },
  },

  resolve: {
    // Настройка алиасов для удобного импорта
    alias: [
      {
        find: '@/',
        replacement: path.resolve('src') + '/',
      },
      {
        find: '@assets/',
        replacement: path.resolve('src/assets') + '/',
      },
      {
        find: '@components/',
        replacement: path.resolve('src/components') + '/',
      },
      {
        find: '@constants/',
        replacement: path.resolve('src/constants') + '/',
      },
      {
        find: '@layouts/',
        replacement: path.resolve('src/layouts') + '/',
      },
      {
        find: '@modules/',
        replacement: path.resolve('src/modules') + '/',
      },
      {
        find: '@pages/',
        replacement: path.resolve('src/pages') + '/',
      },
      {
        find: '@sections/',
        replacement: path.resolve('src/sections') + '/',
      },
      {
        find: '@styles/',
        replacement: path.resolve('src/styles') + '/',
      },
      {
        find: '@utils/',
        replacement: path.resolve('src/utils') + '/',
      },
    ],
  },
  css: {
    modules: {
      // Поведение CSS-модулей (используется редко, но пусть будет)
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        // Автоматически подключаем helpers во все SCSS-файлы
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
        // Убираем варнинги от старого API
        silenceDeprecations: ['legacy-js-api'],
      },
      less: {},
      stylus: {},
    },
  },

  // Можно прокинуть дополнительные опции в Vite
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})
