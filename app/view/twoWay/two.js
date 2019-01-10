Ext.define('extdemo.view.twoWay.two',{
	extend:'Ext.panel.Panel',
	alias:'two.ways',
	xtype:'ways',

	width:300,
	height:500,
	controller:'ways',
	plugins:'viewport',
	viewModel:{
		data:{
			title:'the title'
		}
	},

	bind:{
		title:'{title}'
	},

	items:{
		xtype:'textfield',
		fieldLabel:'TITLE',
		labelWidth:50,
		//文本域在数据绑定的默认配置是“value”
		bind:'{title}'
	},

	tbar:[{
		text:'Random Title',
		handler:'changeTitle'
	}]
});