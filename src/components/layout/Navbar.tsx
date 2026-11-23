import { useEffect, useState } from 'react'
import { Container, Nav, Navbar as BsNavbar, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../../data/services'
import { site } from '../../data/site'

export function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setExpanded(false)
  }, [location])

  return (
    <BsNavbar
      expand="lg"
      variant="light"
      fixed="top"
      className="mi-navbar"
      expanded={expanded}
      onToggle={(next) => setExpanded(next)}
    >
      <Container fluid>
        <BsNavbar.Brand as={Link} to="/">
          <img
            src={site.favicon}
            alt="Logo"
            width={50}
            height={50}
            className="d-inline-block align-text-top"
          />
          <span>{site.name}</span>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbarS" />
        <BsNavbar.Collapse id="navbarS">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/">
              INICIO
            </Nav.Link>
            <Nav.Link as={Link} to="/#sobre-mi">
              SOBRE MÍ
            </Nav.Link>
            <NavDropdown title="SERVICIOS" id="servicios-dropdown">
              {services.map((service) => (
                <NavDropdown.Item as={Link} to={service.path} key={service.path}>
                  {service.navLabel}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/#testimonios">
              TESTIMONIOS
            </Nav.Link>
            <Nav.Link as={Link} to="/#contacto">
              CONTACTO
            </Nav.Link>
            <Nav.Item className="nav-item-agenda-cita">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-agenda ms-lg-2"
              >
                Agenda tu cita
              </a>
            </Nav.Item>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}
