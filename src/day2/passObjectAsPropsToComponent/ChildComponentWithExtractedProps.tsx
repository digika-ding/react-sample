import {ChildComponentProps} from "./ChildComponentProps";

const ChildComponentWithUnorderedExtractedProps = (props: ChildComponentProps) => {
    return (
        <div>
            <h3>{props.one}</h3>
            <h3>{props.two}</h3>
            <h3>{props.three}</h3>
        </div>
    )
}

export default ChildComponentWithUnorderedExtractedProps