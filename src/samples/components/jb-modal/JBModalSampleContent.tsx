import { JBButton } from "jb-button/react";
type Props = {
  onClose: VoidFunction;
};
export function JBModalSampleContent(props: Props) {
  return (
    <div
      style={{
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1rem",
      }}
    >
      <h2>jb modal sample content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <JBButton onClick={props.onClose}>close</JBButton>
    </div>
  );
}
