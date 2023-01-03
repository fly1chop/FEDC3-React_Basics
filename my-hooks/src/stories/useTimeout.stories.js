import useTimeout from '../hooks/useTimeout.js';
import useTimeoutFn from '../hooks/useTimeoutFn.js';

export default {
  title: 'Hook/useTimeoutFn',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('start');
  }, 3000);

  return (
    <>
      <div>useTimeoutFn Test</div>
      <button onClick={clear}>STOP!</button>
    </>
  );
};

export const TimeoutFunc = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert('START!');
  }, 3000);

  return (
    <>
      <div>useTimeoutFn Test</div>
      <button onClick={run}>After 3secs</button>
      <button onClick={clear}>STOP!</button>
    </>
  );
};
