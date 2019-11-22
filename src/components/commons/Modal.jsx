import React from "react";

export default function Modal() {
  return (
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <h3>Modal</h3>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Basic Elements</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Modal
              </li>
            </ol>
          </nav>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Scrolling long content</h6>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    Launch demo modal
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModalLong"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ab amet, atque autem, commodi consequatur
                          corporis cumque ea eligendi esse ex facere fugit harum
                          incidunt iure laborum maiores minus non pariatur
                          praesentium quod sapiente tenetur ullam unde vel
                          voluptatibus. Accusamus aliquid beatae dolore earum
                          incidunt nulla possimus quibusdam, sed? Accusantium,
                          impedit, voluptatum! Accusamus asperiores aut
                          cupiditate, debitis deleniti ea, enim eveniet
                          explicabo facilis inventore iusto maiores molestiae
                          natus nostrum, quod tempora temporibus. Blanditiis
                          consequuntur dignissimos ducimus eos expedita facere
                          fugit, incidunt laudantium libero natus odit
                          recusandae rem sequi sunt temporibus, vel velit,
                          voluptate! Dolores, nesciunt quod! Amet corporis eaque
                          esse excepturi maiores nesciunt officiis sed
                          temporibus vitae voluptas voluptatem, voluptatibus!
                          Accusamus animi aperiam autem consequatur, cupiditate
                          distinctio dolore ducimus eius est ex explicabo id
                          itaque molestiae natus nostrum nulla, odit, officiis
                          quam qui rerum sunt suscipit temporibus vero. Ab
                          adipisci aliquam aspernatur beatae blanditiis cum
                          delectus doloribus enim expedita facere impedit in
                          laborum magnam, magni nam, necessitatibus odio, quasi
                          repudiandae. Deserunt doloribus esse itaque magnam
                          nihil nobis possimus quidem repellendus? Aliquid, amet
                          consequuntur dicta dignissimos dolore dolorem et, in
                          nam neque officiis quisquam tempore. Eligendi et hic
                          officiis quam quisquam veniam veritatis. A doloribus
                          natus quisquam veniam! Beatae culpa ducimus earum
                          exercitationem odio quae quam quas quia quidem, quo
                          recusandae, repudiandae sapiente sed temporibus
                          tenetur totam ut. Alias aspernatur at beatae
                          consequatur cupiditate error ipsam natus nobis numquam
                          pariatur quaerat quia quisquam, quos, ratione vero. Ab
                          assumenda commodi consequatur deleniti doloribus eum
                          excepturi expedita facere iusto magnam maxime minus
                          molestiae, nesciunt nostrum numquam obcaecati odio
                          officia officiis perferendis possimus quam quod
                          repellendus ullam voluptates voluptatum! Accusamus
                          accusantium aliquam aliquid architecto at atque autem
                          beatae blanditiis commodi consectetur dolores eius
                          eligendi eos, eum incidunt magnam magni maiores odio
                          possimus quae quaerat quas quasi quisquam ratione
                          reiciendis similique sit tempore velit voluptate
                          voluptates!
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Vertically centered</h6>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Launch demo modal
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalCenterTitle">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Using the grid</h6>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#gridSystemModal"
                  >
                    Launch demo modal
                  </button>
                  <div
                    id="gridSystemModal"
                    class="modal fade"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="gridModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="gridModalLabel">
                            Grids in modals
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="container-fluid bd-example-row">
                            <div class="row">
                              <div class="col-md-4">.col-md-4</div>
                              <div class="col-md-4 ml-auto">
                                .col-md-4 .ml-auto
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-3 ml-auto">
                                .col-md-3 .ml-auto
                              </div>
                              <div class="col-md-2 ml-auto">
                                .col-md-2 .ml-auto
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 ml-auto">
                                .col-md-6 .ml-auto
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-9">
                                Level 1: .col-sm-9
                                <div class="row">
                                  <div class="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                  </div>
                                  <div class="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Optional sizes</h6>

                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary m-r-5"
                    data-toggle="modal"
                    data-target=".bd-example-modal-xl"
                  >
                    Extra large modal
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary m-r-5"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    Large modal
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bd-example-modal-sm"
                  >
                    Small modal
                  </button>
                </div>

                <div
                  class="modal fade bd-example-modal-xl"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myExtraLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h6 class="modal-title">Extra large modal</h6>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h6 class="modal-title">Large modal</h6>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="modal fade bd-example-modal-sm"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="mySmallModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h6 class="modal-title">Small modal</h6>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Varying modal content</h6>

                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary m-r-5"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                  >
                    Open modal for @mdo
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary m-r-5"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@fat"
                  >
                    Open modal for @fat
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@getbootstrap"
                  >
                    Open modal for @getbootstrap
                  </button>
                </div>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          New message
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="recipient-name" class="col-form-label">
                              Recipient:
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="recipient-name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="message-text" class="col-form-label">
                              Message:
                            </label>
                            <textarea
                              class="form-control"
                              id="message-text"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
