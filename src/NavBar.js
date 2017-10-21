import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar className="navbar" color="black" expand="md" light>
                <NavbarBrand href="/">Ezell Frazier</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto nav" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/lynellf">Github</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="mailto:lynellf@gmail.com">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar> 
        );
    }
}
