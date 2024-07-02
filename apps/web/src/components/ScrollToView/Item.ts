import {
  Children,
  ReactElement,
  cloneElement,
  memo,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { ScrollToViewContext } from './context';

export default memo(function Item({
  children,
  anchorName,
}: {
  children: ReactElement;
  anchorName: string;
}) {
  const childRef = useRef();
  const child = Children.only(children);
  const { saveChildRef } = useContext(ScrollToViewContext);
  useEffect(() => {
    if (childRef.current) {
      saveChildRef(anchorName, childRef);
    }
  }, [childRef.current]);

  return cloneElement(child, { ref: childRef });
});
