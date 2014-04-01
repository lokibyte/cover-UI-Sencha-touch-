/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'Curios',

    requires: [
        'Ext.MessageBox'
		,'Ext.data.Store'
		,'Ext.ux.Cover'
		,'Ext.tab.Panel'
    ],

    views: [
        'Main'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    // launch: function() {
        // // // Destroy the #appLoadingIndicator element
        // Ext.fly('appLoadingIndicator').destroy();

        // // // Initialize the main view
        // Ext.Viewport.add(Ext.create('Curios.view.Main'));
		
    // },
	launch: function(){

		var cover = Ext.create('Ext.ux.Cover', {
			itemCls: 'my-cover-item',
			//These are just for demo purposes.
			// height: (Ext.os.deviceType !== 'Phone')? 300: undefined,
			// width: (Ext.os.deviceType !== 'Phone')? 800: undefined,
			
			height: '100%',
			width: '100%',
			//end-demo
		    itemTpl : [
				'<div>',
					'<div class="dev">{firstName} {lastName}</div>',
					'<div class="company">{company}</div>',
					'<div class="image"><tpl if="image"><img  src="{image}"></tpl></div>',
				'</div>'
			],
			store : {
			    fields: ['firstName', 'lastName', 'company', 'image'],
			    data: [
			        {firstName: 'Tommy',   lastName: 'Maintz', company: 'Sencha', image: 'resources/images/sencha.png'},
			        {firstName: 'Rob',     lastName: 'Dougan', company: 'Sencha', image: 'resources/images/sencha.png'},
			        {firstName: 'Max',     lastName: 'Fierro', company: 'Sencha', image: 'resources/images/sencha.png'},
			        {firstName: 'Ed',      lastName: 'Spencer', company: 'Sencha', image: 'resources/images/sencha.png'},
			        {firstName: 'Jamie',   lastName: 'Avins', company: 'Sencha', image: 'resources/images/sencha.png'},
			        {firstName: 'Aaron',   lastName: 'Conran', company: 'Sencha', image: 'resources/images/sencha.png'},
			        {firstName: 'Dave',    lastName: 'Kaneda', company: 'Sencha', image: 'resources/images/sencha.png'},
	   		        {firstName: 'Michael', lastName: 'Mullany', company: 'Sencha', image: 'resources/images/sencha.png'},
	   		        {firstName: 'Abraham', lastName: 'Elias', company: 'Sencha', image: 'resources/images/sencha.png'},
				    {firstName: 'Jay',     lastName: 'Robinson', company: 'Sencha', image: 'resources/images/sencha.png'}
			    ]
			},
			selectedIndex: 2,
			listeners:{
				itemdoubletap: function(){
					console.log('itemdbltap', arguments);
				},
				itemtap: function(cover, idx){
					console.log('itemtap', arguments);
				},
				scope: this
			}
		});

				
		var tab = Ext.create('Ext.tab.Panel',{
			tabBarPosition: 'bottom',
			items:[{
				title: 'cover',
				iconCls: 'favorites',
				//Demo purpose
				layout: (Ext.os.deviceType === 'Phone')? 'fit': {
					type: 'vbox',
					pack:'center',
					align: 'center'
				},
				//end demo
				items: [cover]
			}]
		});
		
		//weird fix to call refresh when orientation changes
		// Ext.Viewport.on('orientationchange', function(){cover.refresh();})
		// Ext.Viewport.add(tab);
		Ext.Viewport.add(cover);
	},
	

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
