import * as React from 'react';

export const useFocus = () => {
  const focusRef = React.useRef(false);

  const setFocus = (hasFocus: boolean) => {
    focusRef.current = hasFocus;
  };

  const takeFocus = () => {
    setFocus(true);
  };

  const looseFocus = () => {
    setFocus(false);
  };

  return { focusRef, setFocus, takeFocus, looseFocus };
};
