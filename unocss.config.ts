import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded-full inline-block bg-#f40 text-white cursor-pointer hover:bg-#f40a disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-#f40'],
    ['flex-c', 'flex items-center justify-center'],
    ['cp', 'cursor-pointer'],
  ],
  theme: {
    colors: {
      brand: {
        primary: '#f40', // used like bg-brand-primary
        light: '#80eec0', // used like bg-brand-light
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
