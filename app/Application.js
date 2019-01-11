/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 Ext.define('extdemo.Application', {
    extend: 'Ext.app.Application',

    name: 'extdemo',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        //'Book'
        ],

        views:[
        'extdemo.view.login.Login',
        'extdemo.view.main.Main',
        'extdemo.view.book.bookView',  
        'extdemo.view.dynamic.dynamic',
        'extdemo.view.multipleSort',
        ],


        launch: function () {
            var loggin;
            loggin = localStorage.getItem("abc")==null?false:true;

            var months = Ext.create('Ext.data.Store',{
                fields:['abbr','name'],
                data:[{"abbr":"JAN","name":"January"},
                {"abbr":"FEB","name":"February"},
                {"abbr":"MAR","name":"March"},
                {"abbr":"APR","name":"April"},
                {"abbr":"MAY","name":"May"},
                {"abbr":"JUN","name":"June"},
                {"abbr":"JUL","name":"July"},
                {"abbr":"AUG","name":"August"},
                {"abbr":"SEP","name":"September"},
                {"abbr":"OCT","name":"October"},
                {"abbr":"NOV","name":"November"},
                {"abbr":"DEC","name":"December"}]
            });    

            Ext.create({xtype:'customer'});

/* //button
Ext.create('Ext.Button',{
            text:'My Button',
            renderTo:Ext.getBody(),
            menu:[{
                text:'item1'
            },{
                text:'item2'
            },{
                text:'item3'
            }]
        })*/
            
/*    Ext.create('Ext.form.ComboBox',{
        fieldLabel:'Choose Month',
        store:months,
        queryMode:'local',
        displayField:'name',
        
        valueField:'abbr',
        renderTo:Ext.getBody()
    });  */     
/*    Ext.create('Ext.form.HtmlEditor',{
        width:900,
        height:800,
        renderTo:Ext.getBody()
    });*/
/*    Ext.create('Ext.form.HtmlEditor',{
        width:600,
        height:200,
        renderTo:Ext.getBody()
    });*/

        //alert(loggin);
/*        Ext.create({
            xtype:'login'    
        });*/
/*        Ext.create({
            xtype: loggin ? 'app-main': 'array-grid'
        });*/
        
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
            );
    }
});
