import {ChildComponentProps} from "./ChildComponentProps";

const ChildComponentWithUnorderedAutoExtractedProps = ({three, two, one}: ChildComponentProps) => {
    return (
        <div>
            <h3>{three}</h3>
            <h3>{two}</h3>
            <h3>{one}</h3>
        </div>
    )
}

export default ChildComponentWithUnorderedAutoExtractedProps