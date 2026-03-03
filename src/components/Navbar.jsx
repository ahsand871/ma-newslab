import React, { Component, useState } from "react";
import newsIcon from "/newsIcon.svg";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};


  updateCategoryNavbar = (category) => {
    this.props.updateCategory(category);
  };
  handleSearchSubmit = (e) => {
    e.preventDefault(); 
    this.props.handleSearchClick();
  };
  handlePage = (page) =>{
    this.props.setProgress(15);
    setTimeout(() => {
          this.props.setPage(page)
          this.props.setProgress(100);
    }, 1000);

  }


  render() {
    let {searchInput, updateSearch} = this.props
    return (
      <>
        <nav
          className="navbar navbar-expand-lg fixed-top bg-dark"
          data-bs-theme="dark"
          style={{ padding: "15px" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-nav">
              <Link
                className="navbar-brand nav-link"
                onClick={() => {
                  this.updateCategoryNavbar("general");
                  this.handlePage("home");
                }}
                to="/"
              >
                <img
                  src={newsIcon}
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top"
                />
                MA NewsLab
              </Link>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => this.updateCategoryNavbar("health")}
                        to="/health"
                      >
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => this.updateCategoryNavbar("science")}
                        to="/science"
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => this.updateCategoryNavbar("business")}
                        to="/business"
                      >
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => this.updateCategoryNavbar("sports")}
                        to="/sports"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => this.updateCategoryNavbar("technology")}
                        to="/technology"
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() =>
                          this.updateCategoryNavbar("entertainment")
                        }
                        to="/entertainment"
                      >
                        Entertainment
                      </Link>
                    </li>
                  </ul>
                </li>
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/about"
                  onClick={() => this.handlePage("about")}
                >
                  About
                </Link>
              </div>
            </div>
            {/* Desktop Search */}
            <form
              className="d-none d-lg-flex"
              role="search"
              onSubmit={this.handleSearchSubmit}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => updateSearch({ searchInput: e.target.value })}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

            {/* Mobile Search Icon */}
            <button
              className="btn d-lg-none text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileSearch"
            >
              <i className="bi bi-search text-white"></i>
            </button>

            {/* Mobile Collapsible Search */}
            <div className="collapse mt-2 d-lg-none" id="mobileSearch">
              <form onSubmit={this.handleSearchSubmit}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  value={searchInput}
                  onChange={(e) =>
                    updateSearch({ searchInput: e.target.value })
                  }
                />
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
