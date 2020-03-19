import React from "react"
import { useFormik } from "formik"

const UpdateForm = (props) => {
    
    const { id,dispatch,updatePost } = props.info

    const formik = useFormik({
        initialValues: {
          title:'', 
          content: ''
        },
        onSubmit: values => {
          dispatch(updatePost({id,...values}))
        },
      })
    

return (   
<>
<h1>Update</h1>
<form onSubmit={formik.handleSubmit}>
<input type="text" name="title" onChange={formik.handleChange} value={formik.values.title} />
<input type="text" name="content" onChange={formik.handleChange} values={formik.values.content} />
<button type="submit">Update</button>
</form>
</>
)
}

export default UpdateForm