import React, { useState, useEffect, useRef } from "react";

export const Data = () => {
    const [ruc, setRuc] = useState("");
    const nameInput = useRef(null);
    let [data, setData] = useState([]);
    let [data1,setData1]=useState([])
    const handleSubmit = async (e) => {
      e.preventDefault();
      await getData();
      setRuc("");
      nameInput.current.focus();
    };
  
    const getData = async () => {
      const res = await fetch(`https://applicitacion.herokuapp.com/v1/licitacion/licitante/${ruc}`).then(res => res.json())
      console.log(res)
      setData(res);
    };
  

  
    return (
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={handleSubmit} className="card card-body">
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => setRuc(e.target.value)}
                value={ruc}
                className="form-control"
                placeholder="Ingrese ruc"
                ref={nameInput}
                autoFocus
              />
            </div>
            <button className="btn btn-primary btn-block">
               Consultar
            </button>
          </form>
        </div>
        <div className="col-md-6">
             {data.apto}
        </div>
      </div>
    );
  };