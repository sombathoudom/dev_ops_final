/* eslint-disable @typescript-eslint/require-await */

async function main(event) {
  let data = [
    {todoId: 1, text: 'walk the dog 🐕'},
    {todoId: 2, text: 'cook dinner 🥗'},
  ];
  const todoIdToFind = parseInt(event.pathParameters.todoId, 10); // Convert to a number

  const filteredTodo = data.filter(todo => todo.todoId === todoIdToFind);

  return {
    body: JSON.stringify(filteredTodo),
    statusCode: filteredTodo.length > 0 ? 200 : 404,
  };
}

module.exports = {main};
