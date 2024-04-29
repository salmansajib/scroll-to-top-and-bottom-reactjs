import { useRef } from 'react';
import UseFetch from './UseFetch';

function ScrollToTopAndBottom() {
  const { data, pending, error } = UseFetch(
    'https://dummyjson.com/products?limit=100',
    {}
  );
  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

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
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
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
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <span ref={bottomRef}></span>
      <h3>This is the bottom of this page</h3>
    </div>
  );
}

export default ScrollToTopAndBottom;
