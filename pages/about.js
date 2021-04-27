import AtomText from "../components/atoms/paragraph";
import AtomButton from "../components/atoms/button";
import AtomImage from "../components/atoms/image";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import Link from "next/link";
export default function test() {
  return (
    <>
      <OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <AtomText value="Kontak kami :" size="36px"  />
            <div className="row mt-2">
              <div className="col-md-2">

                <AtomImage
                  image="/home/map.jpg"
                  border="none"
                  height="20px"
                  width="40px"
                  position="right"
                  size="50%"
                 />
              </div>
              <div className="col-md-10">
                <AtomText
                  value="JL. PUCANG ADI NO 19 SURABAYA"
                  size="14px"
                  margin="0px"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">

                <AtomImage
                  image="/home/tlp.jpg"
                  border="none"
                  height="20px"
                  width="40px"
                  position="right"
                  size="50%"
                 />
              </div>
              <div className="col-md-10">
                <AtomText
                  value="+62-812-301-5417"
                  size="14px"
                  margin="0px"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">

                <AtomImage
                  image="/home/wa.jpg"
                  border="none"
                  height="20px"
                  width="40px"
                  position="right"
                  size="60%"
                 />
              </div>
              <div className="col-md-10">
                <AtomText
                  value="+62-812-301-5417"
                  size="14px"
                  margin="0px"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">

                <AtomImage
                  image="/home/email.jpg"
                  border="none"
                  height="20px"
                  width="40px"
                  position="right"
                  size="50%"
                 />
              </div>
              <div className="col-md-10">
                <AtomText
                  value="tita.foodfrozen@gmail.com"
                  size="14px"
                  margin="0px"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-2">

                <AtomImage
                  image="/home/ig.jpg"
                  border="none"
                  height="20px"
                  width="40px"
                  position="right"
                  size="60%"
                 />
              </div>
              <div className="col-md-10">
                <AtomText
                  value="@tita.frozenfood"
                  size="14px"
                  margin="0px"
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
      </center>
    </>
  );
}