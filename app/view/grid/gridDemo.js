    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        height: 100,
        width: 200,
        items: [
            {
                // Explicitly define the xtype of this Component configuration.
                // This tells the Container (the tab panel in this case)
                // to instantiate a Ext.panel.Panel when it deems necessary
                xtype: 'panel',
                title: 'Tab One',
                html: 'The first tab',
                listeners: {
                    render: function() {
                        Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
                    }
                }
            },
            {
                // xtype for all Component configurations in a Container
                title: 'Tab Two',
                html: 'The second tab',
                listeners: {
                    render: function() {
                        Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
                    }
                }
            }
        ]
    });