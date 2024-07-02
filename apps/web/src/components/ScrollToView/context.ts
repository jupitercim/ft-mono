import { MutableRefObject, createContext } from 'react';

export const ScrollToViewContext = createContext({
  saveChildRef: (_anchorName: string, _ref: MutableRefObject<any>) => {},
});
