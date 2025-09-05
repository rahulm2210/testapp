export default function handler(req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(`
    export default function DndDraggableExample() {
      return "Remote component loaded";
    }
  `);
}
