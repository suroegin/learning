import React from 'react';
import logo from './logo.svg';
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
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
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

const scaleNames = {
    c: "Цельсия",
    f: "Фаренгейта",
};

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода закипит.</p>
    } else {
        return <p>Вода не закипит.</p>
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
                <input type="number" value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        });
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius =
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="c" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}

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
    return <Calculator />
}

export default App;
