import useTimeoutFn from './useTimeoutFn.js';
import { useEffect } from 'react';

const useTimeout = (fn, ms) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [clear, run]);

  return clear;
};

export default useTimeout;
