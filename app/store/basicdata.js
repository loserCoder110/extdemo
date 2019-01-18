Ext.define('extdemo.store.basicdata',{
	extend:'Ext.data.TreeStore',
	alias:'store.basicdata',
	root:{
		expanded:false,
		text:'Continents',	
		children:[{
			text:'Pacific',
			leaf:true,
		},{
			text:'South America',
			expanded:false, //该属性配置，节点初始时是展开还是闭合
			children:[{
				text:'Brazil',
				leaf:false   /* leaf:为true那么就是叶子节点，不能再展开了
								     为false,那么就会有展开的按钮， */
			},{
				text:'Chile',
				leaf:true
			}]
		},{
			text:'Asia',
			expanded:false,
			children:[{
				text:'India',
				leaf:true
			},{
				text:'Korea',
				leaf:true
			}]
		},{
			text:'Africa',
			leaf:true
		}]
	}
});