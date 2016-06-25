// app
import {BaseComponent, LogService} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar/navbar.component';
import {BaScrollPositionDirective} from './directives/baScrollPosition/baScrollPosition.directive';
import {AppState} from './app.state';
import {ViewEncapsulation} from '@angular/core';

@BaseComponent({
  selector: 'sd-toolbar',
  templateUrl: './app/components/app/toolbar.component.html',
  styleUrls: ['./app/components/app/toolbar.component.css'],
  directives: [LangSwitcherComponent, NavbarComponent, BaScrollPositionDirective],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {
    public isScrolled:boolean = false;
    public isMenuCollapsed:boolean = false;
  
  constructor(private log: LogService, private _state:AppState) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
        this.isMenuCollapsed = isCollapsed;
      });
  }
  
  public openLanguages(e: any): void {
    this.log.debug('openLanguages');
  }
  
  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
	 console.log(this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled:any) {
    this.isScrolled = isScrolled;
  }
}
