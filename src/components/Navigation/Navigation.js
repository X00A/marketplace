import {
  ContainerNavigation,
  HeaderGroup,
  StyledLink,
} from "./Navigation.style";
import { Container } from "semantic-ui-react";
import { Switch, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const getPageName = (pageLocation) => {
    switch (pageLocation) {
      case "/":
        return "Home";

      case "/products":
        return "Products";

      default:
        return "404: Page not found!";
        break;
    }
  };

  return (
    <ContainerNavigation>
      <Container>
        <HeaderGroup>
          <h1>{getPageName(location.pathname)}</h1>
          <div>
            <StyledLink to='/' active={location.pathname === "/"}>
              Home page
            </StyledLink>
            <StyledLink
              to='/products'
              active={location.pathname === "/products"}>
              Products
            </StyledLink>
          </div>
        </HeaderGroup>
      </Container>
    </ContainerNavigation>
  );
}

export default Navigation;
