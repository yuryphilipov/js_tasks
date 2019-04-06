'use strict'

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    expense1 = prompt("Введите обязательную статью расходов в этом месяце"),
    cost1 = prompt("Во сколько обойдется?"),
    expense2 = prompt("Введите обязательную статью расходов в этом месяце"),
    cost2 = prompt("Во сколько обойдется?");
let appData = {
    "money": money,
    "timeDate": time,
    "expenses": {
        expense1: cost1,
        expense2: cost2
    },
    "optionalExpenses": {},
    "income": [],
    "savings": false
};
alert(money / 30);