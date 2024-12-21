import { useFetch } from "./useFetch";

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <h1>Hola</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Cargando...</li>}
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
