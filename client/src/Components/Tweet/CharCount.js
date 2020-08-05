import React from "react";
import styled from "styled-components";

class CharCountInput extends React.Component {
  state = {
    charsLeft: null,
  };

  componentDidMount() {
    this.handleCharCount(this.props.value);
  }

  handleCharCount = (value) => {
    const { maxChars } = this.props;
    const charCount = value.length;
    const charsLeft = maxChars - charCount;
    this.setState({ charsLeft });
  };

  handleChange = (event) => {
    this.handleCharCount(event.target.value);
    this.props.onChange(event);
  };

  renderCharactersLeft = () => {
    const { charsLeft } = this.state;

    let content;
    if (charsLeft >= 0) {
      content = <SpanOK>{`characters left: ${charsLeft}`}</SpanOK>;
    } else if (charsLeft != null && charsLeft < 0) {
      const string = charsLeft.toString().substring(1);
      content = <SpanError>{`too many characters: ${string}`}</SpanError>;
    } else {
      content = null;
    }
    return content;
  };

  render() {
    const { onBlur, value, type, name, placeholder } = this.props;

    return (
      <Div>
        <CharCountInput
          onChange={this.handleChange}
          value={this.state.title}
          type="text"
          maxChars={150}
          name="title"
          placeholder="Enter text here..."
        />
        {this.renderCharactersLeft()}
      </Div>
    );
  }
}

export default CharCountInput;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 7px;
  width: 100%;
  margin: 0 0 0.1rem 0;
  border: 1px solid blue;
  border-radius: 7px;
  font: inherit;
  outline: none;

  &:focus {
    box-shadow: 0 0 4px blue;
  }
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 0.9rem;
  margin: 0 8px 10px 0;
`;

const SpanOK = styled(Span)`
  color: black;
`;

const SpanError = styled(Span)`
  color: red;
`;
