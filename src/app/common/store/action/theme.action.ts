import { createAction, props } from '@ngrx/store';
import { ThemeKind } from '@alexandria/enum/theme.enum';

export const toggle = createAction('[Theme Component] Toggle');
export const inject = createAction('[Theme Component] Inject', props<{theme: ThemeKind}>());
export const reset = createAction('[Theme Component] Reset');
