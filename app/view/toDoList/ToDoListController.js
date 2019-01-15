Ext.define('extdemo.view.toDoList.ToDoListController',{
	extend:'Ext.app.ViewController',
	alias:'controller.toDoList',
	views:['extdemo.view.toDoList.ToDoList'],//有的地方要写这个views，有的地方又不用，如何？
	init:function(){
		var me = this;
		var vm = this.getViewModel();
		var store = vm.getStore('todos');

/*		store.on('load', function(store){
			alert(store.getCount());
		});*/

		/**/
		this.getViewModel().data.todos.load(function(records){
			Ext.each(records,function(record){
				//为每条待办添加一个容器
				me.addToDoToView(record);
			});
		});
		Ext.getBody().on('click',function(event,target){
			alert(aaa);
			me.onDelete(event,target);
		},null,{
			delegate:'.fa-times'
		});
	},

	onAddToDo:function(){
		var store = this.getViewModel().data.todos;
		var desc = this.lookupReference('newTodo').value.trim();
		if (desc!='') {
			Ext.Ajax.request({
				url:'/create',
				params:{
					descrip:desc
				},
				method:'post',
				callback:function(options,success,response){
					Ext.Msg.alert('Add success!');
				}
			});

			store.add({
				descrip:desc
			});
			var store = this.getViewModel().getStore('todos');
			alert('11');
			//this.init();
			store.sync({
				success:function(batch,options){
					this.lookupReference('newTodo').setValue('');
					this.addToDoToView(options.operations.create[0]);
				},
				scope:this
			});
			}		
		},

	addToDoToView:function(record){
		this.view.add([{
			xtype:'container',
			layout:'hbox',
			cls:'row',
			items:[{
				xtype:'checkbox',
				boxLabel:record.get('descrip'),
				checked:record.get('done'),
				flex:1,
				listeners:{
					change:{
						fn:function(component,newValue,oldValue){
							var store = this.getViewModel().data.todos;
							record.set('done',newValue);
							store.sync();
						},
						scope:this
					}
				}
			},{
				html:'<a class="hidden" href="#"><i taskId="'+record.get('id')+'" class="fafa-times"></i></a>',
			}]
		}]);
	},



	onDelete:function(event,target){
		var store = this.getViewModel.data.todos;
		var targetCmp = Ext.get(target);
		var id = targetCmp.getAttribute('taskId');
		store.remove(store.getById(id));
		store.sync({
			success:function(){
				this.view.remove(targetCmp.up('.row').id)
			},
			scope:this
		});	
}
});