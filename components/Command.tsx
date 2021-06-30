import { useState } from "react";
import useMeasure from "react-use-measure";
import { Command as ICommand } from "../interfaces/commands";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface IProps {
  data: ICommand;
  index: number;
}

const Command = ({ data, index }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({});
  const [mesRef, { height: viewHeight }] = useMeasure();

  const leftTrans = useSpring({
    to: {
      x: inView && 0,
    },
    from: { x: -200 },
    delay: 100,
  });

  const rightTrans = useSpring({
    to: {
      x: inView && 0,
    },
    from: { x: 200 },
    delay: 100,
  });

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const height = useSpring({
    to: {
      height: isOpen ? viewHeight : viewHeight,
    },
  });

  return (
    <animated.div style={index % 2 ? leftTrans : rightTrans} ref={ref}>
      <animated.div style={height}>
        <Col
          md="8"
          xs="10"
          lg="6"
          className={index % 2 ? "command-left" : "command-right"}
          ref={mesRef}
        >
          <div className="command">
            <p> {data.description} </p>
            <div className="d-flex">
              <p className="command__command"> {data.label} </p>
              {data.showTriangle && (
                <div
                  onClick={handleOnClick}
                  className={isOpen ? "arrow__down" : "arrow__up"}
                ></div>
              )}
            </div>
            {isOpen && data.img && (
              <div className="command__img">
                <Image
                  src={data.img.urlImage}
                  alt="command-img"
                  width={data.img.widthImg}
                  height={data.img.heightImg}
                />
              </div>
            )}
          </div>
        </Col>
      </animated.div>
    </animated.div>
  );
};

export default Command;
