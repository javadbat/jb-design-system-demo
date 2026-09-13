import { JBModal } from "jb-modal/react";
import { SampleList } from "../components/SampleList";
import { SampleHeader } from "../components/SampleHeader/SampleHeader";
import { SampleWrapper } from "../components/SampleWrapper";
import "./jb-loading.css";
import { JBButton } from "jb-button/react";
import { useState } from "react";
import { JBLoadingSamples } from "./JBLoading";
import { JBModalSampleContent } from "./components/jb-modal/JBModalSampleContent";
export function JBModalSamples() {
  const [open, setOpen] = useState(false);
  const [idOpen, setIdOpen] = useState(false);
  return (
    <div>
      <SampleHeader title="JB Modal"></SampleHeader>
      <SampleList>
        <SampleWrapper>
          <JBButton onClick={() => setOpen(true)}>open modal</JBButton>
          <JBModal
            isOpen={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <JBModalSampleContent
              onClose={() => {
                setOpen(false);
              }}
            />
          </JBModal>
        </SampleWrapper>
        <SampleWrapper>
          <p>
            click on this button and see the url. you can refresh the page while
            modal is open.
          </p>
          <JBButton onClick={() => setIdOpen(true)}>
            open modal with id
          </JBButton>
          <JBModal
            isOpen={idOpen}
            onClose={() => {
              setIdOpen(false);
            }}
            id="MyModal"
            onUrlOpen={() => setIdOpen(true)}
          >
            <JBModalSampleContent
              onClose={() => {
                setIdOpen(false);
              }}
            />
          </JBModal>
        </SampleWrapper>
      </SampleList>
    </div>
  );
}
