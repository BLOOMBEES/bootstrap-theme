# Bloombees templating documentation

## Jekyll

You'll first need to install Jekyll, as it is used as templating engine

    gem install jekyll bundler
    ~ $ jekyll new my-awesome-site
    ~ $ cd my-awesome-site

Then install bundled dependencies

    bundle install

Then you start Jekyll locally, at the same time it compile files to /docs folder

    bundle exec jekyll serve
    
[Quick reference](http://kramdown.gettalong.org/quickref.html) for kramdown markup (used in Jekyll). 

## Deployment

You'll deploy documentation to Google App using the following command:

    gcloud app deploy --project europe-bloombees
