import React from "react";
import _ from "lodash";
import styled from "styled-components";
import "../App.css";
import { habit_data } from "../data/habitPlannerData";
import type { HabitTask } from "../types/HabitPlanner";

type AddBtn = {
  color: string;
};

export function HabitPlanner() {
  const arryToCheckList = (array: HabitTask[]) => {
    return (
      <ul>
        {array.map((arrayItem, index) => (
          <Li key={index}>
            <input type="checkbox" checked={arrayItem.done} />
            <label>{arrayItem.task}</label>
          </Li>
        ))}
      </ul>
    );
  };

  function createTable() {
    const table = (
      <table>
        <thead>
          <tr>
            <th>h</th>
            <th>{habit_data[0].day}</th>
            <th>{habit_data[1].day}</th>
            <th>{habit_data[2].day}</th>
            <th>{habit_data[3].day}</th>
            <th>{habit_data[4].day}</th>
            <th>{habit_data[5].day}</th>
            <th>{habit_data[6].day}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <Td>1</Td>
            <Td>{arryToCheckList(habit_data[0].hour1)}</Td>
            <Td rowSpan={2}>{arryToCheckList(habit_data[1].hour1)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour1)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour1)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour1)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour1)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour1)}</Td>
          </tr>
          <tr>
            <Td>2</Td>
            <Td>{arryToCheckList(habit_data[0].hour2)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour2)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour2)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour2)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour2)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour2)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour2)}</Td>
          </tr>
          <tr>
            <Td>3</Td>
            <Td>{arryToCheckList(habit_data[0].hour3)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour3)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour3)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour3)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour3)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour3)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour3)}</Td>
          </tr>
          <tr>
            <Td>4</Td>
            <Td>{arryToCheckList(habit_data[0].hour4)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour4)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour4)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour4)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour4)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour4)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour4)}</Td>
          </tr>
          <tr>
            <Td>5</Td>
            <Td>{arryToCheckList(habit_data[0].hour5)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour5)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour5)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour5)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour5)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour5)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour5)}</Td>
          </tr>
          <tr>
            <Td>6</Td>
            <Td>{arryToCheckList(habit_data[0].hour6)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour6)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour6)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour6)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour6)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour6)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour6)}</Td>
          </tr>
          <tr>
            <Td>7</Td>
            <Td>{arryToCheckList(habit_data[0].hour7)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour7)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour7)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour7)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour7)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour7)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour7)}</Td>
          </tr>
          <tr>
            <Td>8</Td>
            <Td>{arryToCheckList(habit_data[0].hour8)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour8)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour8)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour8)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour8)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour8)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour8)}</Td>
          </tr>
          <tr>
            <Td>9</Td>
            <Td>{arryToCheckList(habit_data[0].hour9)}</Td>
            <Td>{arryToCheckList(habit_data[1].hour9)}</Td>
            <Td>{arryToCheckList(habit_data[2].hour9)}</Td>
            <Td>{arryToCheckList(habit_data[3].hour9)}</Td>
            <Td>{arryToCheckList(habit_data[4].hour9)}</Td>
            <Td>{arryToCheckList(habit_data[5].hour9)}</Td>
            <Td>{arryToCheckList(habit_data[6].hour9)}</Td>
          </tr>
        </tbody>
      </table>
    );
    return <div>{table}</div>;
  }

  return (
    <Div>
      <H2>Wochenplan</H2>
      {createTable()}
    </Div>
  );
}

const Div = styled.div`
  width: 100vw;
`;
const Col = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0 2px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tr_RSpan = styled.tr``;
const H2 = styled.h2`
  color: white;
`;

const Li = styled.li`
  //border: 1px solid blue;
  list-style-type: none;
  margin-left: -40px;
`;

const Td = styled.td`
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  min-width: 150px;
  &:first-child {
    min-width: 30px;
    text-align: center;
  }
`;
