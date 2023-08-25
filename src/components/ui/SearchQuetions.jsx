import { SearchLi } from '../../styles/Styles';

export default function SearchQuetions({ searchInput, searchResults }) {
  if (searchInput === '') return null;

  if (searchResults && searchResults.length === 0) {
    return (
      <p>
        No Results for <em>"{searchInput}"</em>
      </p>
    );
  }

  return (
    <ul style={{ padding: 0 }}>
      {searchResults &&
        searchResults.map(({ id, question }) => (
          <SearchLi key={id}>{question}</SearchLi>
        ))}
    </ul>
  );
}