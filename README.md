# bg-app
UI for board game site. Built from this excellent [template](https://github.com/alicoding/react-webpack-babel)

### Run it

* Install the dependencies:

```
> $ npm install
```

* Run development server:

```
> $ npm start
```

Open the web browser to `http://localhost:8888/`

### Build it

```
> $ npm run build
```

### Lint it
```
> npm run lint
```

### Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* styles having /node_modules|global/ in their absolute path are considered global styles used by many components and are included in the css bundle directly.
