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
import { throttle } from 'lodash';

function getElementTop(ele: HTMLElement) {
  let actualTop = ele.offsetTop;
  let current = ele.offsetParent as HTMLElement;
  while (current !== null) {
    actualTop += current?.offsetTop;
    current = current?.offsetParent as HTMLElement;
  }
  return actualTop;
}

export default memo(function Item({
  children,
  anchorName,
  onReach,
}: {
  children: ReactElement;
  anchorName: string;
  onReach?: (anchorName: string) => void;
}) {
  const childRef = useRef<HTMLElement>();
  const child = Children.only(children);
  const { saveChildRef } = useContext(ScrollToViewContext);
  useEffect(() => {
    if (childRef.current) {
      saveChildRef(anchorName, childRef);
    }
  }, [childRef.current]);

  const listenerScroll = throttle(() => {
    let curTop = 100;
    if (childRef.current) {
      curTop = getElementTop(childRef.current);
    }
    if (window.scrollY > curTop) {
      onReach?.(anchorName);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener('scroll', listenerScroll);

    return () => window.removeEventListener('scroll', listenerScroll);
  }, []);

  return cloneElement(child, { ref: childRef });
});
