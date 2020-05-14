import React, { useEffect, useState } from 'react';
import {
  IonApp,
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { FCM } from '@ionic-native/fcm';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    FCM.hasPermission().then((permission) => setHasPermission(permission));
    FCM.getToken().then((token) => setToken(token));
  });
  return (
    <IonApp>
      <IonPage>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Permission: </IonLabel>
              <IonInput value={String(hasPermission)} />
            </IonItem>
            <IonItem>
              <IonLabel>Token: </IonLabel>
              <IonInput value={token} />
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
