import AtomText from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import AtomImage from "../components/atoms/image";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { star_list } from "../components/variables/star_list";
import { list_product } from "../components/variables/product";
import { useRouter } from "next/router";

import Link from "next/link";
export default function test() {
  const router = useRouter();
  let star = star_list();

  const handle = () => {
      router.push("/product");
  };
  return (
    <>
      <OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <AtomText value="Tita Frozen Food" size="36px" weight="bold" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            <div className="row mt-5">
              <div className="col-5">
                <AtomButton
                  background="#08db0f"
                  value="Browse All Products"
                  color="#FFF"
                  border="none"
                  padding="10px 20px"
                  radius="10px"
                  click ={handle}
                />

              </div>
             
            </div>
          </div>
          <div className="col mt-3">
            <AtomImage
                  image="/home/tita.jpg"
                  height="280px"
                  width="400px"
                  radius="10px"
              />
          </div>
        </div>
        <div
          className="mt-5 pt-5"
          style={{ width: "100%", height: "512px", background: "#FFF" }}
        >
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <AtomText value="Best Seller Product" size="24px" weight="bold" />
              </div>
              {star.map((product, index) => {
                return (
                  <>
                    <div className="col-md-3">
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
