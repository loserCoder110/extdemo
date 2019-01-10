Ext.define('extdemo.view.login.LoginController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',

	onLoginClick: function(){
		localStorage.setItem('abc',true);

		//登录成功后销毁登录页，显示主页面
		this.getView().destroy();
		//alert('1234');
		Ext.create({
			//xtype:'wwww' //更改标题和文本
			//xtype: 'ways' //两种数据绑定方式1、随机 2、改变输入文本同步到标题
			//xtype:'formulas' // 计算公式
			//xtype:'array-grid' //基本图书显示
			//xtype:'app-main'
			//xtype:'array-grid2' //公司展示
			  xtype:'array-grid4'  //多条件分类
		});
	}

	});