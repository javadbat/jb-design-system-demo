import { JBImageInput } from "jb-image-input/react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import "./jb-image-input.css";
export function JBImageInputSamples() {
  return (
    <div>
      <SampleHeader title="JB Image Input"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBImageInput label="select your image" />
        </SampleWrapper>
        <SampleWrapper>
          <JBImageInput
            label="select your image"
            message={"with max 500k size"}
            maxFileSize={1024 * 500}
            required
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBImageInput
            label="with fixed dimention"
            message="400 X 400"
            className="fixed-dimension"
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBImageInput
            label="with required"
            message="click on below button to check validation"
            required
          />
        </SampleWrapper>
        <SampleWrapper>
          <JBImageInput label="custom placeholder">
            <div className="custom-placeholder" slot="placeholder">
              <div className="emoji">🐼</div>
              <div>my app custom placeholder</div>
              <div>click to select image</div>
            </div>
          </JBImageInput>
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
