Ext.define('extdemo.store.BookStore',{
	extend:'Ext.data.Store',
	alias:'store.book',
	model:'extdemo.model.Book',
	data:[
		{author:'Sidney Sheldon',title:'Master of the Game',manufacturer:'ABC Pub',productGroup:'Book'},
		{author:'Sidney Sheldon',title:'Are You Afraid of Dark?',manufacturer:'JX Pub',productGroup:'Book'},
		{author:'Sidney Sheldon',title:'If Tomorrow Comes',manufacturer:'Uni Pub',productGroup:'Book'},
		{author:'Sidney Sheldon',title:'Tell Me You Dreams',manufacturer:'ABC Pub',productGroup:'Book'},
		{author:'Sidney Sheldon',title:'Bloodline',manufacturer:'CCTV Pub',productGroup:'Book'}	
	]
});