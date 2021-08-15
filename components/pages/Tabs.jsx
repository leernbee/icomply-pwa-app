import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { cog, globeOutline, newspaperOutline } from 'ionicons/icons';

import Home from './App';
import Settings from './Settings';
import News from './News';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/app" component={Home} exact={true} />
        <Route path="/tabs/news" component={News} exact={true} />
        <Route path="/tabs/settings" component={Settings} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/app" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" id="appTabBar">
        <IonTabButton tab="tab1" href="/tabs/app">
          <IonIcon icon={globeOutline} />
          <IonLabel>App</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/news">
          <IonIcon icon={newspaperOutline} />
          <IonLabel>News</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
