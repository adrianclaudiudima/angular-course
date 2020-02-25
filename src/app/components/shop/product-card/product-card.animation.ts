import {animate, state, style, transition, trigger} from '@angular/animations';

export const showConfigure = trigger('slideIn', [
  state('hidden', style({
    opacity: 0
  })),
  transition('shown => hidden', [
    style({
      opacity: 1,
      transform: 'translateY(0)'
    }), animate(300, style({
      opacity: 0,
      transform: 'translateY(40px)'
    }))
  ]),
  transition('hidden => shown', [
    style({
      opacity: 0,
      transform: 'translateY(40px)'
    }), animate(300, style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
  ])
]);
