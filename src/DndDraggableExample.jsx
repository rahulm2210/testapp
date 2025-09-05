import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

const initialItems = [
  { id: "1", content: "Block One" },
  { id: "2", content: "Block Two" },
  { id: "3", content: "Block Three" },
];

const DndDraggableExample = () => {
  const [items, setItems] = React.useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);

    setItems(newItems);
  };

  return (
    <div style={{ padding: "50px" }}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ width: 250, minHeight: 200 }}
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        padding: 16,
                        margin: "0 0 8px 0",
                        minHeight: "50px",
                        backgroundColor: snapshot.isDragging
                          ? "#1976d2"
                          : "#2196f3",
                        color: "white",
                        borderRadius: 4,
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DndDraggableExample;
