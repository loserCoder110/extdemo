//这里并没有使用Controller，在view里面并没有函数，直接使用ViewModel。值得注意
Ext.define('extdemo.view.formulas.formulasModel',{
	extend:'Ext.app.ViewModel',
	alias:'viewmodel.233',

	formulas:{
		quad:function(get){
			return get('twice')*2;
		},
		twice:{
			get:function(get){
				return get('x')*2;
			}
		}
	}
});




