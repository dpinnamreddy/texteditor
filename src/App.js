import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    text: '',
    isBold: false,
    isItalics: false,
    isUnderline: false,
  }

  makeBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  makeItalics = () => {
    this.setState(prevState => ({isItalics: !prevState.isItalics}))
  }

  makeUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  updateText = e => {
    this.setState({text: e.target.value})
  }

  render() {
    const {text, isBold, isItalics, isUnderline} = this.state
    const boldClass = isBold ? 'bold' : ''
    const italicsClass = isItalics ? 'italics' : ''
    const underlineClass = isUnderline ? 'underline' : ''
    const btnClsBold = isBold ? 'btn-cls' : 'bold-btn'
    const btnClsItalics = isItalics ? 'btn-cls' : 'bold-btn'
    const btnClsUnderline = isUnderline ? 'btn-cls' : 'bold-btn'

    return (
      <div>
        <h1>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
        <ul>
          <li>
            <button
              type="button"
              onClick={this.makeBold}
              className={`${btnClsBold}`}
              data-testid="bold"
            >
              B
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={this.makeItalics}
              className={`${btnClsItalics}`}
              data-testid="italic"
            >
              i
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={this.makeUnderline}
              className={`${btnClsUnderline}`}
              data-testid="underline"
            >
              U
            </button>
          </li>
        </ul>
        <textarea
          onChange={this.updateText}
          value={text}
          className={`${boldClass} ${italicsClass} ${underlineClass}`}
        />
      </div>
    )
  }
}

export default App
