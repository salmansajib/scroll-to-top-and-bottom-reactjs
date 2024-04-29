import { useRef } from 'react';

function ScrollToSection() {
  const sectionRef = useRef(null);
  const data = [
    {
      id: 1,
      label: 'Section',
      style: {
        width: '100%',
        height: '600px',
        background: 'red',
      },
    },
    {
      id: 2,
      label: 'Section',
      style: {
        width: '100%',
        height: '600px',
        background: 'green',
      },
    },
    {
      id: 3,
      label: 'Section',
      style: {
        width: '100%',
        height: '600px',
        background: 'blue',
      },
    },
    {
      id: 4,
      label: 'Section',
      style: {
        width: '100%',
        height: '600px',
        background: 'black',
      },
    },
    {
      id: 5,
      label: 'Section',
      style: {
        width: '100%',
        height: '600px',
        background: 'orange',
      },
    },
    {
      id: 6,
      label: 'Section',
      style: {
        width: '100%',
        height: '600px',
        background: 'purple',
      },
    },
  ];

  function handleScrollToSection() {
    let position = sectionRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <h1>Scroll To A Particular Section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((item) => (
        <div
          ref={item.id === 5 ? sectionRef : null}
          key={item.id}
          style={item.style}
        >
          <h3> {item.label} </h3>
        </div>
      ))}
    </div>
  );
}

export default ScrollToSection;
