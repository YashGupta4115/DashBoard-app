import Header from "../../../Components/Header/Header";
import { useTheme } from "../../../Context/themeContext";
import "./Kanban.css";
import { kanbanData, kanbanGrid } from "../../../Assests/data/dummy";
import { useState } from "react";

export const DropArea = ({ onDrop, status, position }) => {
  const [showDropArea, setShowDropArea] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      onDrop={(e) => {
        e.preventDefault();
        onDrop(status, position);
        setShowDropArea(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      style={{
        opacity: showDropArea ? "1" : "0",
        height: showDropArea ? "40px" : "10px",
        transition: "all ease 0.2s",
      }}
    >
      Drop Here
    </section>
  );
};

const Kanban = () => {
  const { displayMode } = useTheme();
  const [activeTask, setActiveTask] = useState(null);
  const [tasks, setTasks] = useState(kanbanData);

  const onDrop = (status, position) => {
    console.log(
      `${activeTask} is set to be positioned at ${position} with status ${status}`
    );

    const taskToMove = tasks.find((data) => data.Id === activeTask);
    const updatedTasks = tasks.filter((data) => data.Id !== activeTask);

    if (taskToMove) {
      taskToMove.Status = status;
      updatedTasks.splice(position, 0, taskToMove);
    }

    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  return (
    <div
      className={
        displayMode === "light" ? "orders-container" : "orders-container-dark"
      }
    >
      <Header Category={"App"} title={"Kanban"} />
      <div className="kanban-box">
        {kanbanGrid.map((grid) => {
          let filteredList = tasks.filter(
            (data) => data.Status === grid.keyField
          );
          return (
            <div
              key={grid.id}
              className="kanban-header"
              style={{
                boxShadow: displayMode === "light" ? `0 0 5px 0 black` : "",
                background: displayMode === "dark" ? "#20232A" : "white",
              }}
            >
              <div className="kanban-header-title">
                {grid.Header} <span>{`(${filteredList.length}-items)`}</span>
              </div>
              <DropArea onDrop={onDrop} status={grid.keyField} position={0} />
              {filteredList.map((list, index) => (
                <div key={list.Id}>
                  <div
                    className="kanban-data"
                    draggable
                    onDragStart={() => setActiveTask(list.Id)}
                    style={{
                      boxShadow:
                        displayMode === "light" ? `0 0 5px 0 black` : "",
                      background:
                        displayMode === "dark" ? "#33373E" : "#DBD8D8",
                    }}
                  >
                    <span style={{ marginBottom: "5px" }}>{list.Title}</span>
                    <span>{list.Summary}</span>
                  </div>
                  <DropArea
                    onDrop={onDrop}
                    status={list.Status}
                    position={index + 2}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kanban;
