import partyStyles from "../styles/Party.module.scss";
import Image from "next/image";

const Party = () => {
  return (
    <div className={`${partyStyles.container} ${partyStyles.border__20}`}>
      <p className={partyStyles.tittle}>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
      <div className={`${partyStyles.grid} `}>
        <div
          className={` ${partyStyles.soloq} d-flex justify-content-center align-items-center`}
        >
          soloq
        </div>
        <div
          className={` ${partyStyles.flex} d-flex justify-content-center align-items-center`}
        >
          flex
        </div>

        <div
          className={` ${partyStyles.dark}  d-flex  align-items-center p-3 `}
        >
          <p> Don Denis </p>
        </div>
        <div
          className={` ${partyStyles.dark} d-flex justify-content-center align-items-center`}
        >
          <Image
            src="/emblems/UNRANKED.png"
            alt="emblem"
            width={40}
            height={45}
          />
        </div>
        <div
          className={` ${partyStyles.dark} d-flex justify-content-center align-items-center`}
        >
          <Image
            src="/emblems/UNRANKED.png"
            alt="emblem"
            width={40}
            height={45}
          />
        </div>
        <div
          className={` ${partyStyles.light} ${partyStyles.border__l} d-flex  align-items-center p-3 `}
        >
          <p> Don Denis </p>
        </div>
        <div
          className={` ${partyStyles.light}   d-flex justify-content-center align-items-center`}
        >
          <Image
            src="/emblems/UNRANKED.png"
            alt="emblem"
            width={40}
            height={45}
          />
        </div>
        <div
          className={`  ${partyStyles.light} ${partyStyles.border__r}  d-flex justify-content-center align-items-center`}
        >
          <Image
            src="/emblems/UNRANKED.png"
            alt="emblem"
            width={40}
            height={45}
          />
        </div>
      </div>
    </div>
  );
};

export default Party;
