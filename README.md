# rando-group

Generate a number of random or skill balanced groups from a large number of people.

## SETUP

```
$ npm i
```

```
$ npm run start
```

## USING

Students can sign up on the `/` route and will then be redirected to `/group.html`

Admins should use `/admin.html` to create groups.

##For adding url's to the first 4 groups generated:

in a .env file create

```
GROUP_1_URL="URL"
GROUP_2_URL="URL"
GROUP_3_URL="URL"
GROUP_4_URL="URL"
```
where URL is the URL you want. 