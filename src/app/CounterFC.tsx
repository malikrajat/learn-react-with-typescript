import React from "react";

interface CounterFCProps {
	color: string;
}

const CounterFC = (props: CounterFCProps): JSX.Element => {
	return <div>Hello.......... {props.color}</div>;
};
export default CounterFC;
