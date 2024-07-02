import { ReactElement, forwardRef, useImperativeHandle } from 'react';
import Item from './Item';
import { ScrollToViewContext } from './context';
import { ScrollToViewStore, useScrollToView } from './hooks';
export { useScrollToView } from './hooks';

const ScrollToView = forwardRef(
  (
    props: { children: ReactElement[]; scrollToView: ScrollToViewStore },
    ref,
  ) => {
    const { children, scrollToView } = props;
    const wrapScrollToView = useScrollToView(scrollToView);
    useImperativeHandle(ref, () => wrapScrollToView);

    return (
      <ScrollToViewContext.Provider
        value={{
          saveChildRef: (name, childRef) => {
            wrapScrollToView.saveChildRef(name, childRef);
          },
        }}
      >
        {children}
      </ScrollToViewContext.Provider>
    );
  },
);

export const ScrollToViewItem = Item;

export default ScrollToView;
