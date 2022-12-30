import Image from "next/image";

interface SvgIconProps {
  icon: string;
  width?: number;
  height?: number;
}

export default function SvgIcon(props: SvgIconProps) {
  return (
    <Image
      src={"/icon/" + props.icon + ".svg"}
      alt={props.icon}
      width={props.width || 40}
      height={props.height || 40}
    ></Image>
  );
}
