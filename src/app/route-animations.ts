import { Component } from '@angular/core';
// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
        state('*', style({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        })),
        transition(':enter', [ style({ right: '-400%', }),
       
        animate('.5s ease-in-out', style({right: 0, }))
         ]),     
                

        transition(':leave', [animate('.5s ease-in-out', style({right: '-400%', }))]
        
    ]);

