Ext.define('extdemo.view.formulas.formulas',{
	extend:'Ext.panel.Panel',
	alias:'view.formulas',
	xtype:'formulas',

	title:'formulas test one',
	plugins:'viewport',

	width:600,
	bodyPadding:10,                        

	viewModel:{
		type:'233',//这里的type会对应到一个ViewModel
		data:{
			x:10
		}
	},

	items:[{
		xtype:'numberfield',
		fieldLabel:'Number',
		bind:'{x}'
	},{
		xtype:'displayfield',
		fieldLabel:'result',
		bind:'{x}*2 = {twice}   / {x}*4 = {quad} '
	}]
});