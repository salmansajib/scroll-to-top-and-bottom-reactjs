import UseFetch from './UseFetch';

function ScrollToTopAndBottom() {
  const { data, pending, error } = UseFetch(
    'https://dummyjson.com/products',
    {}
  );

  if (error) {
    return <h1>Error occured! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading! Please wait...</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>
      <button>Scroll To Bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <li
                key={item.id}
                style={{
                  listStyle: 'none',
                }}
              >
                {' '}
                {item.title}{' '}
              </li>
            ))
          : null}
      </ul>
      <button>Scroll To Top</button>
      <h3>This is the bottom of this page</h3>
    </div>
  );
}

export default ScrollToTopAndBottom;
