export const MenuItems = [
  {
    title: 'Home',
    component: 'Home',
    icon: 'glyphicon glyphicon-home',
	id: 'Home_id',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'About',
    component: 'About',
	icon: 'glyphicon glyphicon-picture',
	id: 'About_id',
    selected: false,
    expanded: false,
    order: 0
  },
  {
    title: 'Charts',
    component: 'Charts',
    icon: 'glyphicon glyphicon-picture',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Chartist.Js',
        component: 'ChartistJs',
		icon: 'glyphicon glyphicon-picture',
		id: 'ChartistJs_id'
      },
    ]
  }
];
