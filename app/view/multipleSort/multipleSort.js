/*Ext.define('extdemo.view.multipleSort',{
	extend:'Ext.panel.Panel',
	alias:'view.multipleSort',
	xtype:'array-grid4',
	controller:'multipleSort',

	requires:[
	'Ext.grid.column.Action',
	'extdemo.store.CompanyStore'
	],

	title:'multipleSort test',
	width:750,
	height:800,
	//columnLines:true,
	plugins:'viewport',

	viewConfig:{
		enableTextSelection:true
	},

	items:[
	{
		xtype:'grid',
		title:'grid about multipleSort',
	/*		width:500,
			height:500,*/
/*	columnLines:true,	//设置表格的列框线	
	store:{
		type:'company',
		autoLoad:true
	},
	columns:[
	{
		xtype:'rownumberer'},//设置排序号
	{
		text:'Company',
		//flex:1,
		sortable:true,
		//dataIndex字段要对应到Model中对应的属性名，才可以获取到对应的数据
		dataIndex:'name'
	},{
		text:'price',
		width:95,
		sortable:true,//可以正序或者逆序
		formatter:'usMoney',
		dataIndex:'price'
	},{
		text:'Change',
		width:80,
		sortable:true,
		//renderer:'renderChange',
		dataIndex:'change'
	},{
		text:'%Change',
		width:100,
		sortable:true,
		//renderer:'renderPercent',
		dataIndex:'pctChange'
	},{
		text: 'Last Updated',
		width: 115,
		sortable: true,
		formatter: 'date("m/d/Y")',
		dataIndex: 'lastChange'
	}, {
		menuDisabled: true,
		sortable: false,
		xtype: 'actioncolumn',
		width: 50,
       // items: ['@sell', '@buy']
   }],
}]


/*    tbar:[
    	'@abcdefg'
    	]*/
/*});
/