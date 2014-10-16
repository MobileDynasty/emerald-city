Emerald City
====

Requirements
====

- Python 3
- Node
- npm
- gulp
- postgres 9.3+
- redis

Installation
=====

### 1. Python 3 ###
On OS X it is easiest to install through [HomeBrew](http://mxcl.github.com/homebrew/)

>brew install python3

### 2. Pull Codebase ###
>git clone

### 3. Create a [virtualenv](http://www.virtualenv.org/en/latest/index.html) or use [pyvenv] (https://docs.python.org/3/library/venv.html) ###

### 4. Install project dependencies ###
Make sure that your virtualenv or pyvenv is active before installing dependencies.
> pip install -r requirements.txt

### 5. Install Node and build system (gulp)###
Make sure that the last step below is run from the project root directory.
>brew install node

>brew install npm

>npm install -g gulp

>npm install

### 6. Install Postgresql ###
> brew install postgresql

### 7. Create database ###
> createuser -P -s -e mu (set password to mu)

> createdb -O mu mu

### 8. Create database schema ###
> cp alembic.ini.example alembic.ini

> alembic upgrade head

### 9. Configure application ###
Copy all the example files in the conf directory.  Edit as necessary.

### 10. Start the server  ###

>python server.py

### 11. Build assets & start browsersync
Open another terminal window.
> gulp

### 12. Browser App ###
[Open Application] (http://localhost:8000)