import React from "react";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "Ionut Predoi",
    description: "Bootcamper4",
    meta: "ROI: 30%",
  },
  {
    name: "Ismail Ali",
    role: "Bootcamper4",
    meta: "ROI: 30%",
  },
  {
    name: "Hajoo Chung",
    role: "Bootcamper4",
    meta: "ROI: 30%",
  },
];

const ProgressCard = () => <Card.Group items={items} />;

export default ProgressCard;
