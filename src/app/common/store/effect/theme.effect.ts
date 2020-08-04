import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ThemeService } from '../../service/theme/theme.service';
import { toggle } from '../action/theme.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ThemeEffects {
    public toggleTheme$ = createEffect(() => this.actions$.pipe(
            ofType(toggle),
            mergeMap(() => this.themeService.toggle()
                .pipe(
                    map((theme: string) => ({type: '[Theme Service] Theme change success', payload: theme})),
                    catchError(() => of({type: '[Theme Service] Theme change failed'}))
                )
            )
        )
    );

    constructor(private actions$: Actions, private themeService: ThemeService) {}
}
