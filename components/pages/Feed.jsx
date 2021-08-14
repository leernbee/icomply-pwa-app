import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed = {
  width: '1px',
  minWidth: '100%',
  height: '100%'
};

const Feed = () => {
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coppebell App</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/* <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} /> */}
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

export default Feed;
