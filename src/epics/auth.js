import auth0 from 'auth0-js';
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

export default action$ =>
    action$.ofType(LOGIN)
        .switchMap(() =>
            microsoftLogin(options)
                .switchMap(result =>
                    // eslint-disable-next-line lodash/prefer-lodash-method
                    userInfo(result.accessToken)
                        .map(info => ({
                            type: LOGGED_IN,
                            profile: info,
                        }))
                )
        );
