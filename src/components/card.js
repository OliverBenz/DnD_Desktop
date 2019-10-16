import React from 'react';


export function Card(props){
  return(
    <button style={{width: '50%', backgroundColor: 'transparent', border: 'none'}} onClick={() => props.onClick(props.id)}>
      <div style={styles.wrapper} key={props.id}>
        {/* Header */}
        <div style={styles.header}>
          <p style={styles.text}>{ props.title }</p>
        </div>

        {/* Body */}
        <div>
          <div style={ styles.body }>
            <p style={styles.text}>Level: { props.level }</p>
          </div>
          <div style={ styles.body }>
            <p style={styles.text}>Range: { props.range }</p>
          </div>
        </div>
      </div>
    </button>
  );
}

const styles = {
  wrapper: {
    border: '1px solid black',
    padding: 5,
    margin: 5,
  },
  header: {
    marginBottom: 5
  },
  body: {
    display: 'inline-block',
    width: '50%'
  },
  text: {
    fontSize: 18,
    alignSelf: 'center'
  }
};