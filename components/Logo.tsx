interface Props {
  size: number;
}

const Logo = ({ size }: Props): JSX.Element => {
  return (
    <>
      <div
        style={{
          height: size,
          width: size,
        }}
        className="logo"
      >
        <div className="center" />
        <div className="lighten_left" />
        <div className="lighten_right" />
      </div>
    </>
  );
};

export default Logo;
