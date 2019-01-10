Ext.define('extdemo.view.dynamic.dynamicController',{
	extend:'Ext.app.ViewController',
	alias:'controller.dynamic',

	contentCount:0,
	titleCount:0,

	chanegTitle:function(){
		this.getViewModel().set('title','New Title'+ ++this.titleCount);

	},

	chanegContext:function(){
		this.getViewModel().set('content','New Content'+ ++this.contentCount);
	}


});