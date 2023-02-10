
import StoryRender from "./StoryRender"
import storys from "./storys"
export default function Stories() {
    return (

        <div class="stories">
            
            {storys.map((story) => (
                    <StoryRender name={story.name} photoSRC = {story.photoSRC} />
            ))}

        </div>
    )
}

