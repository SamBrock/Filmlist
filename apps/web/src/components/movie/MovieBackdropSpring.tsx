'use client';

import { animated, useSpring } from '@react-spring/web';
import { useEventListener } from 'usehooks-ts';

export const MovieBackdropSpring = (props: React.PropsWithChildren) => {
  const styles = useSpring({
    // opacity: isVisible ? 1 : 0,
    // y: isVisible ? 0 : 24,
  });

  useEventListener('scroll', (e) => {
    console.log(e);
  });

  return <animated.div style={styles}>{props.children}</animated.div>;
};
