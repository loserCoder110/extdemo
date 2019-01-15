Ext.define('extdemo.view.toDoList.ToDoListModel',{
	extend:'Ext.app.ViewModel',
	alias:'viewmodel.toDoList',
	xtype:'toDoList',

	stores:{
		todos:{  //todos这个名字是自定义的:就是storeId
			fields:[{
				name:'id',
				type:'string'
			},{
				name:'descrip',
				type:'string'
			},{
				name:'done',
				type:'boolean'
			}],
			autoLoad:true,
			autoSync:false,
			sorters:[{
				property:'done',

				direction:'ASC'
			}],
			proxy:{
				type:'ajax',
				url:'/getToDoList',
				readers:{
					type:'json',
				},
				writer:{
					type:'json'
				}
			}
		}
	}
});