import React from 'react'
import { useGetApiByNameQuery } from './services/api'

const App = () => {

  const {data, error, isLoading, isSuccess, isFetch} = useGetApiByNameQuery();
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
    </div>
  )
}

export default App