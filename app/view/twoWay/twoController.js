Ext.define('extdemo.view.two.twoController',{
	extend:'Ext.app.ViewController',
	alias:'controller.ways',
	changeTitle:function(){
		var title = 'random'+ Ext.Number.randomInt(1,100);
		this.getViewModel().set('title',title);
	}
})