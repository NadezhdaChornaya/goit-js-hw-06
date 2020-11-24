// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)
import { default as users } from './users.js'

const getNamesSortedByFriendsCount = users => {
    return users.sort((user1, user2) => user1.friends.length - user2.friends.length)
        .map(user => user.name)
};



console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]