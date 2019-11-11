import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductEdit(props) {
	const [allProducts, setAllProducts] = useState([]);
	const [product, setProduct] = useState([]);
	const [productName, setProductName] = useState("");
	const [description, setDesc] = useState("");
	const [url, setUrl] = useState("");
	const [category, setCategory] = useState("");
	const [stock, setStock] = useState(0);

	const fetchData = async () => {
		let result = await axios.get(
			"https://localhost:5001/api/Products/" + props.match.params.id
		);
		let allProducts = await axios.get("https://localhost:5001/api/Products");
		allProducts.data.json();
		result.data.json();
		setAllProducts(allProducts.data);
		setProduct(result.data);
		setProductName(product.name);
		setCategory(product.category);
		setDesc(product.description);
		setUrl(product.img);
		setStock(product.stock);
	};

	useEffect(() => {
		fetchData();
	}, [stock]);

	const onChangeDescription = e => {
		setDesc(e.target.value);
	};
	const onChangeProductName = e => {
		setProductName(e.target.value);
	};
	const onChangeCategory = e => {
		setCategory(e.target.value);
	};
	const onChangeUrl = e => {
		setUrl(e.target.value);
	};
	const onChangeStock = e => {
		setStock(parseInt(e.target.value));
	};

	const onInput = e => {
		e.preventDefault();

		const productwhatever = {
			name: productName,
			img: url,
			category: category,
			stock: stock,
			description: description
		};

		console.log(productwhatever);

		axios
			.put(
				"https://localhost:5001/api/Products/" + props.match.params.id,
				productwhatever
			)
			.then(res => console.log(res.data));

		window.location = "/";
	};

	return (
		<div>
			<h1 className="text-center">Edit Product</h1>
			<p className="text-center">{product.id}</p>
			<form>
				<div className="form-group">
					<label>Product</label>
					<select
						required
						className="form-control"
						value={productName}
						onChange={onChangeProductName}
					>
						{allProducts.map((product, i) => {
							return (
								<option key={i} value={product.name}>
									{product.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className="form-group">
					<label>Name: </label>
					<input
						type="text"
						required
						className="form-control"
						value={productName}
						onChange={onChangeProductName}
					/>
				</div>
				<div className="form-group">
					<label>Description: </label>
					<input
						type="text"
						required
						className="form-control"
						value={description}
						onChange={onChangeDescription}
					/>
				</div>
				<div className="form-group">
					<label>Category: </label>
					<input
						type="text"
						className="form-control"
						value={category}
						onChange={onChangeCategory}
					/>
				</div>
				<div className="form-group">
					<label>Stock </label>
					<input
						type="text"
						required
						className="form-control"
						value={stock}
						onChange={onChangeStock}
					/>
				</div>
				<div className="form-group">
					<label>Image URL </label>
					<input
						type="text"
						required
						className="form-control"
						value={url}
						onChange={onChangeUrl}
					/>
					<input
						type="submit"
						value="SAVE"
						className="btn btn-secondary"
					></input>
				</div>
			</form>
		</div>
	);
}
