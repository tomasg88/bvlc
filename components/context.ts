import React from 'react';
import { General } from 'types/News';

export type RRSS = {
  _id: General['_id'];
  rrss: General['rrss'];
  rrssUrl: General['rrssUrl'];
};

export const RrssContext = React.createContext<RRSS[]>([]);
