'use strict'

/* Напишите функцию fetchUserData, которая использует async/await для загрузки данных о пользователе с сервера по его
идентификатору. Функция должна принимать идентификатор пользователя в качестве аргумента и возвращать объект с
данными о пользователе */

// 1 вариант
const fetchUserData = async () => {
    try {
        const userData = await getUserById(userId);
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}

async function getUserById(userId) {
    try {
      const response = await axios.get(`http://localhost:8080/users/user/${userId}`, {
        headers: {
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json'
          },
      })
      return response.data;
    } catch (error) {
      throw error;
    }
  }

// 2 вариант, более краткий
async function fetchUserData2(userId) {
    try {
        const response = await axios.get(`http://localhost:8080/users/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}