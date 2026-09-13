import { JBOption, JBOptionList, JBSelect } from "jb-select/react";
import { useState } from "react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
const numberOptionList = [1, 2, 3];
const personList = [
  { name: "ali", age: 10 },
  { name: "reza", age: 12 },
  { name: "joe", age: 14 },
];
const colorList = [
  {
    id: 1,
    name: "Red",
    value: "#f00",
  },
  {
    id: 2,
    name: "Green",
    value: "#0f0",
  },
  {
    id: 3,
    name: "Blue",
    value: "#00f",
  },
  {
    id: 4,
    name: "Yellow",
    value: "#ff0",
  },
];
export function JBSelectSamples() {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  return (
    <div>
      <SampleHeader title="JB Select"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBSelect
            label="simple usage"
            message={"value: " + value}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <JBOption value={1}>1</JBOption>
            <JBOption value={2}>2</JBOption>
            <JBOption value={3}>3</JBOption>
          </JBSelect>
        </SampleWrapper>
        <SampleWrapper>
          <JBSelect
            label="with object value"
            message={"value: " + JSON.stringify(value2)}
            value={value}
            onChange={(e) => setValue2(e.target.value)}
          >
            <JBOption value={{ name: "ali", age: 10 }}>Ali</JBOption>
            <JBOption value={{ name: "reza", age: 12 }}>Reza</JBOption>
            <JBOption value={{ name: "joe", age: 14 }}>Joe</JBOption>
          </JBSelect>
        </SampleWrapper>
        <SampleWrapper>
          <JBSelect label="with option list">
            <JBOptionList optionList={numberOptionList} />
          </JBSelect>
        </SampleWrapper>
        <SampleWrapper>
          <JBSelect label="with object option list">
            <JBOptionList optionList={personList} getTitle={(o) => o.name} />
          </JBSelect>
        </SampleWrapper>
        <SampleWrapper>
          <JBSelect label="with custom content">
            {colorList.map((c) => (
              <JBOption value={c.id}>
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "8px",
                    marginInlineEnd: "4px",
                    backgroundColor: c.value,
                  }}
                />
                {c.name}
              </JBOption>
            ))}
          </JBSelect>
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
