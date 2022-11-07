import Handlebars from "handlebars";

const input = [
  { name: "Почта", error: "Невалидная почта" },
  { name: "Логин", error: "Нереверный логин" },
  { name: "Имя", error: "" },
  { name: "Фамилия", error: "" },
  { name: "Телефон", error: "Невалидный телефон" },
  { name: "Пароль", error: "Пароли не совпадают" },
  { name: "Пароль (ещё раз)", error: "Пароли не совпадают" },
];
const layout = `
<div class="login">
        <span class="login__title">Регистрация</span>
        <form action="input" class="login__form">
            {{#each input}}
            <div class="login__input-wrapper">
                <span class="placeholder">{{name}}</span>
                <input class="login__login" type="text" name={{name}}>
                <span class="error-disabled">{{error}}</span>
            </div>
            {{/each}}
            <div class="login__bottom">
                <button class="login__submit" type="button" onsubmit="">Зарегистрироваться</button>
                <a class="login__registration-link" href="../../index.hbs">Войти</a>
            </div>
        </form>
    </div>
`;
const template = Handlebars.compile(layout);
const hbs = template({ input });
export default hbs;
