# Documark &lt;hr/&gt; &rArr; page-break

Using manual page breaks can be done with CSS, this plugin converts horizontal rules to page breaks and saves you the trouble of writing `'<div style="page-break-after:always"></div>'`.

### Usage

1. Add plugin to document configuration:

        plugins:
          - hr-to-page-break

2. Add horizontal rules for forced page-breaks:

	- `<hr/>` in HTML;
	- `hr` in Jade;
	- `---` in Markdown.
