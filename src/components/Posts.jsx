import PostRender from "./PostRender"
import ImagePost from "./ImagePost"
import post from "./post"


export default function Posts() {
  return (
    <div class="posts">
      {post.map((posts) => (
           
        <>
          <PostRender name={posts.name} photoSRC={posts.userImgSRC} />
         
          <ImagePost src={posts.photoSRC} alt={posts.photoAlt} />
        </>

      ))


      }

    </div>

  )
}