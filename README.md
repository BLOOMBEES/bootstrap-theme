# Bloombees templating documentation

## Jekyll

You'll first need to install Jekyll, as it is used as templating engine

    gem install jekyll bundler
    ~ $ jekyll new my-awesome-site
    ~ $ cd my-awesome-site

Then you start Jekyll locally, at the same time it compile files to /docs folder

    bundle exec jekyll serve
    
## Deployment

You'll deploy documentation to Google App using the following command:

    gcloud app deploy --project europe-bloombees
