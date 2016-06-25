// libs
import {Store} from '@ngrx/store';

// app
import {FormComponent} from '../../../frameworks/core.framework/index';
import {NameListService} from '../../../frameworks/app.framework/index';
import { FORM_DIRECTIVES } from '@angular/common';
import { Inject } from '@angular/core';
import {NameService} from './services/name-service';

@FormComponent({
  selector: 'sd-home',
  templateUrl: './app/components/app/home/home.component.html',
  styleUrls: ['./app/components/app/home/home.component.css'],
	directives: [FORM_DIRECTIVES],
  providers: [NameService]
})

export class HomeComponent {
  public newName: string = '';
  public theNumber: Number = 0;
  today: Date;
  minDate: Date;
  maxDate: Date;
  name: String;
  public radioModel:string = 'Middle';
   
  constructor(private store: Store<any>, public nameListService: NameListService, @Inject(NameService) nameService:any) { 
	  this.theNumber = 123;
	  this.name = nameService.getName();
	   let today = new Date();
	   this.today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30);
	   this.minDate = new Date(today.getFullYear(), 0, 1);
	   this.maxDate = new Date(today.getFullYear(), 11, 31);
  }
  
  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
