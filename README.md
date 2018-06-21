# Vue.js Confirm directive

A confirmation is always required on tasks which if a user takes, can have certain consequences. For example deleting a user, publishing an article and many such things. Creating a confirmation box to show a message and make the user aware is important.

This directive will help create a confirmation box for the user with a custom alert message and then allow to handle the action.

There exist a lot of components which gives you buttons but why should we restrict a user to a button. Can be any HTML element like image. And hence, this directive.

## Installation
#### using NPM:
```js
npm i vuejs-confirm-directive
```

#### using Yarn:
```js
yarn add vuejs-confirm-directive
```

### Example 1 - get confirmation, send post data and reload page
```
<button v-confirm.reload="{
    link: 'your-url-comes-here',
    message: 'Your custom message comes here',
    data: {name: 'Custom directive', short: 'v-confirm'},
}"></button>
```

### Example 2 - get confirmation, send post data and handle the callback
```
<button v-confirm="{
    link: 'your-url-comes-here',
    message: 'Your custom message comes here',
    data: {name: 'Custom directive', short: 'v-confirm'},
    callback: functionToHandleCallback
}"></button>
```
