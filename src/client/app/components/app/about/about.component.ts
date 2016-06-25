import {BaseComponent} from '../../../frameworks/core.framework/index';

@BaseComponent({
  selector: 'sd-about',
  templateUrl: './app/components/app/about/about.component.html',
  styleUrls: ['./app/components/app/about/about.component.css']
})

export class AboutComponent  {
    productSales: any[];

    constructor() {
        this.productSales = this.getSales();
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
