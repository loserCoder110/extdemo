Ext.define('basicTree',{
	extend:'Ext.tree.Panel',
	xtype:'bbbttt',
	title:'Basic Tree Data Test',
	width:300,
	height:300,
	lines:false,
	useArrows:true,	
	renderTo:Ext.getBody(),  //将表格展示出来的函数 
	store:'basicdata',
	rootVisiable:false,

	viewConfig:{
		plugins:{
			ptype:'treeviewdragdrop', //拖拽组件
			containerScroll:true
		}
	}


});