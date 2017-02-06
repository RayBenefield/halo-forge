import auth0 from 'auth0-js';
import assignIn from 'lodash/assignIn';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindNodeCallback';
import 'rxjs/add/operator/switchMap';
import { LOGIN, LOGGED_IN } from 'src/actions';

const auth = new auth0.WebAuth({
    domain: 'raybenefield.auth0.com',
    clientID: 'BZott2fjvPVpCyDWf61yC5XJSUUOCKMA',
});
const options = {
    connection: 'windowslive',
    responseType: 'token',
    scope: 'openid profile',
};

const microsoftLogin = Observable.bindNodeCallback(auth.popup.authorize.bind(auth.popup));
const userInfo = Observable.bindNodeCallback(auth.client.userInfo.bind(auth.client));
const delegateAuth = new auth0.Authentication({
    domain: 'raybenefield.auth0.com',
    clientID: 'BZott2fjvPVpCyDWf61yC5XJSUUOCKMA',
});
const firebaseDelegate = Observable.bindNodeCallback(delegateAuth.delegation.bind(delegateAuth));

export default action$ =>
    action$.ofType(LOGIN)
        .switchMap(() =>
            microsoftLogin(options)
                .switchMap(auth0tokens =>
                    firebaseDelegate({
                        id_token: auth0tokens.idToken,
                        api: 'firebase',
                        scope: 'openid name email displayName',
                        target: 'BZott2fjvPVpCyDWf61yC5XJSUUOCKMA',
                        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    })
                        .switchMap(firebaseTokens =>
                            // eslint-disable-next-line lodash/prefer-lodash-method
                            userInfo(auth0tokens.accessToken)
                                .map(info => ({
                                    type: LOGGED_IN,
                                    profile: assignIn(info, { auth0tokens, firebaseTokens }),
                                }))
                        )
                )
        );
