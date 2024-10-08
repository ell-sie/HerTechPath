// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';

// const data = [
//   { value: 5, label: 'UI' },
//   { value: 10, label: 'Javascript' },
//   { value: 15, label: 'lal' },
//   { value: 20, label: 'Didi' },
// ];

// const size = {
//   width: 400,
//   height: 200,
// };

// const StyledText = styled('text')(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 20,
// }));

// function PieCenterLabel({ children }: { children: React.ReactNode }) {
//   const { width, height, left, top } = useDrawingArea();
//   return (
//     <StyledText x={left + width / 2} y={top + height / 2}>
//       {children}
//     </StyledText>
//   );
// }

// export default function PieChartWithCenterLabel() {
//   return (
//     <PieChart series={[{ data, innerRadius: 75, paddingAngle: 5, }]} {...size}>
//       <PieCenterLabel>Center label</PieCenterLabel>
//     </PieChart>
//   );
// }

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'UI' },
  { value: 10, label: 'Javascript' },
  { value: 15, label: 'lal' },
  { value: 20, label: 'Didi' },
];

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

type PieChartWithCenterLabelProps = {
  width?: number;
  height?: number;
};

export default function PieChartWithCenterLabel({
  width = 400, // Default width
  height = 200, // Default height
}: PieChartWithCenterLabelProps) {
  return (
    <PieChart
      series={[{ data, innerRadius: 75, paddingAngle: 5 }]}
      width={width}
      height={height}
    >
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
  );
}
