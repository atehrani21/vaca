/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipData: [
        {key: 0, label: 'Beach'},
        {key: 1, label: 'City'},
        {key: 2, label: 'New Orleans'},
        {key: 3, label: 'Florida'},
        {key: 4, label: 'France'},
        {key: 5, label: 'London'},

      ],

      interestData: []
    };
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        align: 'center'
      },
      container: {
        textAlign: 'center',
      },
    };
  }

  handleRequestDelete = (data) => {
    console.log(data);
    this.interestData = this.state.interestData;
    this.chipData = this.state.chipData;
    const chipToDelete = this.interestData.map((chip) => chip.key).indexOf(data.key);
    this.interestData.splice(chipToDelete, 1);
    this.chipData.splice(chipToDelete, 0, {key: data.key, label: data.label});
    this.setState({interestData: this.interestData, chipData: this.chipData});
  };

  renderButtons(data) {
    return (
      <RaisedButton
        key={data.key}
        onTouchTap={() => this.addToInterests(data)}
        style={this.styles.chip}
      >
        {data.label}
      </RaisedButton>
    );
  }

  renderChips(data) {
    console.log("rendering chips");
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  showNext() {
    if (this.state.interestData.length > 0) {
      return (
        <FlatButton label="Next" />
      )
    }
  }

  addToInterests = (data) => {
    console.log("adding to interests");
    console.log(data);
    this.interestData = this.state.interestData;
    this.chipData = this.state.chipData;
    this.interestData.push({
      key: data.key,
      label: data.label
    });
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(data.key);
    console.log(chipToDelete);
    this.chipData.splice(chipToDelete, 1);
    this.setState({
      chipData: this.chipData,
      interestData: this.interestData
    });
    console.log(this.state.interestData);
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <div className="text-center">
            <h1>Vaca</h1>
            <h2>I dream to go to...</h2>
            <div style={this.styles.wrapper}>
              {this.state.interestData.map(this.renderChips, this)}
            </div>
            <br/>
            <div style={this.styles.wrapper}>
              {this.state.chipData.map(this.renderButtons, this)}
            </div>
            {this.showNext()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
