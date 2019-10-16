import React, {Component} from 'react';
import { Button, Input } from './baseComponents';

export class NavButtons extends Component{
  render(){
    return(
      <div style={this.props.style} >
        <Button text="Back" onClick={() => this.props.onClickBack()} />
        
        <p style={styles.p} >Page: </p>
        <Input style={{ width: '50px', textAlign: 'center' }} value={this.props.page} onChange={(page) => this.props.onChange(page)} onEnter={() => this.props.onEnter()} />
        
        <p style={styles.p}>of { this.props.pageCount }</p>

        <Button text="Next" onClick={() => this.props.onClickNext()} />
      </div>
    );
  }
}

const styles = {
  p: {
    display: 'inline',
    fontSize: '16px',

    marginLeft: '5px',
    marginRight: '5px'
  }
}