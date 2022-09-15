import React from 'react';
// set variables for each buttons

//

export const Sorter = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div className="options-nav mb-5 ">
            <div class="btn-group">
              <button
                type="button"
                className="btn  dropdown-toggle"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Any Brand
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Any Model
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Price High to Low
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
