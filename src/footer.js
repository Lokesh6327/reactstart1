import "./index.css";
import pic from "./images/img3.jpg";
const online =
  "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg";
export function Footer() {
  return (
    <main>
      <div className="source">
        {/* <div className="menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="features">
        <h1>This is the footer part in react</h1>
        <p>Component based structure</p>
      </div> */}
        <h1>Directly call public folder</h1>
        <img src="photos/img1.jpg" width={550} alt="Technology" />
        <h2>Import mandatory with variable in src folder</h2>
        <img src={pic} width="550" alt=" tecno" />
        <h3>Only variable assign in online(cdn)</h3>
        <img src={online} width="550" alt="online cdn" />
      </div>

      <div className="features">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
              <div class="card shadow-sm">
              <img src={pic}  alt="custom" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        AI Technology
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                       MERN Stack
                      </button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              <img src={pic}  alt="custom" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        AI Technology
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                       MERN Stack
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              <img src={pic}  alt="custom" />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                       AI Technology
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        MERN Stack
                      </button>
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
