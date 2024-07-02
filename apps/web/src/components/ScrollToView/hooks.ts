import { MutableRefObject, useRef } from 'react';

export class ScrollToViewStore {
  private nodeMap: Record<string, any> = {};

  saveChildRef = (name: string, ref: MutableRefObject<any>) => {
    this.nodeMap[name] = ref.current;
  };

  removeChildRef = (name: string) => {
    delete this.nodeMap[name];
  };

  scrollTo = (name: string) => {
    const node = this.nodeMap[name];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Cant found node(${name})`);
    }
  };
}

export function useScrollToView(scrollToView?: ScrollToViewStore) {
  const ref = useRef<ScrollToViewStore>();

  if (!ref.current) {
    if (scrollToView) {
      ref.current = scrollToView;
    } else {
      const scrollToViewStore = new ScrollToViewStore();

      ref.current = scrollToViewStore;
    }
  }

  return ref.current;
}
