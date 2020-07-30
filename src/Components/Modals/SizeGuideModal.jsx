import React from "react";

import Modal from "react-modal";

const SizeGuideModal = (props) => {
  return (
    <Modal
      isOpen={props.sizeGuide}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => props.setSizeGuide(false)}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.6)",
          zIndex: "9999",
        },
        content: {
          position: "absolute",
          width: "50%",
          margin: "10px auto",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%,-50%)",
          border: "none",
          background: "transparent",
          overflow: "inherit",
          WebkitOverflowScrolling: "touch",
          borderRadius: 0,
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="modal-content ">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => props.setSizeGuide(false)}
            ariaHidden="true"
          >
            <span className="icon icon-clear"></span>
          </button>
        </div>
        <div className="modal-body">
          <div className="tt-layout-product-info">
            <h6 className="tt-title">SIZE GUIDE</h6>
            <p>
              This is an approximate conversion table to help you find your
              size.
            </p>
            <div className="tt-table-responsive-md">
              <table className="tt-table-modal-info">
                <thead>
                  <tr>
                    <th width="25%">Size</th>
                    <th width="25%">Small</th>
                    <th width="25%">Medium</th>
                    <th width="25%">Large</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Neck</td>
                    <td>14</td>
                    <td>15.5</td>
                    <td>16.5</td>
                  </tr>
                  <tr>
                    <td>Shoulder</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Chest</td>
                    <td>36</td>
                    <td>38</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Sleeve</td>
                    <td>24</td>
                    <td>25.5</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>Waist</td>
                    <td>30</td>
                    <td>34</td>
                    <td>37</td>
                  </tr>
                  <tr>
                    <td>Hip</td>
                    <td>38</td>
                    <td>40</td>
                    <td>42</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <small>Note: Above measurments are in cm</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SizeGuideModal;
