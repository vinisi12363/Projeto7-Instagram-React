import Stories from "./Stories"
import Sidebar from "./Sidebar"
import storys from "./storys"
export default function Corpo() { 
    return (
        <div class="corpo">
                <div class="esquerda">
                {storys.map((story) => (
                    <Stories name={story.name} photoSRC = {story.photoSRC} />
                ))}
                </div>
                <Sidebar />
        </div>
    )
}

            