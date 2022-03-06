export function SearchBar({ setSearchText }) {
  function handleSearchText(e) {
    setSearchText(e.target.value);
  }
  return <input type="text" placeholder="search" onChange={handleSearchText}></input>;
}
