import {BaseComponent} from '../../../frameworks/core.framework/index';
import {UIChart} from 'primeng/primeng';
import {ViewEncapsulation} from '@angular/core';

@BaseComponent({
  selector: 'sd-about',
  templateUrl: './app/components/app/about/about.component.html',
  styleUrls: ['./app/components/app/about/about.component.css'],
  directives: [UIChart],
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent  {
    productSales: any[];
	 data: any;
    constructor() {
        this.productSales = this.getSales();
	    this.data = {
	              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	              datasets: [
	                  {
	                      label: 'My First dataset',
	                      backgroundColor: '#42A5F5',
	                      borderColor: '#1E88E5',
	                      data: [65, 59, 80, 81, 56, 55, 40]
	                  },
	                  {
	                      label: 'My Second dataset',
	                      backgroundColor: '#9CCC65',
	                      borderColor: '#7CB342',
	                      data: [28, 48, 40, 19, 86, 27, 90]
	                  }
	              ]
	          };
    }
		
	getSales(): any[] {
        var productSales = [
		            { name: 'Televisions', units: 'M', current: 8.3, target: 7.5 },
		            { name: 'Computers', units: 'M', current: 8.1, target: 8 },
		            { name: 'Video Games', units: 'M', current: 8.1, target: 7.5 },
		            { name: 'Home Audio', units: 'M', current: 6.8, target: 6.5},
		            { name: 'Car Audio', units: 'M', current: 6.4, target: 6.5 },
		            { name: 'Appliances', units: 'M', current: 4.1, target: 4 },
		            { name: 'DVDs', units: 'M', current: 3.1, target: 4 },
		            { name: 'Furniture', units: 'M', current: 2.3, target: 2 }
		        ];
		        return productSales;
   }
}
