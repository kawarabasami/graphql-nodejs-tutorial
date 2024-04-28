import './App.css';
import { gql, useQuery } from '@apollo/client';

const BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`;

console.log(BOOKS);

function Books() {
  const { data, loading, error } = useQuery(BOOKS);

  if (loading) {
    return <div>ロード中...</div>;
  }
  if (error) {
    return <div>エラー</div>;
  }

  return data.books.map(({ title, author }, i) => (
    <div key={i}>
      <p>
        {author}:{title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h1>GraphQL TEST</h1>
      <Books />
    </div>
  );
}

export default App;
