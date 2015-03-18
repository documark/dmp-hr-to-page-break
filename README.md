# Documark &lt;hr/&gt; &rarr; page-break

[![npm version](https://badge.fury.io/js/dmp-hr-to-page-break.svg)](http://badge.fury.io/js/dmp-hr-to-page-break)
[![dependency status](https://david-dm.org/documark/dmp-hr-to-page-break.svg)](https://david-dm.org/documark/dmp-hr-to-page-break)

> Documark plugin for converting horizontal rules to page breaks.

## Usage

1. Add plugin to document configuration:

	```yaml
	plugins:
	  - dmp-hr-to-page-break
	```

2. Add horizontal rules for forced page-breaks:

	- `<hr/>` in HTML;
	- `hr` in Jade;
	- `---` in Markdown.

<br/>

__Note:__ An `<hr/>` element with attributes will not be replaced.
