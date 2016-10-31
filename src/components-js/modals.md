---
layout: docs
title: Modals
group: components-js
---

## Modal 

It was taken as a basis [bootstrap modals](http://getbootstrap.com/javascript/#modals "The bootstrap modal info")


modal.js
<hr>
Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.
<hr>
**Multiple open modals not supported**
Be sure not to open a modal while another is still visible. Showing more than one modal at a time requires custom code.

**Modal markup placement**
Always try to place a modal's HTML code in a top-level position in your document to avoid other components affecting the modal's appearance and/or functionality.

**Mobile device caveats**
There are some caveats regarding using modals on mobile devices. See our browser support docs for details.
<hr>
**Due to how HTML5 defines its semantics, the autofocus HTML attribute has no effect in Bootstrap modals.** To achieve the same effect, use some custom JavaScript:

	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})
<hr>

## Examples

### Default example

A rendered modal with header, body, and set of actions in the footer.

{% example html %}
<button class="button button-main mb-20" onclick="$('#myModal1').modal('show');">Show Modal</button>
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h3 class="modal-title" id="myModalLabel">Modal title</h3>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum earum eligendi eum expedita
                    nam nesciunt voluptatibus voluptatum? Aliquid architecto fuga id nam necessitatibus odio officiis,
                    placeat quasi sapiente totam!</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="button button-second" data-dismiss="modal">Close</button>
                <button type="button" class="button button-main">Save changes</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
{% endexample %}