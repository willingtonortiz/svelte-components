export function background(element: HTMLElement) {
  const changeBackground = () => {
    element.style.background = 'tomato';
  };

  element.addEventListener('click', changeBackground);

  return {
    destroy() {
      element.removeEventListener('click', changeBackground);
    }
  };
}
