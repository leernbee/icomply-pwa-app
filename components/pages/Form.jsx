/* eslint-disable react/display-name */
import IframeResizer from 'iframe-resizer-react';
import { useA2HS } from 'react-use-a2hs';
import { confirmAlert } from 'react-confirm-alert';
import { useRouter } from 'next/router'

const Form = () => {
  const [promptEvent, promptToInstall] = useA2HS();
  const router = useRouter()
  const { fid } = router.query

  return (
    <>
      <IframeResizer
        src={`https://pw13mlsb.icomply.ph/p/form/${fid}`}
        title="App - iComply"
        frameBorder="0"
        allowFullScreen
        style={{ width: '1px', height: '1px', minWidth: '100%', minHeight: '100%' }}
        checkOrigin={false}
        inPageLinks={false}
      />
      {promptEvent &&
        confirmAlert({
          title: 'Install iComply',
          message: 'Add iComply to Home screen',
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

export default Form;
