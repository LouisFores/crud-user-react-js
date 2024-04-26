import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser(params) {
    // get id from params url;
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        // get current user update
        axios.get("https://6614deef2fc47b4cf27d4a5f.mockapi.io/api/v1/users/" + id)
        .then(response => {
            console.log(response);
            formEditItem.setValues({...response.data});
        })
    }, [])

    const formEditItem = useFormik({
        initialValues: {
          name: '',
          color: '',
          category: '',
          price: ''
        },
        onSubmit: (values) => {
            //call api create
            axios
            .put("https://6614deef2fc47b4cf27d4a5f.mockapi.io/api/v1/users/" + id,  {
                data: values
            }).then(response => {
                navigate("/home")
            })
        }
    })
  return (
    <div class="container">
    <h1>Update Item</h1>
    <form onSubmit={formEditItem.handleSubmit}>
    <div class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">

          <input type="text" id="name" class="form-control" name="name" 
            value={formEditItem.values.name}
            onChange={formEditItem.handleChange}/>
            </div>
        </div>
        <div class="mb-3 row">
        <label for="color" class="col-sm-2 col-form-label">Color</label>
        <div class="col-sm-10">

          <input type="text" id="color" class="form-control" name="color"
            value={formEditItem.values.color}
            onChange={formEditItem.handleChange}/>
            </div>
        </div>
        <div class="mb-3 row">
        <label for="category" class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">

          <input type="text" id="caltegory" class="form-control" name="category"
            value={formEditItem.values.category}
            onChange={formEditItem.handleChange}/>
            </div>
        </div>
        <div class="mb-3 row">
        <label for="price" class="col-sm-2 col-form-label">Price</label>
        <div class="col-sm-10">

          <input type="number" id="price" class="form-control" name="price"
            value={formEditItem.values.price}
            onChange={formEditItem.handleChange}/>
                      </div>

        </div>

        <div class="mb-3 row">
          <label for="price" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
    </div>
     

  )
}


export default UpdateUser;