import { useCallback, useEffect, useMemo } from 'react';

const useHotKey = hotkeys => {
  const localKeys = useMemo(() => hotkeys.filter(k => !k.global), [hotkeys]);
  const globalKeys = useMemo(() => hotkeys.filter(k => k.global), [hotkeys]);

  const invokeCallback = useCallback(
    (global, combo, callbackName, e) => {
      for (const hotkey of global ? globalKeys : localKeys) {
        hotkey[callbackName](e); //callbackName: onKeyDown, onKeyUp
      }
    },
    [localKeys, globalKeys]
  );

  const handleGlobalKeyDown = useCallback(
    e => {
      invokeCallback(true, undefined, 'onKeyDown', e);
    },
    [invokeCallback]
  );

  const handleGlobalKeyUp = useCallback(
    e => {
      invokeCallback(true, undefined, 'onKeyUp', e);
    },
    [invokeCallback]
  );

  const handleLocalKeyDown = useCallback(
    e => {
      invokeCallback(false, undefined, 'onKeyDown', e.nativeEvent);
    },
    [invokeCallback]
  );

  const handleLocalKeyUp = useCallback(
    e => {
      invokeCallback(false, undefined, 'onKeyUp', e.nativeEvent);
    },
    [invokeCallback]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
    document.addEventListener('keyup', handleGlobalKeyUp);

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
      document.removeEventListener('keyup', handleGlobalKeyUp);
    };
  }, [handleGlobalKeyDown, handleGlobalKeyUp]);

  return { handleKeyDown: handleLocalKeyDown, handleKeyUp: handleLocalKeyUp };
};

// const hotkeys = [
//   {
//     global: true,
//     combo: 'ctrl+k',
//     onKeyDown: e => {
//       alert(this.combo);
//     },
//   },
// ];

// useHotKey(hotkeys)

export default useHotKey;
