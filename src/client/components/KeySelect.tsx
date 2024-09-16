import { Select, Text } from "@mantine/core";

import { PicDataKey } from "../../lib/pic";

type Props = {
  axis: "" | "X" | "Y";
  value: PicDataKey;
  onChange: (key: PicDataKey) => void;
};

const KeySelect = ({ axis, value, onChange }: Props) => (
  <Select
    allowDeselect={false}
    data={PicDataKey.options}
    leftSection={
      <Text c="dimmed" fw={900}>
        {axis}
      </Text>
    }
    value={value}
    onChange={(key: string | null) => {
      if (key) onChange(key as PicDataKey);
    }}
    w={{ base: "100%", sm: "auto" }}
  />
);

export default KeySelect;
