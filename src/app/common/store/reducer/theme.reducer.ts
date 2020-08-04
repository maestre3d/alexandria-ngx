import { createReducer, on, Action } from '@ngrx/store';
import { toggle, reset, inject } from '../action/theme.action';
import { ThemeKind } from '../../enum/theme.enum';

const persistedTheme = localStorage.getItem('prefers-color');
export const initialState = persistedTheme === ThemeKind.Dark ? persistedTheme : ThemeKind.Light;

const _themeReducer = createReducer(initialState,
    on(toggle, state => state === ThemeKind.Light ? ThemeKind.Dark : ThemeKind.Light),
    on(inject, (state, { theme }) => theme === ThemeKind.Light ? theme : state),
    on(reset, state => ThemeKind.Light)
);

export function themeReducer(state: ThemeKind, action: Action) {
    return _themeReducer(state, action);
}
