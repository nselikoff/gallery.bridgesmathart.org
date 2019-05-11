# Bridges Math Art Gallery

This is the repository for the Drupal site hosted at http://gallery.bridgesmathart.org.

## First Time Setup

TBD

## Local Development

* start docker
* run `docker-compose up`
* access the site at http://drupal.docker.localhost:8000/
* mariadb is configured to persist data to `mariadb-data` and is accessible on port 33306

### Upgrade Drupal or modules

* checkout the `develop` branch
* get into the docker container with `docker-compose run php bash`
* run `drush pm-update`
* exit the container
* test things related to the updates
* commit and push to github
* check in production environment at http://dev.gallery.host.sunstormlab.com
* checkout the `master` branch
* merge in `develop` and push to github
* check live site at http://gallery.bridgesmathart.org

### Deployment

The site is hosted by Ryan Price on http://host.sunstormlab.com (DevShop). There are two environments, a `dev` (`develop` branch) and a `live` (`master` branch). There are github post-commit hooks setup to automatically push commits to these environments.
