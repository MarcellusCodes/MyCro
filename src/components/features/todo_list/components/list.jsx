import { Oops, NoTodos } from "../assets/icons/empty";
import Todo from "./todo";
const List = () => {
  const todos = [<Todo />, <Todo />];
  return (
    <>
      <div
        className={`border-2 border-blue-500 space-y-5 ${
          todos.length > 0 ? "bg-white" : "bg-gray-200"
        } p-4 rounded-lg shadow-lg w-full`}
      >
        {todos.length > 0 ? (
          todos.map((todo) => <Todo />)
        ) : (
          <div className="flex flex-col items-center space-y-5 my-24">
            <Oops />
            <NoTodos />
          </div>
        )}
      </div>
    </>
  );
};

export default List;
