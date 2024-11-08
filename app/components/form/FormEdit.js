import React, { useEffect } from 'react'

const FormEdit = ({handleCancel, id}) => {

    useEffect(() => {
        // code 
        
    }, []);


  return (
    <div className="col-md-2">
        <h1>Form Edit</h1>
        <form enctype="multipart/form-data">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="name"
            //   onChange={(e) => handleOnChange(e)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Detail</label>
            <input
              name="detail"
            //   onChange={(e) => handleOnChange(e)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="detail"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Latitude</label>
            <input
              name="Latitude"
            //   value={form.lat}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Latitude"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Longitude</label>
            <input
              name="Longitude"
            //   value={form.lng}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Longitude"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">File</label>
            <input
              name="file"
              // value={form.lng}
            //   onChange={(e) => handleOnChange(e)}
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Longitude"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button className="btn btn-danger" style={{ margin: '10px'}} onClick={() => handleCancel()}>
            Cencel
          </button>
          {/* <button onClick={toggleTable} className="btn btn-primary" style={{ margin: '10px 10px'}}>Test</button> */}
        </form>
      </div>
  )
}

export default FormEdit