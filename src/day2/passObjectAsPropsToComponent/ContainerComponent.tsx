import ChildComponentWithUnorderedAutoExtractedProps from "./ChildComponentWithUnorderedExtractedProps";
import ChildComponentWithObjectProps from "./ChildComponentWithObjectProps";

const ContainerComponent = () => {
    const props = {
        one: 1,
        two: 2,
        three: 3
    }

    const propsWithUnMatchedPropertiesName = {
        four: 1,
        five: 2,
        six: 3
    }

    return (
        <div>
            <h2>ContainerComponentWithUnorderedAutoExtractedProps</h2>
            <ChildComponentWithUnorderedAutoExtractedProps {...props}/>

            <h2>ContainerComponentWithExtractedProps</h2>
            <ChildComponentWithUnorderedAutoExtractedProps one={propsWithUnMatchedPropertiesName.four}
                                                           two={propsWithUnMatchedPropertiesName.five}
                                                           three={propsWithUnMatchedPropertiesName.six}/>

            <h2>ContainerComponentWithObjectProps</h2>
            <ChildComponentWithObjectProps data={props}/>

        </div>
    )
}
export default ContainerComponent