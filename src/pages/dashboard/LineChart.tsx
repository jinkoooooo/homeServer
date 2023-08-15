import React from "react";
import styled, { withTheme, ThemeProps } from "styled-components/macro";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
  Theme,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { fade } from "@material-ui/core/styles/colorManipulator";

import { Line } from "react-chartjs-2";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 378px;
`;

function LineChart({ theme }: ThemeProps<Theme>) {
  const data = (canvas: any) => {
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, fade(theme.palette.secondary.main, 0.0875));
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    return {
      labels: [
        "14 (Sun)",
        "15 (Mon)",
        "16 (Tue)",
        "17 (Wed)",
        "18 (Thu)",
        "19 (Fri)",
        "20 (Sat)",

      ],
      datasets: [
        {
          label: "출고 (건)",
          fill: true,
          backgroundColor: gradient,
          borderColor: theme.palette.secondary.main,
          data: [
            '12000',
            '12500',
            '10000',
            '13300',
            '0',
            '0',
            '0',
          ],
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.0)",
          },
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 1000,
            fontColor: theme.palette.text.secondary,
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0.0375)",
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  return (
    <Card mb={3}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertical />
          </IconButton>
        }
        title="주간 출고량"
      />
      <CardContent>
        <ChartWrapper>
          <Line data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
export default withTheme(LineChart);
