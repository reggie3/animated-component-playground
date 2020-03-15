import { useCallback, useState } from "react";

export const useComponentLayout = () => {
  const [layout, setLayout] = useState(null);

  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
  }, []);

  return [layout, onLayout];
};
