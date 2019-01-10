Ext.define('extdemo.view.book.bookController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.bookViewC',

	
    showThisData:function(){
        Ext.create({
            xtype:'array-grid'
        })
    }
	
	});