import React from "react";
import styled, { withTheme, ThemeProps } from "styled-components/macro";

import {green, red, indigo, cyan, lightBlue, teal} from "@material-ui/core/colors";

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

type DoughnutChartByOperationProps = {
  total:number,
  labelArray: string[],
  dataArray: number[]
}

export default function DoughnutChartByOperation(props:DoughnutChartByOperationProps) {
  const data = {
    labels: props.labelArray,
    datasets: [
      {
        data: props.dataArray,
        backgroundColor: [
          indigo['A100'],
          cyan['700'],
          lightBlue['400'],
          teal['A400']
        ],
        borderWidth: 0,
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
        title="출고 운영업무별 작업비율"
      />

      <CardContent>
        <ChartWrapper>
          <DoughnutInner>
            <Typography variant="h4">{props.total.toLocaleString() + " 건"}</Typography>
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
            {
              props.labelArray.map((label, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{label}</TableCell>
                    <TableCell align="right">{props.dataArray[index].toLocaleString()}</TableCell>
                    <TableCell align="right">
                      <GreenText>{(props.dataArray[index]/props.total*100).toFixed(2).toString()+"%"}</GreenText>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

