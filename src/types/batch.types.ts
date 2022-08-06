type BarType = {
  barId: string;
  barNo: string;
  barWeight: string;
  fineness: string;
};

type BatchType = {
  batchId: string;
  batchNo: string;
  bars: BarType[];
};

type BatchStateType = {
  batches: BatchType[];
};

type BatchPayloadType = {
  batchId: string;
  value: string;
};

type BarPayloadType = {
  batchId: string;
  barId: string;
  info: {
    key: "barNo" | "barWeight" | "fineness";
    value: string | number;
  };
};

type DeleteBarPayloadType = {
  batchId: string;
  barId: string;
};
export type {
  BarType,
  BatchType,
  BatchStateType,
  BarPayloadType,
  BatchPayloadType,
  DeleteBarPayloadType,
};
