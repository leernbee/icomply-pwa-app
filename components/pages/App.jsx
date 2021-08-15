import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed = {
  width: '1px',
  height: '1px',
  minWidth: '100%',
  minHeight: '100%',
};

const url = 'https://web.copperbell.co';

const App = () => {
  return (
    <IframeResizer
      src={url}
      title="Copperbell Web"
      frameBorder="0"
      allowFullScreen
      style={styleWebformIframeEmbed}
      checkOrigin={false}
    />
  );
};

export default App;
