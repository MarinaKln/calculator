var BUTTONS = [
    {
        id: "1",
        val: "1"
    }, {
        id: "2",
        val: "2"
    }, {
        id: "3",
        val: "3"
    }, {
        id: "4",
        val: "4"
    }, {
        id: "5",
        val: "5"
    }, {
        id: "6",
        val: "6"
    }, {
        id: "7",
        val: "7"
    }, {
        id: "8",
        val: "8"
    }, {
        id: "9",
        val: "9"
    }, {
        id: "10",
        val: "0"
    }, {
        id: "11",
        val: "+"
    }, {
        id: "12",
        val: "-"
    }, {
        id: "13",
        val: "*"
    }, {
        id: "14",
        val: "/"
    }
];

var Calculator = React.createClass({
    getInitialState: function() {
        return {
            input_value: "",
            output_value: ""
        };
    },
    onClickHandler: function(e) {
        this.setState ({input_value: this.state.input_value + e.target.value});
    },
    onClickCount: function() {
        this.setState({output_value: eval(this.state.input_value)});
    },
    onClickReset: function() {
        this.setState({
            input_value: "",
            output_value: ""
        });
    },
    render: function() {
        return (
            <div className = "calculator">
                <Input value = {this.state.input_value} />
                <Output value = {this.state.output_value} />
                <Buttons click = {this.onClickHandler} />
                <Count_btn click = {this.onClickCount} />
                <Reset_btn click = {this.onClickReset} />
            </div>
        )
    }
});

var  Input = React.createClass({
    render: function() {
        return <input
            type="text"
            className = "calculation_input"
            value = {this.props.value}
            />
    }
});

var Output = React.createClass({
    render: function() {
        return <input
            type = "text"
            className = "calculation_output"
            value = {this.props.value}
            />
    }
});

var Buttons = React.createClass({
    render: function() {
        return <div className = "buttons" onClick = {this.props.click}>
            {
                BUTTONS.map(function(el) {
                    return <input
                        type = "button"
                        className = "num_button"
                        value = {el.val}
                        key = {el.id}
                        />;
                })
            }
        </div>
    }

});

var Count_btn = React.createClass({
    render: function() {
        return <input
            type = "button"
            value = "Посчитать"
            onClick = {this.props.click}
            />
    }
});

var Reset_btn = React.createClass({
    render: function() {
        return <input
            type = "button"
            value = "Сбросить"
            onClick = {this.props.click}
            />
    }
});

ReactDOM.render(
    <Calculator />,
    document.getElementsByClassName("calculator_box")[0]
);
