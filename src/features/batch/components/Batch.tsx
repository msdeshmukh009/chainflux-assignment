import { useAppDispatch } from "../../../app/hooks";
import { editBatchNo, editBarInfo, addBar, deleteBar, deleteBatch } from "../batchSlice";
import { BatchType } from "../../../types";

type BatchIndexType = {
  batchIndex: number;
};

type BatchPropType = BatchType & BatchIndexType;

const Batch = ({ batchNo, bars, batchId, batchIndex }: BatchPropType) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, barId: string) => {
    const { name, value } = e.target;
    if (name === "barNo" || name === "barWeight" || name === "fineness") {
      dispatch(editBarInfo({ batchId, barId, info: { key: name, value } }));
    }
  };

  const handleAddBar = () => {
    dispatch(addBar(batchId));
  };

  const handleDeleteBar = (barId: string) => {
    dispatch(deleteBar({ batchId, barId }));
  };

  const handleDeleteBatch = () => {
    dispatch(deleteBatch(batchId));
  };

  return (
    <div className="batch-container">
      <div className="batch-number-input">
        <input
          id="batch-number"
          className="input-box"
          type="text"
          name="batchNo"
          value={batchNo}
          placeholder="Batch Number"
          onChange={e => {
            dispatch(editBatchNo({ batchId, value: e.target.value }));
          }}
        />
        <button
          className={`close-btn ${batchIndex === 0 ? "visibility-none" : ""}`}
          onClick={handleDeleteBatch}
        >
          <i className="fal fa-times"></i>
        </button>
      </div>

      <div className="bar-info-container">
        <h3>Capture Bar Details</h3>
        {bars.map(({ barNo, barWeight, fineness, barId }, index) => (
          <div className="bar-info">
            <input
              className="input-box"
              type="text"
              name="barNo"
              value={barNo}
              placeholder="Bar Number"
              onChange={e => handleChange(e, barId)}
            />
            <input
              className="input-box"
              type="text"
              name="barWeight"
              value={barWeight}
              placeholder="Bar Weight"
              onChange={e => handleChange(e, barId)}
            />
            <input
              className="input-box"
              type="text"
              name="fineness"
              value={fineness}
              placeholder="Fineness"
              onChange={e => handleChange(e, barId)}
            />
            <button
              className={`close-btn ${index === 0 ? "visibility-none" : ""}`}
              onClick={() => handleDeleteBar(barId)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
        ))}
        <div className="add-btn-container">
          <button className="add-btn" onClick={handleAddBar}>
            <i className="fal fa-plus"></i>
          </button>
          <span>Add Bar</span>
        </div>
      </div>
    </div>
  );
};

export { Batch };
