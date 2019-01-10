Ext.define('extdemo.view.company.companyController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.company',

	
    showThisData:function(){
        Ext.create({
            xtype:'array-grid2'
        })
    }
	
	});