Ext.define('extdemo.view.toDoList.ToDoListController',{
	extend:'Ext.app.ViewController',
	alias:'controller.toDoList',
	views:['extdemo.view.toDoList.ToDoList'],//有的地方要写这个views，有的地方又不用，如何？
	init:function(){
		alert('begin init');
		var me = this;
		var vm = this.getViewModel();
		var store = vm.getStore('todos');

		store.on('load', function(store){
			alert(store.getCount());
		});

		/**/
		this.getViewModel().data.todos.load(function(records){
			//alert('sdfa');
			Ext.each(records,function(record){
				//为每条待办添加一个容器
				//alert('132');
				me.addToDoToView(record);
			});
		});
		Ext.getBody().on('click',function(event,target){
			me.onDelete(event,target);
		},null,{
			delegate:'.fa-times'
		});
	},

	onAddToDo:function(){

		var vm = this.getViewModel();
		var store = vm.getStore('todos');
		store.reload();

		/**/
		this.getViewModel().data.todos.load(function(records){
			alert('sdfa');
			Ext.each(records,function(record){
				//为每条待办添加一个容器
				alert('132');
				me.addToDoToView(record);
			});
		});

		/*var store = this.getViewModel().data.todos;
		var desc = this.lookupReference('newTodo').value.trim();
		if (desc!='') {
			store.add({
				desc:desc
			});
			store.sync({
				success:function(batch,options){
					this.lookupReference('newTodo').setValue('');
					this.addToDoToView(options.operations.create[0]);
				},
				scope:this
			});
		}*/
	},

	addToDoToView:function(record){
		this.view.add([{
			xtype:'container',
			layout:'hbox',
			cls:'row',
			items:[{
				xtype:'checkbox',
				boxLabel:record.get('desc'),
				checked:record.get('done'),
				flex:1
			},{
				html:'<a  class="hidden"  href="#"><i  taskId="'+record.get('id')+'"  class="fafa-times"></i></a>'
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
