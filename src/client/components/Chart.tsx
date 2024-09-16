import React, { useState } from "react";
import * as Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { Group, Stack, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import { PIC, PicKey, PicDataKey } from "../../lib/pic";
import KeySelect from "./KeySelect";

function Chart() {
  const [data, setData] = useState<PIC[]>([]);
  const [xAxisKey, setXAxisKey] = useState<PicDataKey>(PicDataKey.enum.HSCW);
  const [yAxisKey, setYAxisKey] = useState<PicDataKey>(PicDataKey.enum.IMF);

  React.useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        notifications.show({
          color: "red",
          title: "Data error",
          message: "Error fetching data",
        });
      });
  }, []);

  const options: Highcharts.Options = React.useMemo(
    () => ({
      title: {
        text: undefined,
      },
      series: [
        {
          type: "scatter",
          name: "trace",
          data: data
            .filter(
              (d) =>
                typeof d[xAxisKey] === "number" &&
                typeof d[yAxisKey] === "number",
            )
            .map((d) => ({
              ...d,
              x: d[xAxisKey] as number,
              y: d[yAxisKey] as number,
            })),
          tooltip: {
            pointFormat: PicKey.options
              .map((key) => `<br/>${key}: <b>{point.${key}}</b>`)
              .join(""),
          },
        },
      ],
      xAxis: {
        title: { text: xAxisKey },
      },
      yAxis: { title: { text: yAxisKey } },
      credits: { enabled: false },
    }),
    [data, xAxisKey, yAxisKey],
  );

  return (
    <Stack style={{ width: "80vw" }}>
      <Title size="h3">{`${xAxisKey} vs ${yAxisKey}`}</Title>
      <Group>
        <KeySelect axis="X" value={xAxisKey} onChange={setXAxisKey} />
        <KeySelect axis="Y" value={yAxisKey} onChange={setYAxisKey} />
      </Group>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Stack>
  );
}

export default Chart;
