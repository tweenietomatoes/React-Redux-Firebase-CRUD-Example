import React from "react"
import { useFormik } from "formik"

const CreateForm = (props) => {
    
    const { dispatch, addPost } = props.info
    
    const formik = useFormik({
        initialValues: {
          title:'', 
          content: ''
        },
        onSubmit: values => {
          dispatch(addPost(values))
        },
      })
    
    return (
        <>
        <h1>Create</h1>
        <form onSubmit={formik.handleSubmit}>
         <input type="text" name="title" onChange={formik.handleChange} value={formik.values.title} />
         <input type="text" name="content" onChange={formik.handleChange} values={formik.values.content} />
         <button type="submit">Save</button>
         </form>
         </>   
    )
}

export default CreateForm