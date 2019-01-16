Ext.define('extdemo.view.companyCategory.companyCate',{
	extend:'Ext.panel.Panel',
	requires:[
			'extdemo.view.companyCategory.companyCateController',
			'extdemo.view.companyCategory.companyCateModel',
	],
	xtype:'app-companycate',
	controller:'companyCate123',
	viewModel:{
		type:'companyCate'
	},

/*	store:{
		type:'companyCateStore',
		autoLoad:true
	},*/

	items:[{
		xtype:'container',
		items:[{
			xtype:'container',
			layout:'hbox',
			cls:'contact-list',
			defaults:{
				flex:1
			},
			items:[{
				xtype:'grid',
				reference:'cateGrid',
				scrollable:true,
				autoScroll:true,
				plugins:[{
					ptype:'rowediting',
					clicksToMoveEditor:1,
					autoCancel:false
				}],
				listeners:{
					selectiongchange:'onSelectionchange'
				},
				flex:1,
				store:'companyCateStore',
				autoLoad:true,
				title:'Company Category',
				pageSize:10,
				columns:{
					defaults:{
						editor:{
							xtype:'textfield',
							allowBlank:false
						}
					},
					items:[{
						text:'First Name',
						width:100,
						dataIndex:'fname'
					},{
						text:'Last Name',
						width:100,
						dataIndex:'lname'
					},{
						text:'Eamil',
						maxWidth:500,
						flex:1,
						dataIndex:'email',
						editor:{
							vtype:'email'
						}
					},{
						text:'Address',
						flex:1,
						maxWidth:500,
						dataIndex:'address'
					},{
						text:'City',
						width:100,
						dataIndex:'city'
					},{
						text:'State',
						width:100,
						dataIndex:'state',
					},{
						text:'Type',
						width:100,
						dataIndex:'type'
					},{
						text:'Phone Number',
						width:150,
						dataIndex:'phone'
					}]
				}
			}]
		}]
	}]



})