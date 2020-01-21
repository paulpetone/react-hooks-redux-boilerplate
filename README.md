<p align="center">
<img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="50" /><img alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="80" /><img alt="redux" src="https://res.cloudinary.com/practicaldev/image/fetch/s--heipuOTP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://redux.js.org/img/redux.svg" width="60" /><img alt="stylus" src="https://cdn.freebiesupply.com/logos/large/2x/stylus-logo-png-transparent.png" width="60" />
</p>
<h1 align="center">
  gatsby + react hooks + redux + stylus
</h1>

# 🧶 How to use

## Setup

```sh
$ git clone https://github.com/paulpetone/react-hooks-redux-boilerplate.git && cd react-hooks-redux-boilerplate && yarn
```

not required, but
`💫⭐ star this project ⭐💫`
hehehe, only if you like it, of course

## Local development

`$ yarn start`

## Static build

`$ yarn build`

## Serve static folder after build

`$ yarn serve`

# 📁 Folder structure idea

## Gatsby urls

At `src/pages` you will see all the urls that gatsby renders automatically, so on local development, we have:

- `localhost:8000/`
- `localhost:8000/about`
- `localhost:8000/example`
- `localhost:8000/dynamic-route/%someid%` -> take a look at gatsby-node.js
- `localhost:8000/nvkjncksnjkaxs` -> 404.js

### @components

For reusable components, you should use `src/components` and create a folder for this component. Why a folder? Because inside of this folder is where you should put the .styl and logic files, such as effects, handlers, state and store.

Take a look at [https://github.com/paulpetone/react-hooks-redux-boilerplate/tree/master/src/components/pageComponents/example/exampleList](https://github.com/paulpetone/react-hooks-redux-boilerplate/tree/master/src/components/pageComponents/example/exampleList)

Alias: `@components/{yourComponentFolder}||{componentIndexJs}`

### @pageComponents

For each page, we can have reusable components or components that are specific for that url, for this specific components I created a `pageComponents` inside of `src/components`.

You can see here [https://github.com/paulpetone/react-hooks-redux-boilerplate/blob/master/src/pages/example/index.js](https://github.com/paulpetone/react-hooks-redux-boilerplate/blob/master/src/pages/example/index.js) that I'm using a component that is only used by the `localhost:8000/example` page, that's why it is on `src/components/pageComponents/example/exampleList`

Alias: `@pageComponents/{yourPage}/{yourComponent}`

### @hooks

As we did for components, on hooks root we only have the reusable hooks, Ex: usually a fetcher hook will be used for a lot a components that handles a request, that's why our `src/hooks/useFetcher` is there.

Alias: `@hooks/{yourHook}`

### @pageHooks

Also, same logic here, if we have some hooks that are used only by a single page, we should put this hooks here: `src/hooks/pageHooks/{yourPage}/{yourHook}`

Alias: `@pageHooks/{yourPage}/{youHook}`

### @actions

Just an alias for `src/store/actions`

# 🐺 Husky

I'm using husky to `format` the code on every `commit` and `test` with jest on every `push`.

# 🧪 Jest & @testing-library

It's ready to implement, we have 2 examples on `@components/__tests__`

# 🚀 About gatsby structure:

##### From gatsby readme:

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
