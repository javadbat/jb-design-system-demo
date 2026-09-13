import { JBInfiniteScroll } from "jb-infinite-scroll/react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import { useState } from "react";
export function JBInfiniteScrollSamples() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListEnded, setIsListEnded] = useState(false);
  const onScrollEnd = () => {
    const i = list[list.length - 1];
    if (i > 100) {
      setIsListEnded(true);
    }
    setIsLoading(true);
    setTimeout(() => {
      setList([
        ...list,
        ...[i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9],
      ]);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div>
      <SampleHeader title="JB Ininite Scroll"></SampleHeader>
      <SampleList>
        <SampleWrapper style={{ height: "400px" }}>
          <JBInfiniteScroll
            isListEmpty={false}
            isLoading={isLoading}
            isListEnded={isListEnded}
            onScrollEnd={onScrollEnd}
          >
            <div slot="content">
              {list.map((item) => {
                return (
                  <div
                    key={item}
                    style={{
                      border: "solid 1px #black",
                      fontSize: "3rem",
                      textAlign: "center",
                      padding: "2rem",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </JBInfiniteScroll>
        </SampleWrapper>
        <h3>With empty placeholder:</h3>
        <SampleWrapper style={{ height: "400px" }}>
          <JBInfiniteScroll isListEmpty={true}>
            <div
              slot="empty"
              style={{
                border: "1px solid #000",
                color: "#888",
              }}
            >
              we have no item here
            </div>
          </JBInfiniteScroll>
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
