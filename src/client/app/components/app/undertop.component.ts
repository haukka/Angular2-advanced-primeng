import {Component, ViewEncapsulation} from '@angular/core';
import {AppState} from './app.state';

@Component({
  selector: 'sd-undertop',
  templateUrl: './app/components/app/undertop.component.html',
  encapsulation: ViewEncapsulation.None
})

export class UnderTopComponent {
    public activePageTitle:any = '';

    constructor(private _state:AppState) {
      this._state.subscribe('menu.activeLink', (activeLink:any) => {
		if (activeLink) {
          this.activePageTitle = activeLink.title;
        }
      });
    }
}
