import { Component } from '@angular/core';
// import the required animation functions
import { trigger, state, animate, transition, style,query } from '@angular/animations';

export const slideInOutAnimation =
    // trigger name for attaching this animation
    trigger('slideInOutAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
        state('*', style({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        })), ]),
        transition(':enter', [

            style({
                 right: '-400%',
            }),

            // animation and styles at end of transition
            animate('1s ease-in-out', style({
           right: 0,
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            animate('1s ease-in-out', style({
                right: '-400%',
            }))
        ])
      ]),
    ]);
