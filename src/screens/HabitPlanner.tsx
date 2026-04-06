import React, { useState } from "react";
import _ from "lodash";
import styled from "styled-components";
import "../App.css";
import { habit_data } from "../data/habitPlannerData";
import type { HabitTask, HabitDay } from "../types/HabitPlanner";

type AddBtn = {
  color: string;
};
//const [checkBoxState, setCheckBoxState] = useState();
export function HabitPlanner() {
  const arrayToCheckList = (array: HabitTask[]) => {
    return (<>
      <EditListForm>
        <H6>Liste bearbeiten</H6>
        <label>Punkt hinzufügen</label>
        <InputNewListItem type="text" value="neue Aufgabe"/>
        <input type="submit" value="Speichern"/>

      </EditListForm>
      <DivUl>
        <Ul>
          {array.map((arrayItem, index) => (
            <Li key={index}>
              <input type="checkbox" checked={arrayItem.done} />
              <label>{arrayItem.task}</label>
            </Li>
          ))}
        </Ul>
      </DivUl>
      </>
    );
  };

  const createTableRow = (
    hourKey: Exclude<keyof HabitDay, "day">,
    hourNumber: number
  ) => {
    return (
      <tr>
        <Td>{hourNumber}</Td>
        {habit_data.map((day, index) => (
          <Td key={index}>{arrayToCheckList(day[hourKey])}</Td>
        ))}
      </tr>
    );
  };

  function createTable() {
    const allNamesOfTableRows = _.keys(habit_data[0]).filter((key) =>
      key.startsWith("hour")
    );

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
          {/* <Td rowSpan={2}>{arryToCheckList(habit_data[1].hour1)}</Td> */}
          {allNamesOfTableRows.map((hourKey, index) => {
            return createTableRow(hourKey as keyof HabitDay, index);
          })}
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
const Ul = styled.ul`
  border: 1px solid blue;
  margin: 5px 0;
`;

const DivUl = styled.div`
border: 1px solid yellow;
background-color: rgba(255, 255, 255, 0.3);

  &:hover{
    visibility:collapse;
  
  }
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


const EditListForm = styled.form`
border: 1px solid red;
&:hover{
  background-color: rgba(150, 150, 255, 0.8);
}`;

const H6 = styled.h6`
  padding:0;
  margin:0;
  font-size:10pt;
}`;

const InputNewListItem = styled.input`
background-color: rgba(150, 250, 150, 0.8);
}`;

