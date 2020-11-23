// Получить общую сумму баланса(поле balance) всех пользователей.
import { default as users } from './users.js'

const calculateTotalBalance = users => {
    return users.reduse(totalBalance, user => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916