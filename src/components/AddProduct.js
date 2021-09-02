import { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AddProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const history = useHistory();

    //SAVE PRODUCT

    const saveProduct = async (e) => {
        e.preventDefault();

        await axios.post('https://mysql-crudapp.herokuapp.com/products', {
            title: title,
            price: price
        });

        history.push("/");
    }

    return (
        <div className="container text-center" style={{ display: "inline-flex", justifyContent: "center"}}>
            <div class="card" style={{ width: "30rem" }}>
                    <div class="card-body" >
                        <h5 class="card-title" style={{ color: "grey" }}>Add Products</h5>
                        <p class="card-text">
                            <form onSubmit={saveProduct}>
                               
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
                                <button className="btn btn-primary mx-0 my-3">Save</button>

                            </form>
                        </p>
                    </div>
             </div>
        </div>
    )
}
