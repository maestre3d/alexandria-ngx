import { createReducer, on, Action } from '@ngrx/store';
import { IUser } from '../../../domain/entity/user.entity';
import { signIn, signOut } from '../action/credential.action';

export const initialState: IUser = null;

const credReducerFunc = createReducer(
    initialState,
    on(signIn, (state, { creds }) => state),
    on(signOut, state => state)
);

export function credentialReducer(state: IUser, action: Action): IUser {
    return credReducerFunc(state, action);
}
