import "./batch.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Batch } from "./Batch";
import { addBatch } from "../batchSlice";

const BatchList = () => {
  const dispatch = useAppDispatch();

  const { batches } = useAppSelector(state => state.batch);

  const handleAddBatch = () => {
    dispatch(addBatch());
  };

  return (
    <main className="main-container">
      <div className="batch-container">
        {batches.map(({ batchNo, bars, batchId }, index) => (
          <Batch batchNo={batchNo} bars={bars} batchId={batchId} batchIndex={index} />
        ))}
      </div>
      <div className="add-btn-container">
        <button className="add-btn" onClick={handleAddBatch}>
          <i className="fal fa-plus"></i>
        </button>
        <span>Add Batch</span>
      </div>
    </main>
  );
};

export { BatchList };
