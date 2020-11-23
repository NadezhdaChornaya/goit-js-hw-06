// Получить массив имен пользователей по полу(поле gender).

import { default as users } from './users.js'

const getUsersWithGender = (users, gender) => {

    return users.filter(user => user.gender === gender);
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]