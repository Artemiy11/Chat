import Handlebars from "handlebars";

document.addEventListener('DOMContentLoaded', () => {
    "use strict"
    let login = require('./pages/login/login'),
        registration = require('./pages/registration/registration');

    const app = document.querySelector('body');
    app.innerHTML = registration.default;
});