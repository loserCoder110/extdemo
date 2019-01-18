Ext.define('treePanel',{
	extend:'Ext.tree.Panel',
	xtype:'tree-grid',
	title:'Basic Tree Grid',
	width:500,
	height:450,
	store:'TreeGrid',
	rootVisible:false,
	useArrows:true,
	lines:false,
	scope:this,
	renderTo:Ext.getBody(),



	columns:[{
		xtype:'treecolumn',//让树状结构像一个表格一样呈现出来
		text:'Name',
		flex:1,
		sortable:true,
		dataIndex:'name'
	},{
		text:'Population(millions)',
		sortable:true,
		width:150,
		dataIndex:'population'
	},{
		text:'Area(millions km^2)',
		width:150,
		sortable:true,
		dataIndex:'area'
	}]
});