export const fetchPosts = () => {
  return dispatch => {
    return fetch("YOUR_FIREBASE_URL")
    .then(res => res.json())
      .then(data => {
        let posts = [];
        for (const key in data) {
          posts.push({
            ...data[key],
            id: key
          });
        }
        return dispatch({
          type: "FETCH_POSTS",
          payload: posts
        })
      })
      .catch(err => console.log(err))

  }
}

export const addPost = (data) => {
  return dispatch => {
    return fetch("YOUR_FIREBASE_URL",
      {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    ).then(res => res.json()).then(id => {
      return dispatch({
        type: 'ADD_POST',
        payload: {
          id: id.name,
          ...data
        }
      })
    })

  }

}

export const deletePost = (id) => {
  return dispatch => {
  return fetch(`"YOUR_FIREBASE_URL"/${id}.json`,
    {
      method: 'DELETE',
      header: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(data => {
      return dispatch({
        type: 'DELETE_POST',
        payload: id
      })
    }).catch(err => console.log(err))
}
}

export const updatePost = ({id, title, content}) => {


  return dispatch => {
    return fetch(`"YOUR_FIREBASE_URL"/${id}.json`,
      {
        method: 'PATCH',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, content})
      }).then(res => res.json()).then(data => {
        return dispatch({
          type: 'UPDATE_POST',
          payload: { id, title, content }
        })
      }).catch(err => console.log(err))
  }
}

