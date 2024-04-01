import React from 'react'
import { useCreatePostMutation, useGetApiByNameQuery, useDeletePostMutation, useUpdatePostMutation } from './services/api'

const App = () => {

  const {data, error, isLoading, isSuccess} = useGetApiByNameQuery();
  return (
    <div>
      <h1>React RTK Query</h1>
      {isLoading && <h2>Loading...</h2>}
      {isLoading && <h2>Fetching...</h2>}
      {error && <h2>Error...</h2>}
      {isSuccess && (
        <div>
          {data?.map(posts => {
            return(
              <div key={posts.id}>
                <span>{posts.title}</span>
              </div>
            )
          })}
        </div>
      )}
      <div>
        <AddPost />
      </div>
    </div>
  )
}

export const AddPost = () => {
  const[AddPost] = useCreatePostMutation();
  const[deletePost] = useDeletePostMutation();
  const[updatePost] = useUpdatePostMutation();
  
  const posts = {
    "id":3,
    "title":"Add Data",
    "author":"Het Mamtora",
  }

  const postsUpdate = {
    "id":3,
    "title":"Updated",
    "author":"Het Mamtora - updated",
  }

  const handler = async() => {
    await AddPost(posts)
  }
  const handlerDelete = async() => {
    await deletePost(posts.id)
  }
  const handlerUpdate = async() => {
    await updatePost(postsUpdate)
  }

  return (
    <>
      <button onClick={handler}>Add Post</button>
      <button onClick={handlerDelete}>Delete Post</button>
      <button onClick={handlerUpdate}>Update Post</button>
    </>
  )
}

export default App