Ext.define('extdemo.view.customer',{
	extend:'Ext.container.Viewport',
	xtype:'customer',
	scrollable:true, //滚动，也可以取值'x'或'y',表示只允许水平或垂直滚动
	items:[{
		xtype:'container',
		layout:{
			type:'hbox',
			align:'center',
			pack:'center'
		},
		items:[{
			xtype:'form',
			bodyPadding:10,
			maxWidth:700,
			flex:1,
		/*	defaultType:'textfield',
			defaults:{
				allowBlank:false,
				flex:1
			},*/
			title:'Customer Feedback',
			items:[{
				xtype:'fieldcontainer', //绑定两个文本框
				layout:'hbox',
				fieldLabel:'Name',
				//容器级设置，
				defaultType:'textfield',
				defaults:{
					allowBlank:false,
					flex:1
				},
				items:[{
					name:'firstName',
					emptyText:'First Name' //placeholder
				},{
					name:'lastName',
					margin:'0 0 0 5',
					emptyText:'Last Name'
				}]
			},{
				xtype:'datefield',
				fieldLabel:'Date of Birth',
				name:'dob',
				maxValue:new Date()
			},{
				xtype:'textfield',   //xtype 很重要，这里没写的话就没有这个Email的了
				fieldLabel:'Email Address',
				name:'email',
				vtype:'email',
				allowBlank:false
			},{
				xtype:'textfield',
				fieldLabel:'Phone Number',
				labelWidth:100,
				name:'phone',
				width:300,
				emptyText:'xxx-xxx-xxxx',//placeholder
				maskRe:/[\d\-]/,
				regex:/^\d{3}-\d{3}-\d{4}$/,
				regexText:'The format must be xxx-xxx-xxxx'
			},{
				xtype:'numberfield',
				fieldLabel:'How many times have you purchased our product?',
				name:'times',
				value:0,
				minValue:0
			},{
				xtype:'radiogroup',
				fieldLabel:'How satisfied with our service?',
				vertical:true,
				columns:1,
				items:[{
					boxLabel:'Very satisfied',
					name:'rb',
					inputValue:'1'
				},{
					boxLabel:'Satisfied',
					name:'rb',
					inputValue:'2'
				}]
			},{
				xtype:'checkboxgroup',
				fieldLabel:'Which of these words would you use to describe our products?Select apply',
				vertical:true,
				columns:1,
				items:[{
					boxLabel:'Reliable',
					name:'ch',
					inputValue:'1'
				},{
					boxLabel:'High Quality',   //boxLabel别写错了属性名，不认出不来
					name:'ch',
					inputValue:'2'
				},{
					boxLabel:'Good value for money',
					name:'ch',
					inputValue:'3'
				},{
					boxLabel:'Overpriced',
					name:'ch',
					inputValue:'4'
				},{
					boxLabel:'Poor quality',
					name:'ch',
					inputValue:'5'
				},]
			},{
				xtype:'radiogroup',
				fieldLabel:'How likely is it that you would recommend this company to your friends or colleagues?',
				vertical:false,
				defaults:{padding:20},
				items:[{
					boxLabel:'yes',
					name:'recommend',
					inputValue:'1'
				},{
					boxLabel:'no',
					name:'recommend',
					inputValue:'0'
				}]
			},{
				//备注评论
				xtype:'textareafield',
				name:'comment',
				width:500,
				fieldLabel:'Comment'
			},{
				buttons:[{
					text:'Submit',
					handler:function(){
						var form = this.up('form').getForm();
						if (form.isValid()) {
							form.submit({
								url:'customer/feedback',
								success:function(){
									Ext.Msg.alert('success','Form success!!')
								},
								failure:function(){

								}
							});
						}else{
							Ext.Msg.alert('Error','Form Errors!!')
						}
					}
				}]
			}]
		}]
	}]
})