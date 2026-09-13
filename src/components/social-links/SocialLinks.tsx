import { JBButton } from "jb-button/react";

export type Props = {
  github?: string;
  style?: React.CSSProperties;
};
export function SocialLinks(props: Props) {
  return (
    <div style={{ ...props.style }}>
      {props.github && (
        <a href={props.github} target="_blank">
          <JBButton variant="outline" color="dark" size="sm">
            <img
              src="https://github.githubassets.com/favicons/favicon.svg"
              height={20}
            />
            <div>Github</div>
          </JBButton>
        </a>
      )}
    </div>
  );
}
