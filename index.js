/* jslint node: true */

function hrToPageBreak( document ) {
	document.on( 'plugin:html', function( plugins ) {
		plugins.push( function( data, cb ) {
			data = data.replace( /<hr[\s]*\/?>/gi, '<div style="page-break-after:always"></div>' );
			cb( null, data );
		} );
	} );
}

module.exports = hrToPageBreak;