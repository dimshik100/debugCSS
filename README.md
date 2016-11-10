# debugCSS
A style-sheet to help visually identify potential errors in HTML.


What is this?
-----

The purpose of debugCSS is to highlight malformed, incorrect, incomplete, and wrongly nested HTML tags that would otherwise not be visible to the eye. Using these styles, HTML tags that match any of the above conditions will be highlighted based on their severity.

Green is "probably not a big problem", yellow is "worth looking at" and red is "you really should fix this."

About:
-----



Install:
-----

Visit http://www.dimshik.com/debugCSS/ to install the bookmarklet.

Todo:
-----

* Add more debugging scenarios
* Design error messages


Contribute:
-----

run `npm install` then `gulp`.

This will get all dependencies and build `debugCSS.css` file in `dist -> css`.

This will also run a gulp watcher to live reload the changes you make.

Credits:
--------

+ [Starbucks](http://www.starbucks.com/static/reference/styleguide/debug.aspx)
