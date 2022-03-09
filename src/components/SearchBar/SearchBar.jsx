export function SearchBar({ setSearchText, searchText }) {
  function handleSearchText(e) {
    setSearchText(e.target.value);
  }
  return <input type="text" placeholder="search" value={searchText} onChange={handleSearchText}></input>;
}
