Ext.define('Curios.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel'
    ],
    config: {
        items: [
            {
			    xtype: 'carousel',
				height:'100%',
				width:'100%',
				// direction: 'horizontal',
				items: [
					{
						html : 'Item 1',
						style: 'background-color: #5E99CC'
					},
					{
						html : 'Item 2',
						style: 'background-color: #759E60'
					},
					{
						html : 'Item 3'
					}
				]
			}
        ]
    }
});
