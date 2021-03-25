import React from 'react';

function Loading() {

  const style = {
    main: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    }
  }

  return (
    <main style={style.main}>
      <h1 className="animated">Loading</h1>
    </main>
  )
}

export default Loading;
