import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "reactstrap";
import styled from "styled-components";
import { SidebarItem } from "./models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.5em;
  padding: 2rem;
  text-decoration: none !important;
  color: inherit !important;
  color: #ffffff;

  &:hover {
    background-color: #1f1f1b;
    border-left: 4px solid #6d44dc;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 1rem;
`;
const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.75rem;
  font-size: 1.5em;
  padding-left: 3rem;
  text-decoration: none !important;
  color: inherit !important;
  color: #ffffff;

  &:hover {
    background-color: #6d44dc;
  }
`;

const SubMenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item?.subnav && subnav ? item?.iconOpend:item?.iconClosed  }</div>
      </SidebarLink>
      {subnav &&
        item?.subnav?.map((subNavItem, index) => {
          return (
            <DropdownLink to={subNavItem.path} key={index}>
              {subNavItem.icon}
              <SidebarLabel>{subNavItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
