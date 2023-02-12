import PostRender from "./PostRender"
import post from "./post"


export default function Posts() {
  return (
    <div class="posts">
      {post.map((posts) => (
           
        <>
          <PostRender name={posts.name} userImgSRC={posts.userImgSRC} photoSRC={posts.photoSRC} photoAlt={posts.photoAlt} />
        </>

      ))


      }

    </div>

  )
}