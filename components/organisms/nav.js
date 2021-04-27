import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import Link from "next/link";
export default function nav() {
  return (<>
    <Navbar style={{ background: "#08db0f" }}>
      <Link href="/">
        <Navbar.Brand className="text-light" href="#home">
          <img src="/home/logo.jpg" height="50px"/>
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link href="/product">
        <Nav.Link className="text-light" href="#features">
          Products
        </Nav.Link>
       </Link>
        <Link href="/about">
        <Nav.Link className="text-light" href="#pricing">
          About Us
        </Nav.Link>
        </Link>
      </Nav>
      <Form inline>
      </Form>
    </Navbar>
    </>)
}