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
    return (
      <>
        <EditListForm>
          <H6>Liste bearbeiten</H6>
          <label>Punkt hinzufügen</label>
          <InputNewListItem type="text" value="neue Aufgabe" />
          <input type="submit" value="Speichern" />
        </EditListForm>
        <TdDiv>
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
          <EditIconDiv>
            <IconImg
              width="24"
              height="24"
              src="https://img.icons8.com/android/24/edit.png"
              alt="edit"
            />
          </EditIconDiv>
        </TdDiv>
      </>
    );
  };

  const createTableRow = (
    hourKey: Exclude<keyof HabitDay, "day">,
    hourNumber: number,
  ) => {
    return (
      <tr>
        <Td>{hourNumber}</Td>
        {habit_data.map((day, index) => (
          <TdList key={index}>{arrayToCheckList(day[hourKey])}</TdList>
        ))}
      </tr>
    );
  };

  function createTable() {
    const allNamesOfTableRows = _.keys(habit_data[0]).filter((key) =>
      key.startsWith("hour"),
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
  margin: 5px 0;
`;

const DivUl = styled.div`
  //border: 1px solid yellow;
  //background-color: rgba(255, 255, 255, 0.3);

  &:hover {
    visibility: collapse;
  }
`;

const Li = styled.li`
  //border: 1px solid blue;
  list-style-type: none;
  margin-left: -40px;
`;

const TdDiv = styled.td`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Td = styled.td`
  background-color: rgba(255, 255, 255, 0.6);
  color: black;
  min-width: 150px;
  &:first-child {
    min-width: 30px;
    text-align: center;
  }
`;

const TdList = styled.td`
  border: 1px solid green;

  position: relative;
  padding-left: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  min-width: 160px;
`;

const EditListForm = styled.form`
  position: absolute;
  z-index: 1;
  border: 1px solid red;
  opacity: 0;
  &:hover {
    opacity: 1;
    background-color: rgb(141, 168, 219);
  }
`;

const EditIconDiv = styled.div`
  text-align: center;

  background-color: rgb(60, 116, 76);
  width: 36px;
  height: 36px;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  //box-shadow: -2px 2px 7px rgba(37, 50, 68, 0.4);
`;

const IconImg = styled.img`
  filter: invert(100%);
  //filter: opacity(60%);
  width: 20px;
  height: auto;
  margin: 6px -3px 0 0;
`;

const H6 = styled.h6`
  padding:0;
  margin:0;
  font-size:10pt;
}`;

const InputNewListItem = styled.input`
background-color: rgba(150, 250, 150, 0.8);
}`;
