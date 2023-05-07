type Props = { isOpen: boolean; duration: number };

// Slide svelte action
export function animationAPISlide(node: HTMLElement, { isOpen, duration }: Props) {
  const initialHeight = node.offsetHeight;
  node.style.height = isOpen ? 'auto' : '0';
  node.style.overflow = 'hidden';

  const animation = node.animate([{ height: 0 }, { height: `${initialHeight}px` }], {
    duration,
    fill: 'both',
    direction: isOpen ? 'reverse' : 'normal'
  });
  animation.pause();

  animation.onfinish = ({ currentTime }) => {
    if (currentTime === 0) {
      animation.reverse();
      animation.pause();
    }

    node.dispatchEvent(new CustomEvent('animationEnd'));
  };

  return {
    update() {
      if (animation.currentTime !== 0) {
        animation.reverse();
      } else {
        animation.play();
      }
    }
  };
}

export function animationSlide(node: HTMLElement, { isOpen, duration }: Props) {
  const initialHeight = node.offsetHeight;
  node.style.overflow = 'hidden';
  node.style.transition = `max-height ${duration}ms ease-in-out`;
  node.style.maxHeight = isOpen ? `${initialHeight}px` : '0';

  return {
    update({ isOpen, duration }: Props) {
      node.style.transition = `max-height ${duration}ms ease-in-out`;

      if (isOpen) {
        node.style.maxHeight = `${initialHeight}px`;
      } else {
        node.style.maxHeight = '0';
      }
    }
  };
}
