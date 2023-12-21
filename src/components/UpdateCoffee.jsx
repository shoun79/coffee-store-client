import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = loadedCoffee;

    const hendleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {
            name, quantity, supplier, taste, category, details, photo
        }
        console.log(updatedCoffee);
        // send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Done!",
                        text: "Coffee Updated!",
                        icon: "success",
                        confirmButtonText: "Cool"
                    });
                }
            })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update a Coffee: {name}</h2>
            <form onSubmit={hendleUpdateCoffee}>
                {/* form name & quantity row  */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input name="name" type="text" placeholder="Coffee Name"
                                defaultValue={name}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input name="quantity" type="text" placeholder="Available quantity"
                                defaultValue={quantity}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Supplier & Taste row  */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input name="supplier" type="text" placeholder="Enter coffee supplier"
                                defaultValue={supplier}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input name="taste" type="text"
                                defaultValue={taste}
                                placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Category & Details row  */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input name="category" type="text"
                                defaultValue={category}
                                placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input name="details" type="text"
                                defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo row  */}
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input name="photo" type="text"
                                defaultValue={photo}
                                placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-orange-400" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;