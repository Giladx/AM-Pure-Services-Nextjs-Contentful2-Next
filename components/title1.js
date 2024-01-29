import React from 'react'

const Title1 = (props) => {
  return (
    <>
      <div className="title1-title">
        <span className="title1-text">
          <span>SERVICES</span>
          <br></br>
        </span>
      </div>
      <style jsx>
        {`
          .title1-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .title1-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            line-height: 1.3em;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .title1-text {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .title1-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Title1
