import { createReducer, on, Action } from '@ngrx/store';
import { signIn, signOut } from '../action/credential.action';
import { CognitoUser } from 'amazon-cognito-identity-js';

export const initialState: CognitoUser = null;

const credReducerFunc = createReducer(
    initialState,
    on(signIn, (state, { creds }) => state),
    on(signOut, state => state)
);

export function credentialReducer(state: CognitoUser, action: Action): CognitoUser {
    return credReducerFunc(state, action);
}
