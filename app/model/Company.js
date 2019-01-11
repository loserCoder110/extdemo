Ext.define('extdemo.model.Company',{
	extend:'Ext.data.Model',
	fields:[
        {name: 'name'},
        {name: 'phone'},
        {name: 'price', type: 'float'},
        {name: 'change', type: 'float'},
        {name: 'pctChange', type: 'float'},
        {name: 'lastChange', type: 'date',  dateFormat: 'n/j'},
        {name: 'industry'},
        {name: 'desc'}
	]
});