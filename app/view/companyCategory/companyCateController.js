Ext.define('extdemo.view.companyCategory.companyCateController',{
	extend:'Ext.app.ViewController',
	alias:'controller.companyCate123',

	onSelectionchange:function(){
		alert('123');
		this.lookupReference('btnR').enable();
	},

	onSave:function(){
		Ext.getStore('cateGrid').save();
	},

	onRemove:function(){
		var grid = this.lookupReference('cateGrid');
		var sm = grid.getSelectionModel();
		grid.plugins[0].cancelEdit();
		grid.getStore().remove(sm.getSelection());
		if (grid.getStore().getCount()>0) {
			sm.select(0);
		}
	},

	onCreate:function(){
		alert('dsf');
		var grid = this.lookupReference('cateGrid');
		grid.plugins[0].cancelEdit();
		var r = Ext.create();
		gird.getStore().insert(0,r);
		grid.plugins[0].startEdit(0,0); 
	}



})