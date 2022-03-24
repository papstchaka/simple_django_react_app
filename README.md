# simple_django_react_app

<p align="center">
    <p align="center">
        <a href="https://github.com/papstchaka/simple_django_react_app/actions">
          <img alt="Code Quality" src="https://github.com/papstchaka/simple_django_react_app/actions/workflows/codeql-analysis.yml/badge.svg"/>
        </a>
        <a href="https://github.com/papstchaka/simple_django_react_app/issues">
          <img alt="Issues" src="https://img.shields.io/github/issues/papstchaka/simple_django_react_app?color=0088ff"/>
        </a>
        <a href="https://github.com/papstchaka/simple_django_react_app/pulls">
          <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/papstchaka/simple_django_react_app?color=0088ff"/>
        </a>
    </p>
</p>

---

<br></br>

A simple implementation of Django REST as backend with an React App as corresponding frontend. The App provides the possibility of adding and managing notes with corresponding deadline Dates (just for Showcase reasons) which are stored in `./db.sqlite3`

<h2 align="center">
  <img src=https://github.com/papstchaka/simple_django_react_app/blob/master/simple_app-fe/src/assets/frontend_view.jpg alt="Frontend View" width="800px" />
</h2>

## Requirements
* django
* djangorestframework
* django-cors-headers
> install via `pip install django djangorestframework django-cors-headers`

* npm to have the frontend working

## Fork project and set it up to work on local laptop
* Fork/Clone the repository to your local machine into a folder like `simple_django_react_app`, go to that folder into the `simple_app-fe` folder and run `npm install` to install all the required npm packages.
* start the backend due to run `python manage.py runserver 2222` in `simple_django_react_app`-folder. 2222 is the projects default backend port. If you want to change that, please head into `simple_app-fe/src/constants/index.js` and change the line to `export const API_URL = "http://localhost:<desired-port>/api/simple_app/";` to make sure that the frontend is listening to the right port
* start the frontend due to `npm start` in the `simple_app-fe`-folder and head to `localhost:3000` to see the frontend
* OPTIONAL: If you want to see which data is stored in the backend (on the server), head to `localhost:<desired-port>/api/simple_app`
* OPTIONAL: Desired style of website can be easily changed by changing the colors in `simple_app-fe/src/style/_variables.scss`
* Project has the same frontend and functionality as <a href="https://github.com/papstchaka/simple_flask_react_app" target="_blank">simple_flask_react_app</a>

<h2 align="center">
  <img src=https://github.com/papstchaka/simple_django_react_app/blob/master/simple_app-fe/src/assets/backend_view.jpg alt="Backend View" width="800px" />
</h2>

## Further information
You can access the current data in the DataBase due to run 

```python
datapath = "./simple_django_react_app/db.sqlite3"

import sqlite3
import pandas as pd
# Create your connection.
cnx = sqlite3.connect(datapath)

pd.read_sql_query("SELECT * FROM sqlite_master", cnx)["name"]
pd.read_sql_query("SELECT * FROM simple_app_note",cnx)
```
