import { Global, css, styled, connect, useConnect } from "frontity";
import Link from "./link";

/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu } = state.theme;
  const isThereLinks = menu?.length > 0;

  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
              className="link-mobile-menu"
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
      <Global styles={globalStyles} />
    </div>
  );
};

const MenuOverlay = styled.div`
  background-color: #51615f;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;
  padding-top: 32em !important;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 10px;
  font-family: arial, helvetica, sans-serif !important;
  letter-spacing: 1px;
  color: #dfdfdf !important;
  text-align: center;
  padding: 1.2rem 0;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    font-family: arial, helvetica, sans-serif !important;
    font-weight: bold;
  }
`;

const globalStyles = css`
  @media screen and (max-width: 560px) {
    .link-mobile-menu {
      font-size: smaller;
    }
  }
`;

export default connect(MenuModal, { injectProps: false });
