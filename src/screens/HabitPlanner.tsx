import React from "react";
import _ from "lodash";
import styled from "styled-components";
import "../App.css";

type AddBtn = {
  color: string;
};

export function HabitPlanner() {
  //<div className="frow"></div>

  return (
    <Div>
      <H2>Wochenplan</H2>

      <table>
        <thead>
          <tr>
            <th>h</th>
            <th>Montag</th>
            <th>Dienstag</th>
            <th>Mittwoch</th>
            <th>Donnerstag</th>
            <th>Freitag</th>
            <th>Samstag</th>
            <th>Sonntag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>1</Td>
            <Td>
              <ul>
                <Li>
                  <input type="checkbox" />
                  <label>Todo 1</label>
                </Li>
                <Li>
                  <input type="checkbox" />
                  <label>Todo 2</label>
                </Li>
                <Li>
                  <input type="checkbox" />
                  <label>Todo 2</label>
                </Li>
              </ul>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <Tr_RSpan>
            <Td>2</Td>
            <Td rowSpan={2}>
              <ul>
                <Li>
                  <input type="checkbox" />
                  <label>
                    10 - 13 Uhr
                    <br />
                    Töpfern
                  </label>
                </Li>
              </ul>
            </Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr_RSpan>
          <tr>
            <Td>3</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <tr>
            <Td>4</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <tr>
            <Td>5</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <tr>
            <Td>6</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <tr>
            <Td>7</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
          <tr>
            <Td>8</Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </tr>
        </tbody>
      </table>
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
  background-color: rgba(255, 255, 255, 0.3);

  min-width: 150px;
  &:first-child {
    min-width: 30px;
    text-align: center;
  }
`;
