import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../sample-data/orders.json");

const readOrdersData = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeOrdersData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const getOrder = (req, res, next) => {
  try {
    const orders = readOrdersData();
    const order = orders.find((order) => order.id === parseInt(req.params.id));
    if (order) {
      res.send(order);
    } else {
      next({ message: "Order not found", status: 404 });
    }
  } catch (error) {
    next({ message: "Failed to fetch order", status: 500 });
  }
};

export const placeOrder = (req, res, next) => {
  try {
    const orders = readOrdersData();
    const newOrder = req.body;
    orders.push(newOrder);
    writeOrdersData(orders);
    res.status(201).send(newOrder);
  } catch (error) {
    next({ message: "Failed to create order ", status: 500 });
  }
};

export const deleteOrder = (req, res, next) => {
  try {
    let orders = readOrdersData();
    const index = orders.findIndex(
      (order) => order.id === parseInt(req.params.id)
    );
    if (index !== -1) {
      orders = orders.filter((order) => order.id !== parseInt(req.params.id));
      writeOrdersData(orders);
      res.sendStatus(204);
    } else {
      next({ message: "Order not found", status: 404 });
    }
  } catch (error) {
    next({ message: "Failed to delete order", status: 500 });
  }
};
