export default function initSearchBox() {
  var searchBox = document.getElementById('searchBox');
  var searchIcon = document.querySelector('.search-icon');

  function toggleSearch() {
    if (searchBox.classList.contains('invisible')) {
      searchBox.classList.remove('invisible');
      searchBox.classList.remove('opacity-0');
      document.addEventListener('click', closeSearchOnClickOutside);
    } else {
      closeSearch();
    }
  }

  function closeSearch() {
    searchBox.classList.add('opacity-0');
    setTimeout(function () {
      searchBox.classList.add('invisible');
    }, 300);
    document.removeEventListener('click', closeSearchOnClickOutside);
  }

  function closeSearchOnClickOutside(event) {
    if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
      closeSearch();
    }
  }

  searchIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleSearch();
  });
}
