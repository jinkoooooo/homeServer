import React, {useEffect} from "react";
import styled from "styled-components/macro";

import { Button as MuiButton, Menu, MenuItem } from "@material-ui/core";

import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

const SmallButton = styled(Button)`
  padding: 4px;
  min-width: 0;

  svg {
    width: 0.9em;
    height: 0.9em;
  }
`;

function Actions() {
  const [today, setToday] = React.useState(new Date());
  const [reMountFlag, setReMountFlag] = React.useState(false);

  useEffect(() => {
    setToday(new Date());

  },[reMountFlag]);

  return (
    <React.Fragment>
      <SmallButton size="small" mr={2}>
        <LoopIcon onClick={() => {setReMountFlag(!reMountFlag)}}/>
      </SmallButton>
      {today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate()+" - "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()}
    </React.Fragment>
  );
}

export default Actions;
