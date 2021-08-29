/* eslint-disable react/display-name */
import IframeResizer from 'iframe-resizer-react';
import { useA2HS } from 'react-use-a2hs';
import { confirmAlert } from 'react-confirm-alert';

const App = () => {
  const [promptEvent, promptToInstall] = useA2HS();

  return (
    <>
      <IframeResizer
        src="https://web.copperbell.co"
        title="App - Copperbell"
        frameBorder="0"
        allowFullScreen
        style={{ width: '1px', height: '1px', minWidth: '100%', minHeight: '100%' }}
        checkOrigin={false}
        inPageLinks={false}
      />
      {promptEvent &&
        confirmAlert({
          title: 'Install Copperbell',
          message: 'Add Copperbell to Home screen',
          buttons: [
            {
              label: 'Yes',
              onClick: promptToInstall,
            },
            {
              label: 'No',
              onClick: () => {},
            },
          ],
        })}
    </>
  );
};

export default App;
