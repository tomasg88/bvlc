import * as React from 'react';
import { Options } from './types';
import { useNProgress } from './useNProgress';
type Props = Options & {
    children: (renderProps: ReturnType<typeof useNProgress>) => React.ReactElement;
};
export declare const NProgress: React.FC<Props>;
export {};
