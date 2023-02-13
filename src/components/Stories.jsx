
import StoryRender from "./StoryRender"
import storys from "./storys"
export default function Stories() {
    return (

        <div class="stories">
            
            {storys.map((story) => (
                    <StoryRender key={story.name} name={story.name} photoSRC = {story.photoSRC} />
            ))}
            <div className="setinha">
             <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>   
    )
}

