import {
    trigger,
    animate,
    transition,
    style,
    query,
  } from '@angular/animations';
  
const startState = { opacity: 0 };
const endState = { opacity: 1 };

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [
            style(startState)
            ], { optional: true }
        ),
        query(':leave', [
            style({ ...endState, position: 'absolute', width: 'calc(100% - 40px)', top: '20px' }),
            animate('0.3s', style({ ...startState })),
            ], { optional: true }
        ),
        query(':enter', [
            style(startState),
            animate('0.3s', style(endState)),
            ], { optional: true }
        ),
    ]),
]);