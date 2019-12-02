import React from "react";
import "../../assets/css/footer.scss";

export default function Footer() {
  return (
    <div class="mb-0 pt-5 pb-5 footer navbar-fixed-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <h2 className="text-white">Fresh Diary Uganda</h2>
            <p class="pr-5 text-white-50">
              Fresh Dairy is a Ugandan company that provides consumable products
              made of pure and fresh milk.
            </p>
            <p>
              <a href="#dashboard">
                <i class="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#dashboard">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3 text-white">Links</h4>
            <ul class="m-0 p-0">
              <li>
                - <a href="#dashboard">Facebook</a>
              </li>
              <li>
                - <a href="#dashboard">Instagram</a>
              </li>
              <li>
                - <a href="#dashboard">Twitter</a>
              </li>
              <li>
                - <a href="#dashboard">LinkedIn</a>
              </li>
              <li>
                - <a href="#dashboard">Pinterest</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4 text-white">Location</h4>
            <p>Kampala Road, Uganda</p>
            <p class="mb-0">
              <i class="fa fa-phone mr-3"></i>(256) 754-301019
            </p>
            <p>
              <i class="fa fa-envelope-o mr-3"></i>info@freshdiary.com
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col copyright">
            <p class="">
              <small class="text-white-50">© 2019. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
