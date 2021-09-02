import {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory,useParams } from 'react-router-dom';

export const EditProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const history = useHistory();

    const { id } = useParams();

    //UPDATA PRODUCT

    const updateProduct = async (e) => {
        e.preventDefault();

        await axios.patch(`http://localhost:5000/products/${id}`,{
            title: title,
            price: price
        });

        history.push("/");
    }


    useEffect(()=>{
        getProductsById();
    },[])

    const getProductsById = async () =>{

        const response = await axios.get(`http://localhost:5000/products/${id}`);

        setTitle(response.data.title);
        setPrice(response.data.price);

    }

    return (
        <div className="container text-center" style={{ display: "inline-flex", justifyContent: "center"}}>
            <div class="card" style={{ width: "30rem" }}>
                    <div class="card-body" >
                        <h5 class="card-title" style={{ color: "grey" }}>Update Products</h5>
                        <p class="card-text">
                            <form onSubmit={updateProduct}>
                               
                                <div className="field">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <p></p>
                                <div className="field">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-warning mx-0 my-3">Update</button>

                            </form>
                        </p>
                    </div>
             </div>
        </div>
    )
}
