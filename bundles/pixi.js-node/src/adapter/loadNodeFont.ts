import { registerFont } from 'canvas';
import { getFontFamilyName } from './temp/misc';

const validFonts = ['woff', 'woff2', 'ttf', 'otf'];

/**
 * loads our textures!
 * this makes use of imageBitmaps where available.
 * We load the ImageBitmap on a different thread using CentralDispatch
 * We can then use the ImageBitmap as a source for a Pixi Texture
 */
export const loadNodeFont = {
    test(url: string): boolean
    {
        const tempURL = url.split('?')[0];
        const extension = tempURL.split('.').pop();

        return validFonts.includes(extension);
    },

    async load(url: string, asset: any): Promise<void>
    {
        registerFont(url, {
            family: asset.data?.family ?? getFontFamilyName(url),
            weight: asset.data?.weight ?? 'normal',
            style: asset.data?.style ?? 'normal',
        });
    },
};

