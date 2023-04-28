import React from 'react';

function TimerComponent() {
const [time, setTime] = React.useState(0);
console.log("component update");

React.useEffect(function() {
    setTime(time+1);


}, []);

return (
    <div>
        <h3>{time}</h3>
        <button>Increase by 1</button>

    </div>
);

}

export default TimerComponent;