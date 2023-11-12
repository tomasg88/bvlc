import * as React from 'react';
import { Options } from './types';
import { useNProgress } from './useNProgress';
type Outer<P> = P & Options;
type Inner<P> = P & ReturnType<typeof useNProgress>;
export declare function withNProgress<P>(BaseComponent: React.ComponentType<Inner<P>>): React.FC<Outer<P>>;
export {};
