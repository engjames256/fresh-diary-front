import React from "react";
import Customers from "./Customers";
import Arts from "../art/Art";
import UsersComponent from "../../components/users/ViewUsers";

export default function Dashboard({
  handleInputChange,
  state,
  handleSubmit,
  handleImageChange,
  handleSubmitArt,
  handleDelete,
  deleteArt,
  retrievWinner
}) {
  return (
    <div className="card main-dashboard">
      <div className="card-body">
        <div className="row">
          <div className="col-md-2 left-body">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active h5"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Customers
              </a>
              <a
                className="nav-link h5"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Products
              </a>
              <a
                className="nav-link h5"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                System Users
              </a>
            </div>
          </div>
          <div className="col-md-10 main-body">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <Customers
                  handleInputChange={handleInputChange}
                  state={state}
                  handleSubmit={handleSubmit}
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <Arts
                  handleImageChange={handleImageChange}
                  state={state}
                  handleSubmitArt={handleSubmitArt}
                  handleInputChange={handleInputChange}
                  handleDelete={handleDelete}
                  deleteArt={deleteArt}
                  retrievWinner={retrievWinner}
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <UsersComponent
                  handleInputChange={handleInputChange}
                  state={state}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
