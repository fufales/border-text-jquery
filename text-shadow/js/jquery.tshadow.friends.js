// Shadow and border
jQuery.fn.extend({
	friendtshadowandborder: function(options)
	{
		defoptions = {
			colorshadow: 'rgba(0,0,0,0.8)',
			shadowsize: '0px',
			shadowx: '0px',
			shadowy: '0px',
			colorborder: 'white',
			effectsize: '1px',
			effectcolor: 'transparent',
		}

		options = $.extend({}, defoptions , options);

		this.each(function()
		{
			colorborderval = '0 -0px 0 '+options.effectcolor+', 0px 0px 0 '+options.effectcolor+', '+options.effectsize+' '+options.effectsize+' 0px '+options.effectcolor+', -'+options.effectsize+' -'+options.effectsize+' 0px '+options.effectcolor+', -'+options.effectsize+' '+options.effectsize+' 0px '+options.effectcolor+', '+options.effectsize+' '+options.effectsize+' 0 '+options.effectcolor+', '+options.effectsize+' -'+options.effectsize+' 0 '+options.effectcolor+', ';

			shadowValues = {
				'allbrowsers': 'text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
				'webkit': ' -webkit-text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
				'khtml': ' -khtml-text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
				'moz': ' -moz-text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
				'wap': ' -wap-text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
				'ms': ' -ms-text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
				'o': ' -o-text-shadow: '+colorborderval+''+options.shadowx+' '+options.shadowy+' '+options.shadowsize+' '+options.colorshadow+';',
			};

			jQuery(this).attr({
				'style' : ''+shadowValues.allbrowsers+''+''+shadowValues.webkit+''+''+shadowValues.khtml+''+''+shadowValues.moz+''+''+shadowValues.wap+''+''+shadowValues.ms+''+''+shadowValues.o+''
			});
		});
	}
});
// Shadow and border end