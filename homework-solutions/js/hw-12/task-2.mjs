/*Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена*/


   async function createTodo(todo) {
      try{
         const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "post",
            body: JSON.stringify(todo),
         });

         if(response.status !== 201) 
            {
               throw new Error(response.status);
            }

                const result = await response.json();

    if (result.id !== 201) {
      throw new Error(`Неверный ID: ${result.id}`);
    }

    return result;

      } catch(error) {
         console.error(error.message);
      } finally {
         console.log("Работа функции завершена")
      }
   }
 createTodo({ userId: 1, title: "Learn fetch", completed: false })
.then((result) => console.log(result))
.catch((error) => console.error(error));
