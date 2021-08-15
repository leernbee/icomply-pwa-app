import IframeResizer from 'iframe-resizer-react';

const App = () => {
  return (
    <>
      <IframeResizer
        src="https://web.copperbell.co"
        title="Copperbell"
        frameBorder="0"
        allowFullScreen
        style={{ width: '1px', height: '1px', minWidth: '100%', minHeight: '100%' }}
        checkOrigin={false}
        inPageLinks={false}
      />
    </>
  );
};

export default App;
