import "./App.css";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionsCreator";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  // const { error, isLoading, users } = useAppSelector(
  //   (state) => state.userReducer
  // );
  // const {} = userSlice.actions;
  // const dispatch = useAppDispatch();

  return (
    <>
      <div className="">
        {/* <button onClick={() => dispatch(fetchUsers())}>
          Загрузить пользователей
        </button>
        {isLoading && <h2>Загрузка...</h2>}
        {error && <h2>{error}</h2>}
        {!!users.length && (
          <div className="">
            {users.map((item, i) => (
              <div className="" key={i}>
                {item.name}
              </div>
            ))}
          </div>
        )} */}
        <PostContainer />
      </div>
    </>
  );
}

export default App;
