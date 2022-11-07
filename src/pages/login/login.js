import Handlebars from "handlebars";

const input = [
  { name: "Логин", error: "Неправильный логин" },
  { name: "Пароль", error: "Неправильный пароль" },
];
const layout = `
<div class="login">
        <span class="login__title">Вход</span>
        <form action="input" class="login__form">
            {{#each input}}
            <div class="login__input-wrapper">
                <span class="placeholder">{{name}}</span>
                <input class="login__login" type="text" name={{name}}>
                <span class="error-disabled">{{error}}</span>
            </div>
            {{/each}}
            <div class="login__bottom">
                <button class="login__submit" type="button" onsubmit="">Войти</button>
                <a class="login__registration-link" href="../../index.hbs">Нет аккаунта?</a>
            </div>
        </form>
    </div>
`;
const template = Handlebars.compile(layout);
const hbs = template({input});
export default hbs;

