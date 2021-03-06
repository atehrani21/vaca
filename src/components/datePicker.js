/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';

import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

class DateRangePicker extends Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear());
    minDate.setHours(0, 0, 0, 0);
    const maxDate = new Date(minDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    this.state = {
      minDate: minDate,
      maxDate: maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  redirect = () => {
    this.props.history.push("/plan-picker");
  }

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div className="container wizard">
        <h2 className="text-center">I will be free around...</h2>
        <div className="content">
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="From..."
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
            fullWidth={true}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="To..."
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
            fullWidth={true}
          />
        </div>
        <div className='FlatButtonContainer' style={{backgroundImage: 'url(img/button-bg-2.png)'}}>
          <FlatButton
            label="Next"
            className='FlatButton'
            onTouchTap={() => this.redirect()}
          />
        </div>
      </div>
    );
  }
}

export default DateRangePicker;
