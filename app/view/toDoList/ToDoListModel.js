Ext.define('extdemo.view.toDoList.ToDoListModel',{
	extend:'Ext.app.ViewModel',
	alias:'viewmodel.toDoList',
	xtype:'toDoList',

	stores:{
		todos:{  //todos这个名字是自定义的
			fields:[{
				name:'id',
				type:'string'
			},{
				name:'desc',
				type:'string'
			}],
			autoLoad:true,
			sorters:[{
				property:'done',
				direction:'ASC'
			}],
			proxy:{
				type:'jsonp',
				url:'http://localhost:8080/getToDoList',
				
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