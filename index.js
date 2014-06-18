/* jslint node: true */

function hrToPageBreak( plugin ) {
	plugin.onHTML = function( $, cb ) {
		$( 'hr' ).filter( function() {
			return ! Object.keys( this.attribs ).length;
		} ).replaceWith( '<div style="page-break-after:always"></div>' );

		cb();
	};
}

module.exports = hrToPageBreak;
