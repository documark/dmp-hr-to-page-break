module.exports = function dmpHrToPageBreak ($, document, done) {
	$('hr').filter(function () {
		return ! Object.keys(this.attribs).length;
	}).replaceWith('<div style="page-break-before:always"></div>');

	done();
};
