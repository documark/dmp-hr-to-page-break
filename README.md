# Documark &lt;hr/&gt; &rarr; page-break

### Usage

1. Add plugin to document configuration:

        plugins:
          - hrToPageBreak

2. Add horizontal rules for forced page-breaks:

	- `<hr/>` in HTML;
	- `hr` in Jade;
	- `---` in Markdown.

Note: An `<hr/>` with attributes will not be replaced.
