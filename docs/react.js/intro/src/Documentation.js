import React from 'react';
import './App.css';

// 1

// class Clock extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//         }
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         )
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date(),
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, World!</h1>
//                 <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
//
//
// }

// 2

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '',
//         };
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     handleChange(event) {
//         console.log('New value: ' + event.target.value);
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert("Sent name: " + this.state.value);
//         event.preventDefault()
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} onWheel={(e) => {console.log(e)}}/>
//                 </label>
//                 <input type="submit" value="Send"/>
//             </form>
//         );
//     }
// }

// 3

// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'coconut'
//         }
//
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert("Your favourite taste: " + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Выберите ваш любимый вкус:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Грейпфрут</option>
//                         <option value="lime">Лайм</option>
//                         <option value="coconut">Кокос</option>
//                         <option value="mango">Манго</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Send" />
//             </form>
//         );
//     }
// }

// 4

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2,
//         }
//
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }
//
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === "checkbox" ? target.checked : target.value;
//         const name = target.name;
//
//         console.log('target: ' + target);
//         console.log('value: ' + value);
//         console.log('name: ' + name);
//
//         this.setState({
//             [name]: value
//         });
//     }
//
//     render() {
//         return (
//             <form>
//                 <label>
//                     Going:
//                     <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
//                 </label>
//                 <br/>
//                 <label>
//                     Count:
//                     <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         );
//     }
// }

// 5

// const scaleNames = {
//     c: "Цельсия",
//     f: "Фаренгейта",
// };
//
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>Вода закипит.</p>
//     } else {
//         return <p>Вода не закипит.</p>
//     }
// }
//
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }
//
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(event) {
//         this.props.onTemperatureChange(event.target.value);
//     }
//
//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
//                 <input
//                     value={temperature}
//                     onChange={this.handleChange} />
//             </fieldset>
//         );
//     }
// }
//
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             temperature: '',
//             scale: 'c'
//         };
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
//     }
//
//     handleCelsiusChange(temperature) {
//         this.setState({scale: 'c', temperature})
//     }
//
//     handleFarenheitChange(temperature) {
//         this.setState({scale: 'f', temperature})
//     }
//
//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const farenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//
//         return (
//             <div>
//                 <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
//                 <TemperatureInput scale="f" temperature={farenheit} onTemperatureChange={this.handleFarenheitChange} />
//                 <BoilingVerdict celsius={parseFloat(celsius)} />
//             </div>
//         )
//     }
// }


// 6

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//
//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? "ON" : "OFF"}
//             </button>
//         );
//     }
// }


// 7

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>
// }
//
// function GuestGreeting(props) {
//     return <h1>Enter, please.</h1>
// }
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }


// 8

// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//
//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }
//
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showWarning: true
//         };
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//
//     handleToggleClick() {
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }));
//     }
//
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? "Hide" : "Show"}
//                 </button>
//                 <input id="filesInput" type="file" multiple={true} />
//             </div>
//         )
//     }
// }


// 9

// class FileInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.fileInput = React.createRef();
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//         alert(
//             `Selected file - ${this.fileInput.current.files[0].name}`
//         );
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Upload file:
//                     <input type="file" ref={this.fileInput} />
//                 </label>
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         );
//     }
// }

// 10








function App() {
    // 1
    // return <Clock />

    // 2
    // return <NameForm />

    // 3
    // return <FlavorForm />

    // 4
    // return <Reservation />

    // 5
    // return <Calculator />

    // 6
    // return <Toggle />

    // 7
    // <Greeting isLoggedIn={false} />

    // 8
    // return <Page />

    // 9
    // return <FileInput />
}

export default App;
