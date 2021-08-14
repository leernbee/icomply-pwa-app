import { IonPage, IonContent } from '@ionic/react';
import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed = {
  width: '1px',
  height: '1px',
  minWidth: '100%',
  minHeight: '100%',
};

const App = () => {
  return (
    <IonPage>
      <IonContent className="ion-no-padding">
        <IframeResizer
          src="https://app.copperbell.co"
          title="Copperbell Web"
          frameBorder="0"
          allowFullScreen
          style={styleWebformIframeEmbed}
        />
      </IonContent>
    </IonPage>
  );
};

export default App;
