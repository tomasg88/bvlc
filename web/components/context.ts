import React from 'react';

export type IRrss = {
  _id: string;
  rrss: string;
  rrssUrl: string;
}[];

export const Context = React.createContext<IRrss[]>([]);
