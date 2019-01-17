Ext.define('extdemo.view.companyCategory.companyCate',{
	extend:'Ext.panel.Panel',
	requires:[
			'extdemo.view.companyCategory.companyCateController',
			'extdemo.view.companyCategory.companyCateModel',
	],
	xtype:'app-companycate',
	controller:'companyCate123',
	viewModel:{
		type:'companyCateModel'
	},
	plugins:'viewport',

/*	layout: {
		type: 'vbox',
		align: 'stretch'
	},*/
	
	items: [{
		xtype:'form',
		title:'Company Category 233 吐槽团'
	}, {
		xtype:'grid',
		reference:'cateGrid',
		border: true,
		plain: true,
		columnLines:true,
		//scrollable:true,
	//	autoScroll:true,
		plugins:[{
			ptype:'rowediting',
			clicksToMoveEditor:1,
			autoCancel:true //点击另一行来取消
		}],
		listeners:{
			selectiongchange:'onSelectionchange'
		},
		store:'test',
		title:'Company Category',

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
		},

		dockedItems:[{
			xtype:'pagingtoolbar',
			store:'test',
			dock:'bottom',
			displayInfo:true
		},{
			xtype:'toolbar',
			dock:'top',
			ui:'footer',
			items:['->',{   //此处 “ '->' ”可以将按钮顶到最右边
				text:'Remove',
				reference:'btnR',
				disabled:true,
				listeners:{
					click:'onRemove'
				},
			},{
				text:'Create',
				listeners:{
					click:'onCreate'
				},
			},{
				text:'Save',
				listeners:{
					click:'onSave'
				},
			}]
		}]
	}]
	
})