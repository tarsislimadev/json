import React, { Component } from 'react'
import InputText from './components/input-text'

class App extends Component {

  state = {
    url: '',
    json: '',
    lines: 5,
  }

  getParsedJSON() {
    try {
      return JSON.parse(this.state.json)
    } catch (e) { }

    return undefined
  }

  renderDisplay() {
    const json = this.getParsedJSON()
    const text = JSON.stringify(json, null, 4)

    return (<pre className={'json'}>{text}</pre>)
  }

  onUrlKeyUp({ key }) {
    if (key === 'Enter') {
      // TODO: continuar a apresentação de JSON de exemplo
    }
  }

  render() {
    return (
      <div className={'container'}>
        <header className={'header'}>{'{JSON}'}</header>

        <InputText 
          label={'URL (optional)'}
          value={this.state.url}
          onChange={({ target: { value } }) => this.setState({ url: value })}
          onKeyUp={({ key }) => this.onUrlKeyUp({ key })}
          />

        <InputText 
          lines={Math.max(this.state.lines, 10)}
          label={'JSON'}
          value={this.state.json}
          onChange={({ target: { value } }) => this.setState({ json: value })}
          />

        {this.renderDisplay()}

        <div className={'footer'}>{'2021 © Tarsis de Lima'}</div>
      </div>
    )
  }
}

export default App
