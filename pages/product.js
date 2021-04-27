import AtomText from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import AtomImage from "../components/atoms/image";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

import { list_product } from "../components/variables/product";
import Link from "next/link";
export default function test() {
  
  let products = list_product();

  return (
    <>
      <OrganismNav />
      <center>
        
        <div
          className="mt-2 pt-5"
          style={{ width: "100%", height: "512px", background: "#FFF" }}
        >
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <AtomText value="List Product" size="36px" weight="bold" />
              </div>
              {products.map((product, index) => {
                return (
                  <>
                    <div className="col-md-3 mt-3 mr-5" style={{border:"solid thin #eee",borderRadius:"10px"}}>
                      <MoleculeProductList
                        image={product.image[0]}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        id={product.id}
                        index={index}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </center>
        </div>
      </center>
    </>
  );
}