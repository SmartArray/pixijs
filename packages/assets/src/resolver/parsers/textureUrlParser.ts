import { settings } from '@pixi/settings';

import { loadTextures } from '../../loader';
import type { ResolveAsset } from '../types';

export const textureUrlParser = {
    test: loadTextures.test,
    parse: (value: string): ResolveAsset =>
        ({
            resolution: parseFloat(settings.RETINA_PREFIX.exec(value)?.[1] ?? '1'),
            format: value.split('.').pop(),
            src: value,
        }),
};
