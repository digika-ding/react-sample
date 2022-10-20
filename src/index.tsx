import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from "./day3/CounterAsClass";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// const { initialValue, customValue } = { initialValue: 99, customValue: 'hello' }
// const props: CounterProps = {initialValue: 99, customValue: 'hello'}
const props = {
    initialValue: 0
}

root.render(
    <>
        {/* <Page /> */}
        {/*<Counter props={props} />*/}
        {/*<Counter initialValue={props.initialValue} customValue={props.customValue}/>*/}
        <Counter {...props}/>
    </>
);

// {/*If you want to start measuring performance in your app, pass a function*/
// }
// {/*to log results (for example: reportWebVitals(console.log))*/
// }
// {/*or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/
// }
// {/*// reportWebVitals();*/
// }
