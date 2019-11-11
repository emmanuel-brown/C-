import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./products.scss";

export default function ProductsList(props) {
	const { products, setProducts } = props;

	const deleteProduct = id => {
		axios.delete("https://localhost:5001/api/Products/" + id).then(response => {
			console.log(response.data);
		});

		setProducts(products.filter(el => el.id !== id));
	};

	return (
		<div>
			<table className="table table-striped ">
				<thead>
					<tr>
						<th scope="col-sm-12">Image </th>
						<th scope="col-sm-12">ID</th>
						<th scope="col-sm-12">Name</th>
						<th scope="col-sm-12">Description</th>
						<th scope="col-sm-12">Category</th>
						<th scope="col-sm-12">Stock</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<tr>
								<th>
									<img
										className="table-img"
										src={product.img}
										alt={product.name}
									/>
								</th>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>{product.category}</td>
								<td>{product.stock}</td>
								<td>
									<Link to={"/editproduct/" + product.id}>Edit</Link>
								</td>
								<td>
									<a
										href="#"
										onClick={() => {
											deleteProduct(product.id);
										}}
									>
										Delete
									</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
