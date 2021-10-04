import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as fetchFunctions from '../services/api';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
    this.searchItemsByQuery = this.searchItemsByQuery.bind(this);
    this.handleState = this.handleState.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderNoItemsMessage = this.renderNoItemsMessage.bind(this);
    this.searchItemsByCategorie = this.searchItemsByCategorie.bind(this);

    this.state = {
      searchQuery: '',
      categorieSet: '',
      products: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleState({ target }) {
    const { name } = target;
    if (name === 'categorieSet') {
      this.setState({
        [name]: target.value,
      }, this.searchItemsByCategorie);
    }
    this.setState({
      [name]: target.value,
    });
  }

  async fetchCategories() {
    const categories = await fetchFunctions.getCategories();
    this.setState({
      categories,
    });
  }

  async searchItemsByQuery() {
    const { searchQuery } = this.state;
    const items = await fetchFunctions
      .getProductsFromCategoryAndQuery(undefined, searchQuery);
    this.setState({
      products: items.results,
    });
  }

  async searchItemsByCategorie() {
    const { categorieSet } = this.state;
    const items = await fetchFunctions
      .getProductsFromCategoryAndQuery(categorieSet, undefined);
    this.setState({
      products: items.results,
    });
  }

  renderItems() {
    const { products } = this.state;
    return products.map((product) => (
      <div data-testid="product" key={ product.id }>
        <p>{product.title}</p>
        <img alt="" src={ product.thumbnail } />
        <p>{product.price}</p>
        <Link
          to={ {
            pathname: '/productdetails',
            state: product,
          } }
          data-testid="product-detail-link"
          product={ product }
        >
          Detalhes
        </Link>
      </div>
    ));
  }

  // renderItemsByCategorie() {
  //   this.searchItemsByCategorie();
  // }

  renderNoItemsMessage() {
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }

  renderCategories() {
    const { categories } = this.state;
    return categories.map(
      (categorie) => (
        <button
          className="categoriesBtn"
          data-testid="category"
          type="button"
          name="categorieSet"
          key={ categorie.id }
          onClick={ this.handleState }
          value={ categorie.id }
        >
          {categorie.name}
        </button>),
    );
  }

  render() {
    const { products } = this.state;
    return (
      <main>
        <section className="categories">
          <h4>Categorias</h4>
          {this.renderCategories()}
        </section>
        <section className="products">
          <div className="search">
            <input
              data-testid="query-input"
              name="searchQuery"
              type="text"
              onChange={ this.handleState }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.searchItemsByQuery }
            >
              Buscar
            </button>
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src="cart-icon.png" alt="cart-icon" />
            </Link>
          </div>
          {(products) && this.renderItems()}
          {(!products) && this.renderNoItemsMessage()}
        </section>
      </main>
    );
  }
}

export default Home;
