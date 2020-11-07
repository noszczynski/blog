import React from "react"

const Counter = ({ progressArray, activeItem, list }) => {
  return (
    <div className={"counter"}>
      <div className={"counter__item"}>
        <div
          style={{
            transform: `translateY(${(activeItem - 1) * -20}px)`,
          }}
          className={"counter__elements"}
        >
          {progressArray &&
            progressArray.map(({ label, value }) => (
              <span className={"counter__elements__item"} key={value}>
                {label}
              </span>
            ))}
        </div>
      </div>
      <hr className={"divider"} />
      <div className={"counter__item"}>{list.length}</div>
    </div>
  )
}

export default Counter
