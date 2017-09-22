import {
  Directive,
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appExpDate]'
})
export class ExpirationDirective {

  @HostListener('input', ['$event'])

  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '').replace('/', '');
    if (trimmed.length > 4) {
      trimmed = trimmed.substr(0, 4);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 2) {
      numbers.push(trimmed.substr(i, 2));
    }

    input.value = numbers.join(' / ');
  }

  constructor() { }

}
