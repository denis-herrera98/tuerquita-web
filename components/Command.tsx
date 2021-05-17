import { useState } from "react";
import Image from "next/image";
import { Col } from "react-bootstrap";
import commandStyles from "../styles/Command.module.scss";

interface IProps {
  label: string;
  description: string;
  showTriangle?: boolean;
  urlImage?: string;
  widthImg?: number;
  heightImg?: number;
}

const Command: React.FC<IProps> = ({
  label,
  description,
  showTriangle,
  urlImage,
  widthImg,
  heightImg,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={commandStyles.command__container}>
      <Col md="8" xs="10" lg="6">
        <p className={commandStyles.command__description}>{description}</p>

        <div className={commandStyles.command__background}>
          <div className={commandStyles.command__label}>
            <p> {label} </p>
            {showTriangle ? (
              <div
                onClick={handleOnClick}
                className={
                  isOpen ? commandStyles.arrow__down : commandStyles.arrow__up
                }
              ></div>
            ) : (
              ""
            )}
          </div>

          {isOpen ? (
            <Image
              src={urlImage}
              alt="command-img"
              width={widthImg}
              height={heightImg}
            />
          ) : (
            ""
          )}
        </div>
      </Col>
    </div>
  );
};

export default Command;
