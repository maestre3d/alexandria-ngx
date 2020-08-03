import { createReducer, on, Action } from '@ngrx/store';
import { toggle, reset } from '../action/theme.action';
import { ThemeKind } from '../../enum/theme.enum';

export const initialState = ThemeKind.Light;

const _themeReducer = createReducer(initialState,
    on(toggle, state => state === ThemeKind.Light ? ThemeKind.Dark : ThemeKind.Light),
    on(reset, state => ThemeKind.Light)
);

export function themeReducer(state: ThemeKind, action: Action) {
    return _themeReducer(state, action);
}
