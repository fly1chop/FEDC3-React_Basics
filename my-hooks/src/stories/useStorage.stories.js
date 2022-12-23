import storage from '../hooks/useStorage.js';

export default {
  title: 'Hook/useStorage',
};

export const Default = () => {
  const [localStatus, setLocalStatus] = storage.useLocal(
    'statusLocal',
    '404 NOT FOUND'
  );
  const [sessionStatus, setSessionStatus] = storage.useSession(
    'statusSession',
    '404 NOT FOUND'
  );

  return (
    <>
      <div>
        <button onClick={() => setLocalStatus('200 OK')}>Resend(Local)</button>
        {localStatus}
      </div>
      <div>
        <button onClick={() => setSessionStatus('200 OK')}>
          Resend(Session)
        </button>
        {sessionStatus}
      </div>
    </>
  );
};
