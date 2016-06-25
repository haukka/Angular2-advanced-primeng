// angular
import {ChangeDetectionStrategy, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

// app
import {NameListService} from '../../frameworks/app.framework/index';
import {AnalyticsService} from '../../frameworks/analytics.framework/index';
import {RouteComponent, PlatformDirective} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar/navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {UnderTopComponent} from './undertop.component';
import {AppState} from './app.state';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ChartsComponent} from './charts/charts.component';
import {Preloader} from './Preloader.service';
import {Spinner} from './Spinner.service';

@RouteComponent({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: './app/components/app/app.component.html',
  styleUrls: ['./app/components/app/app.component.css'],
  directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent, PlatformDirective, UnderTopComponent],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  providers: [Spinner]
})

@RouteConfig([
  {
    path: '/',
    component: HomeComponent,
    name: 'Home'
  },
  {
    path: '/about',
    component: AboutComponent,
    name: 'About'
  },
  {
    name: 'Charts',
    component: ChartsComponent,
    path: '/charts/...',
  }
])

export class AppComponent implements AfterViewInit {
  isMenuCollapsed:boolean = false;
  
  constructor(private _state:AppState, public analytics: AnalyticsService, private _spinner:Spinner) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
        this.isMenuCollapsed = isCollapsed;
      });
  }
  
  public ngAfterViewInit():void {
    // hide spinner once all loaders are completed
    Preloader.load().then((values:any) => {
      this._spinner.hide();
    });
  }
}
