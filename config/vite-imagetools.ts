import { imagetools } from 'vite-imagetools';

// https://sharp.pixelplumbing.com/api-output
const DEFAULT_IMAGE_QUALITY = '87';
const DEFAULT_IMAGE_MAX_WIDTH = '1920';

const DEFAULT_PRESETS_BY_FORMAT = ['jpg', 'png'];

export function viteImagePlugin() {
  return imagetools({
    cache: {
      retention: 172800, // 2 дня кеш хранится
    },
    // defaultDirectives: async (url, metadata) => {
    defaultDirectives: (url) => {
      // https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md
      const format = DEFAULT_PRESETS_BY_FORMAT.find(_format => url.searchParams.has(_format));
      // const imgData = await metadata();

      if (format) {
        return new URLSearchParams({
          w: DEFAULT_IMAGE_MAX_WIDTH,
          quality: DEFAULT_IMAGE_QUALITY,
          ...Object.fromEntries(url.searchParams),
          format,
        });
      }
      return new URLSearchParams({
        ...Object.fromEntries(url.searchParams),
      });
    },
  });
}
