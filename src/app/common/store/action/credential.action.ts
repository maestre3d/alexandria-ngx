import { createAction, props } from '@ngrx/store';

export interface ICredential {
    username: string;
    password: string;
}

export const signIn = createAction('[Credential Component] Sign In', props<{ creds: ICredential }>());
export const signOut = createAction('[Credential Component] Sign Out');
