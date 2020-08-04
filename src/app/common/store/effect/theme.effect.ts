import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ThemeService } from '../../service/theme/theme.service';
import { toggle, reset, inject } from '../action/theme.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ThemeKind } from '@alexandria/enum/theme.enum';

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

    public injectTheme$ = createEffect(() => this.actions$.pipe(
        ofType(inject),
        mergeMap((props) => this.themeService.inject(props.theme)
            .pipe(
                map(() => ({type: '[Theme Service] Theme inject success'})),
                catchError(() => of({type: '[Theme Service] Theme inject failed'}))
            )
        )
    ));

    public resetTheme$ = createEffect(() => this.actions$.pipe(
        ofType(reset),
        mergeMap(() => this.themeService.inject(ThemeKind.Light)
            .pipe(
                map(() => ({type: '[Theme Service] Theme inject success'})),
                catchError(() => of({type: '[Theme Service] Theme inject failed'}))
            )
        )
    ));

    constructor(private actions$: Actions, private themeService: ThemeService) {}
}
