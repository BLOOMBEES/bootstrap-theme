---
layout: docs
title: Templates
group: guides
---

`templates` folder structure:

{% highlight plaintext %}
    templates/
    ├── layout/
    │   └── base.htm.twig
    ├── partial/
    │   ├── partialName.htm.twig
    │   └── ...
    ├── index.htm.twig
    ├── pageName.htm.twig
    └── ...
{% endhighlight %}

Each public page has it's own template file `pageName.htm.twig`. <br/>
`base.htm.twig` is a skeleton of all pages, divided into blocks.

### How to create new template

Create new file in the `templates` folder with name `newPageName.htm.twig` and put this code inside:
```
    {% raw %}{% extends "layout/base.htm.twig" %}
    {% set title = l('navigation','bloombees;webapp;navigation;contact') %}
    {% set page_class = 'bg-white' %}
    {% set custom_css = 'contact-us.min.css' %}
    {% set custom_js = 'contact-us.min.js' %}
    {% set libs_css = ['magnific-popup.css'] %}
    {% set libs_js = ['jquery.magnific-popup.min.js'] %}
    
    {% block body%}
        {# Put here your new template code #}
    {% endblock%}{% endraw %}
```

Some explanations to TWIG variables, that you can use to customize templates:
 
| Variable      | Type       | Description |
|---------------|------------|-------------|
| `title`       | *(String)* | value of `<title></title>` tag |
| `page_class`  | *(String)* | you can add custom class to the parent's container to customize your page |
| `custom_css`  | *(String)* | custom CSS file name (with root in /static/css) |
| `custom_js`   | *(String)* | custom JS file name (with root in /static/js) |
| `libs_css`    | *(Array)*  | Additional CSS plugins, added to the page |
| `libs_js`     | *(Array)*  | Additional JS plugins, added to the page |
{:class="table table-bordered table-hover"}
