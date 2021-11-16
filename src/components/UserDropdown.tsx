import * as React from "react";
import styled from "styled-components/macro";
import { Power } from "react-feather";
import {Link, useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@material-ui/core";
import {useTypedSelector} from "../redux/reducers";
import KakaoLogin from "../pages/login/KakaoLogin";
import KakaoLogOut from "../pages/login/KakaoLogOut";
import {userLogout} from "../redux/reducers/authStore";


const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function UserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null);
  const history = useHistory();
  const dispatcher = useDispatch();

  const toggleMenu = (event: React.SyntheticEvent) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    try {
      return new Promise((resolve, reject) => {
        if (!window.Kakao) {
          reject('인스턴스 없음');
        }
        window.Kakao.Auth.logout(function() {
          dispatcher(
              userLogout()
          );
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem component={Link} to="/" onClick={handleSignOut}>LogOut</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserDropdown;
