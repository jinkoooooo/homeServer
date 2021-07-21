import React from "react";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  CardHeader,
  Chip as MuiChip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { red, green } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)<{ rgbcolor: string }>`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

// Sample data
let id = 0;
const createData = (deviceName: string, type: string, ip: string, port: string, useYn: string, status: JSX.Element) => {
  id += 1;
  return { id, deviceName, type, ip, port, useYn, status };
};

const rows = [
  createData(
    "Storage#1",
    "STORAGE",
    "127.0.0.1",
    "12001",
    "Y",
    <Chip label="CONNECT" rgbcolor={green[500]} />,
  ),
  createData(
    "Transfer#1",
    "TRANSFER",
    "127.0.0.1",
    "12002",
    "Y",
    <Chip label="CONNECT" rgbcolor={green[500]} />,
  ),
  createData(
    "Transfer#2",
    "TRANSFER",
    "127.0.0.1",
    "12003",
    "Y",
    <Chip label="CONNECT" rgbcolor={green[500]} />,
  ),
  createData(
    "Picking#1",
    "PICKING",
    "127.0.0.1",
    "12004",
    "Y",
    <Chip label="DISCONNECTED" rgbcolor={red[500]} />,
  ),
  createData(
    "Sorter#1",
    "SORTER",
    "127.0.0.1",
    "12005",
    "Y",
    <Chip label="CONNECT" rgbcolor={green[500]} />,
  ),
];

const DeviceConnectionInfo = () => (
  <Card mb={3}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertical />
        </IconButton>
      }
      title="장비 연결 상태"
    />

    <Paper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>장비명</TableCell>
              <TableCell align="center">타입</TableCell>
              <TableCell align="center">IP</TableCell>
              <TableCell align="center">port</TableCell>
              <TableCell align="center">사용여부</TableCell>
              <TableCell align="center">연결상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.deviceName}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.ip}</TableCell>
                <TableCell align="center">{row.port}</TableCell>
                <TableCell align="center">{row.useYn}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Paper>
  </Card>
);

export default DeviceConnectionInfo;
