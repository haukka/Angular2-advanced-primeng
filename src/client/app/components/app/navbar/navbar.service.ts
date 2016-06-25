import {Injectable} from '@angular/core';
import {MenuItems} from './app.menu';

@Injectable()
export class NavbarService {

  private _router:any;

  public getMenuItems():Array<Object> {
    return MenuItems;
  }

  public setRouter(router:any): NavbarService {
    this._router = router;
    return this;
  }

  public selectMenuItem(items:Array<any>, currentPath:string) {
    let currentMenu:any;

    let assignCurrent = (menu:any) => (menu.selected ? currentMenu = menu : null);

    items.forEach((menu: any) => {

      this._selectItem(currentPath, [menu.component], menu);
      assignCurrent(menu);

      if (menu.subMenu) {
        menu.subMenu.forEach((subMenu:any) => {
          this._selectItem(currentPath, [menu.component, subMenu.component], subMenu, menu);
          assignCurrent(subMenu);
        });
      }
    });
    return currentMenu;
  }

  private _selectItem(currentPath:any, instructions:any, item:any, parentMenu:any = null) {
    let route = this._generateRoute(instructions);
    item.selected = !item.disabled && this._isCurrent(route) && this._resolvePath(route, '') === currentPath;
    if (parentMenu) {
      parentMenu.expanded = parentMenu.expanded || item.selected;
    }
  }

  private _isCurrent(route:any) {
    return route ? this._router.isRouteActive(route) : false;
  }

  private _generateRoute(instructions:any) {
    return instructions.filter((i:any) => typeof i !== 'undefined').length > 0 ? this._router.generate(instructions) : null;
  }

  private _resolvePath(instruction:any, collected:any):any {
    if (instruction !== null) {
      collected += instruction.urlPath + '/';
      return this._resolvePath(instruction.child, collected);
    } else {
      return collected.slice(0, -1);
    }
  }
}
