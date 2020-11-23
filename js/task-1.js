// Получить массив имен всех пользователей(поле name).
// const getUserNames = users => {
//     // твой код
// };
import { default as users } from './users.js'



const getUserNames = users => {
    return users.map(user => user.name)
};
console.log(getUserNames(users));

// ИЛИ
// const getUserNames = users.map(function (user) { return user.name; });
// console.log(getUserNames);
// ИЛИ
// const getUserNames = users.map(user => user.name);
// console.log(getUserNames);


// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]