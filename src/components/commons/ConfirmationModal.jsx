import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
export default function ConfirmationModal({ deleteArt }) {
  return (
    <Button
      onClick={deleteArt}
      className="custom-button-confirm"
      okText="Delete"
    >
      <span className="text-danger">Delete</span>
    </Button>
  );
}
