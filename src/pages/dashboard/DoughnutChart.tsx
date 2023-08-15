import React from "react";
import styled, { withTheme, ThemeProps } from "styled-components/macro";

import {orange, green, red, grey, lightGreen} from "@material-ui/core/colors";

import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
  Theme,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { Doughnut } from "react-chartjs-2";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 168px;
  position: relative;
`;

const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -22px;
  text-align: center;
  z-index: 0;
`;

const TableRow = styled(MuiTableRow)`
  height: 42px;
`;

const TableCell = styled(MuiTableCell)`
  padding-top: 0;
  padding-bottom: 0;
`;

const GreenText = styled.span`
  color: ${() => green[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const RedText = styled.span`
  color: ${() => red[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

type DoughnutChartProps = {
  total:number,
  throughput:number,
  reject:number,
  residual:number
}

export default function DoughnutChart(props:DoughnutChartProps) {
  const data = {
    labels: ["처리량", "리젝량", "잔여량"],
    datasets: [
      {
        data: [props.throughput, props.reject, props.residual],
        backgroundColor: [
          lightGreen['A400'],
          red['A400'],
          //theme.palette.grey[200],
        ],
        borderWidth: 1,
        borderColor: grey[500]
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };

  return (
    <Card mb={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="실시간 작업 현황"
      />

      <CardContent>
        <ChartWrapper>
          <DoughnutInner>
            <Typography variant="h4">{(props.throughput/props.total*100).toFixed(2).toString()+"%"}</Typography>
            <Typography variant="caption">end late</Typography>
          </DoughnutInner>
          <Doughnut data={data} options={options} />
        </ChartWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>분류</TableCell>
              <TableCell align="right">수량 (건)</TableCell>
              <TableCell align="right">비율</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                처리량
              </TableCell>
              <TableCell align="right">{props.throughput}</TableCell>
              <TableCell align="right">
                <GreenText>{(props.throughput/props.total*100).toFixed(2).toString()+"%"}</GreenText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                리젝량
              </TableCell>
              <TableCell align="right">{props.reject}</TableCell>
              <TableCell align="right">
                <RedText>{(props.reject/props.total*100).toFixed(2).toString()+"%"}</RedText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                잔여량
              </TableCell>
              <TableCell align="right">{props.residual}</TableCell>
              <TableCell align="right">
                <GreenText>{(props.residual/props.total*100).toFixed(2).toString()+"%"}</GreenText>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

