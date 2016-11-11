---
layout: docs
title: Source code
group: guides
---

Here we will learn how to add CSS and JS plugins to the project. 

---

## Getting started

Let's take a look at the source code:

{% highlight plaintext %}
    root
    ├── src/
    │   ├── fonts
    │   ├── html
    │   ├── img
    │   ├── js
    │   │   ├── components/
    │   │   ├── lib/
    │   │   ├── pages/
    │   │   └── app.js
    │   └── scss
    │       ├── blocks/
    │       ├── components/
    │       ├── content/
    │       ├── fonts/
    │       ├── lib/
    │       ├── pages/
    │       └── common.scss
    ├── static/
    │   ├── css/
    │   ├── fonts/
    │   ├── html/
    │   ├── img/
    │   └── js/
    ├── gulpfile.js
    └── ...
{% endhighlight %}

Our `gulpfile.js` makes all optimizations for our source code, located 
in `src` folder. And puts optimized files into `static` folder.

So all changes should be done in files located in `src`.

### Add JavaScript code

Folder `src/js` structure:

| Source        | Description |
|---------------|-------------|
| `components/` | Custom AngularJS directives and components |
| `lib/`        | All external libraries used in the project |
| `pages/`      | Custom files for each page |
| `app.js`      | Initialization of AngularJS application 'Bloombees' |
{:class="table table-hover table-bordered table-responsive"}

#### Add external plugin for one page
{:class="underline"}

1. Install it via bower or npm (with `--save` flag), or just download 
source files.
2. Put plugin files into `src/js/lib` folder and add them to git. 
After that js code will be in `/static/js/lib` folder.
3. Include source js file in your template. Example:

{% highlight twig %}
{%raw%}
{% block scripts_before %}
    <script src="/static/js/lib/jquery.magnific-popup.min.js"></script>
{% endblock scripts_before %}
{%endraw%}
{% endhighlight %}

#### Add external plugin for more than one page
{:class="underline"}

1. Install it via bower or npm (with `--save` flag), or just download 
source files.
2. Put plugin files into `src/js/lib/core` folder and add them to git. 
After that js code will be in `/static/js/common.min.js` bundle file.



### Add styles (SCSS)

Folder `src/sass` structure:

| Source           | Description |
|------------------|-------------|
| `blocks/`        | Styles of particular blocks (TopNav, side navigation etc.) |
| `components/`    | Styles for the particular elements (button, input etc.) |
| `content/`       |  |
| `fonts/`         | External fonts declarations (font-awesome, bb-icon etc.) |
| `lib/`           | Styles of external plugins (bootstrap, animate.css etc.) |
| `page-name.scss` | Styles of particular page (home, register etc.) |
| `common.scss`    | Common styles for the whole website, including all components, blocks, content, fonts groups. |
{:class="table table-hover table-bordered table-responsive"}

#### Add external plugin for one page

1. Put source files into folder `src/sass/lib/pluginName/`
1. Import them into page style file using `@import` directive.

Example:

We need to import plugin styles into Press Room page. So we are including into `src/sass/pages/press-room.scss` this code:

~~~ css
@import "../lib/owl-carousel/owl.carousel";
~~~

or `*.css`

~~~ css
@import "../lib/owl-carousel/magnific-popup.css";
~~~

### Add new images

Put all images into `src/img` folder. Gulp will optimize them and put 
into `static/img`.

### Add new HTML templates

Sometimes we need to create HTML templates for Angular components or any 
other needs. Placing them into 'src/html' folder we will get minified 
HTML code, which Gulp will put into `static/html` folder.   

### Add new fonts

Here is no magic. Just put your font's source files into `src/fonts` and 
declare it in `src/sass/content/_common.scss` file:

{% highlight css %}
@font-face {
  font-family: bloombees;
  src: url(https://cdn.bloombees.com/static/fonts/bloombees.eot);
  src: url(https://cdn.bloombees.com/static/fonts/bloombees.eot?#iefix) format("embedded-opentype"),
  url(https://cdn.bloombees.com/static/fonts/bloombees.woff) format("woff"),
  url(https://cdn.bloombees.com/static/fonts/bloombees.ttf) format("truetype"),
  url(https://cdn.bloombees.com/static/fonts/bloombees.svg#bloombees) format("svg");
  font-weight: 400;
  font-style: normal
}
{% endhighlight %}


