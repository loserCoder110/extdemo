Ext.define('extdemo.view.dynamic.dynamic',{
	extend:'Ext.panel.Panel',
	//alias:'view.dynamic',
	xtype:'wwww',
	width:500,
	bodyPadding:10,


	requires:['extdemo.view.dynamic.dynamicController'],

	plugins: 'viewport',
	controller:'dynamic',
	viewModel:{
		data:{
			title:'ABCDEF',
			content:'some content'
		}
	},

	bind:{
		title:'Info----{title}',
		html:'Info----{content}',
	},


	tbar:[{
		text:'Change title',
		listeners:{
			click:'chanegTitle'
			}
		},{
		text:'Change context',
		listeners:{
			click:'chanegContext'
		}
		}
	]

})