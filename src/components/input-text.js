import React, { Component } from 'react'

class InputText extends Component {

  renderMultiLine() {
    return (
      <textarea
        rows={this.props.lines}
        value={this.props.value}
        className={'textarea input-text'}
        onChange={(ev) => this.props?.onChange?.(ev)}
        onInput={(ev) => this.props?.onInput?.(ev)}
        onKeyUp={(ev) => this.props?.onKeyUp?.(ev)}
        ></textarea>
    )
  }

  renderSingleLine() {
    return (
      <input
        value={this.props.value}
        className={'input input-text'}
        onChange={(ev) => this.props?.onChange?.(ev)}
        onInput={(ev) => this.props?.onInput?.(ev)}
        onKeyUp={(ev) => this.props?.onKeyUp?.(ev)}
        />
    )
  }

  render() {
    return (
      <>
        <div className={'label'}>{this.props.label}</div>
        {this.props.lines ? this.renderMultiLine() : this.renderSingleLine()}
        <div className={'error'}>{this.props.error}</div>
      </>
    )
  }
}

export default InputText
