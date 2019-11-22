import React from "react";
import Customers from "./Customers";
import Arts from "../art/Art";
import UsersComponent from "../../components/users/ViewUsers"

export default function Test() {
  return (
    <div class="card main-dashboard">
      <div class="card-body">
        <div class="row">
          <div class="col-md-2 left-body">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active h5"
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
                class="nav-link h5"
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
                class="nav-link h5"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                Users
              </a>
              <a
                class="nav-link h5"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Settings
              </a>
            </div>
          </div>
          <div class="col-md-10 main-body">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <Customers />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <Arts />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <UsersComponent/>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                One
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
