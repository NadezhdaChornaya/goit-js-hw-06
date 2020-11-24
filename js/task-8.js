// Массив имен всех пользователей у которых есть друг с указанным именем.
import { default as users } from './users.js'

const getUsersWithFriend = (users, friendName) => {
    const result = users.filter(({ friends }) => friends.includes(friendName))
        .map((element) => element.name)
    // const result = users.reduce((arrayFriends, user) => {
    //     if (user.friends.includes(friendName)) { arrayFriends.push(user.name) } return arrayFriends
    // }, []);
    return result;

};


console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]