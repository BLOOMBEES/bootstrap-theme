---
layout: docs
title: Forms
group: guides
---

Creating **forms** in Bloombees becomes very flexible and customizable 
with TWIG's `macro` tag. In `{root}/templates/layout/base.htm.twig` you 
can find imports of all macroses. 

One of them:
```{%raw%}{% import 'partial/macro-form.htm.twig' as form %}{%endraw%}```

---

### *Function* form.create(name, fields, [options])


**Return:** fully generated HTML form.
 
 
#### Parameters
 

| Parameter | Type       | Description |
| `name`    | *(String)* | Value of `name` and `id` attributes of the form |
| `fields`  | *(Array)*  | Array of _input objects_ for the form |
| `options` | *(Object)* | You can customize your form with options: |
{: class="table table-bordered table-hover"}

#### _Options_ object params

| Parameter     | Type        | Default | Description |
| `acceptTerms` | *(Bool)*    | false   | If _true_ form will have checkbox with terms and conditions agreement|
| `cols`        | *(Integer)* | 1       | Columns number of the form |
| `removeTop`   | *(Bool)*    | false   | If _true_ removes margin between inputs |
| `reset`       | *(Bool)*    | false   | Add reset button to the form |
| `back`        | *(Bool)*    | false   | Add back button to the form (used in forgot password form) |
| `submit`      | *(String)*  | "Send"  | You can override text of submit button |
| `theme`       | *(String)*  | "light" | Available themes: "dark", "line" |
{: class="table table-bordered table-hover"}

#### _Input_ object params

| Parameter  | Type       | Default | Description |
| `label`    | *(String)* | ""      | Value of `<label></label>` tag for the input|
| `name`     | *(String)* | ""      | Value of `name` attribute of the input |
| `required` | *(Bool)*   | false   | If _true_ makes input required |
{: class="table table-bordered table-hover"}

---

### Example

{% highlight twig %}
    {% raw %}{% extends 'layout/base.htm.twig' %}
    {% set title = 'Test Page' %}
    {% set formName = 'testForm' %}
    {% set formFields = [
    {name: 'name', required: true, label: 'Full name'},
    {name: 'email', required: true, label: 'Your e-mail'},
    {name: 'message', required: true, label: 'Tour message'}
    ] %}
    {% set formOptions = {
        theme: 'dark',
        removeTop: true,
        reset: true,
        cols: 2,
        acceptTerms: true,
        submit: 'Send me, please'
    } %}
    {% block body %}
        <div class="container content--page">
            {{ form.create(formName, formFields, formOptions) }}
        </div>
    {% endblock %}{% endraw %}
{% endhighlight %}
