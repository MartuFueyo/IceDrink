import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
    <>
        <div  className="container col-md-4" >
            <div className="card border-dark mb-3">
                <Link to ={"/item/"+ item.idx} className="text-dark text-decoration-none">
                <img src={item.Imagen} className="card mx-auto d-block img-fluid border border-white w-50 h-100 p-8" alt={item.titulo}/>
                    <div className="card-body ">
                        <h3>{item.titulo}</h3>
                        <p className="card-text p-2">{item.descripcion}<br/><b>${item.Precio}</b></p>
                    </div>
                </Link>
            </div>
        </div>
    </>
    )
    
}

export default Item;