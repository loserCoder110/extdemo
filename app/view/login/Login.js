Ext.define('extdemo.view.login.Login',{
	extend: 'Ext.form.Panel',
	xtype: 'login',

	//初始化之前将所有需要的依赖包含进来
	requires: ['extdemo.view.login.LoginController'
	],

	//指派ViewController
	controller: 'login',
	bodyPadding: 10,
	title: 'Login Page',
	closable: false,
	autoShow: true,
	plugins: 'viewport',


	//在新面板上添加form表单
	items:{
		xtype:'form',
		reference:'form',
		//layout:'column',
		items:[{
			xtype:'textfield',
			name: 'username',
			fieldLable: 'UserName',
			allowBlank:false
		},{
			xtype:'textfield',
			name: 'password',
			inputType: 'password',
			fieldLable: 'Password',
			allowBlank:false
		},{
			xtype: 'displayfield',
			hideEmptyLable:false,
			value: 'Enter any non-blank password'
		}],
		buttons:[{
			text:'Login in',
			formBind:true,
			listeners:{
				click:'onLoginClick'
			}
		}]
	}

});








