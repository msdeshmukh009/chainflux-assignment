import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  BatchStateType,
  BatchPayloadType,
  BarPayloadType,
  DeleteBarPayloadType,
} from "../../types";

const initialState: BatchStateType = {
  batches: [
    {
      batchId: uuidv4(),
      batchNo: "243287",
      bars: [
        { barId: uuidv4(), barNo: "786972", barWeight: "2.5", fineness: "999.99" },
        { barId: uuidv4(), barNo: "786972", barWeight: "2.5", fineness: "999.99" },
      ],
    },
  ],
};

const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    editBatchNo: (state, { payload }: PayloadAction<BatchPayloadType>) => {
      state.batches = state.batches.map(batch =>
        batch.batchId === payload.batchId ? { ...batch, batchNo: payload.value } : batch
      );
    },
    editBarInfo: (state, { payload }: PayloadAction<BarPayloadType>) => {
      state.batches = state.batches.map(batch => {
        if (batch.batchId === payload.batchId) {
          return {
            ...batch,
            bars: batch.bars.map(bar =>
              bar.barId === payload.barId ? { ...bar, [payload.info.key]: payload.info.value } : bar
            ),
          };
        }
        return batch;
      });
    },
    addBar: (state, { payload }: PayloadAction<string>) => {
      state.batches = state.batches.map(batch =>
        batch.batchId === payload
          ? {
              ...batch,
              bars: [...batch.bars, { barId: uuidv4(), barNo: "", barWeight: "", fineness: "" }],
            }
          : batch
      );
    },
    addBatch: state => {
      state.batches = [
        ...state.batches,
        {
          batchId: uuidv4(),
          batchNo: "",
          bars: [{ barId: uuidv4(), barNo: "", barWeight: "", fineness: "" }],
        },
      ];
    },
    deleteBar: (state, { payload }: PayloadAction<DeleteBarPayloadType>) => {
      state.batches = state.batches.map(batch =>
        batch.batchId === payload.batchId
          ? { ...batch, bars: batch.bars.filter(bar => bar.barId !== payload.barId) }
          : batch
      );
    },
    deleteBatch: (state, { payload }: PayloadAction<string>) => {
      state.batches = state.batches.filter(batch => batch.batchId !== payload);
    },
  },
});

export const { editBatchNo, editBarInfo, addBar, addBatch, deleteBar, deleteBatch } =
  batchSlice.actions;

export default batchSlice.reducer;
