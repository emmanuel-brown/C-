import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Components/Nav";
import ProductsList from "./Components/ProductsList";
import ContactsList from "./Components/ContactsList";
import ProductEdit from "./Components/ProductEdit";

function App() {
	const [products, setProducts] = useState([]);
	const [contacts, setContacts] = useState([]);
	const [price, setPrice] = useState([]);

	const fetchData = async () => {
		const products = await axios("api/Products");
		const price = await axios("api/Price");
		const contacts = await axios("api/Contacts");
		setContacts(contacts.data);
		setPrice(price.data);
		setProducts(products.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	console.log(products, price, contacts);

	return (
		<Router>
			<Nav />
			<Switch>
				<Route
					path="/"
					exact
					render={() => {
						return (
							<ProductsList
								price={price}
								products={products}
								setProducts={setProducts}
							/>
						);
					}}
				/>
				<Route
					path="/contacts"
					exact
					render={() => {
						return <ContactsList contacts={contacts} />;
					}}
				/>
				<Route path="/editproduct/:id" component={ProductEdit} />
			</Switch>
		</Router>
	);
}

export default App;
