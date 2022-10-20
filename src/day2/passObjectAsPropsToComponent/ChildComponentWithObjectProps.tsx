import {ChildComponentPropsAsObject} from "./ChildComponentPropsAsObject";

const ChildComponentWithUnorderedExtractedProps = ({data}: ChildComponentPropsAsObject) => {
    return (
        <div>
            <h3>{data.one}</h3>
            <h3>{data.two}</h3>
            <h3>{data.three}</h3>
        </div>
    )
}

export default ChildComponentWithUnorderedExtractedProps