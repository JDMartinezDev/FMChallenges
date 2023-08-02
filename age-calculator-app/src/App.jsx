import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState({
    years: "",
    months: "",
    days: "",
  });
  const [emptyValues, setEmptyValues] = useState([]);
  const [invalidValues, setInvalidValues] = useState([]);
  const [isInvalidDate, setIsInvalidDate] = useState(false);
  const [age, setAge] = useState({
    days: "",
    months: "",
    years: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    let onlyNumericValue = value.replace(/[^0-9]/g, "");

    setInputData({
      ...inputData,
      [name]: onlyNumericValue,
    });
  };

  const validateDate = (years, months, days) => {
    console.log(years, months, days);
    if (!years || !months || !days) {
      setIsInvalidDate(false);
      return false;
    }
    let date = new Date(years, parseInt(months) - 1, days);
    console.log("si calcule", date);
    let maxDate = new Date(years, months, 0);
    return date <= maxDate;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmptyValues([]);
    setInvalidValues([]);

    let eValues = [];
    let iValues = [];

    for (let [k, v] of Object.entries(inputData)) {
      if (v === "" || !v) {
        eValues.push(k);
      }
    }

    for (let [k, v] of Object.entries(inputData)) {
      if (k === "days") {
        (v != "" && 1 > v) || v > 31 ? iValues.push("days") : null;
      } else if (k === "months") {
        (v != "" && 1 > v) || v > 12 ? iValues.push("months") : null;
      } else {
        let actualYear = new Date().getFullYear();
        actualYear < v ? iValues.push("years") : null;
      }
    }

    setEmptyValues([...eValues]);
    setInvalidValues([...iValues]);

    const isInputDataValid =
      !eValues.includes("days") &&
      !eValues.includes("months") &&
      !eValues.includes("years") &&
      !iValues.includes("days") &&
      !iValues.includes("months") &&
      !iValues.includes("years");

    const isValid = validateDate(
      inputData.years,
      inputData.months,
      inputData.days
    );
    isInputDataValid && !isValid
      ? setIsInvalidDate(true)
      : setIsInvalidDate(false);

    if (isValid && isInputDataValid) {
      let actualDate = dayjs();
      let birthDate = dayjs(
        `${inputData.years}-
       ${parseInt(inputData.months)}-
        ${inputData.days}`
      );

      let daysDiff = Math.floor(
        (actualDate - birthDate) / (1000 * 60 * 60 * 24)
      );

      let yearsSince = Math.floor(daysDiff / 365);
      let monthsSince = Math.floor((daysDiff % 365) / 30);
      let daysSince = daysDiff - (yearsSince * 365 + monthsSince * 30);
      setAge({
        ...age,
        ...{
          years: `${yearsSince}` || "0",
          months: `${monthsSince}` || "0",
          days: `${daysSince}` || "0",
        },
      });
    }
    console.log(age, isInputDataValid, isValid, isInvalidDate);
  };

  return (
    <>
      <main className="card">
        <form className="dateInput" onSubmit={handleSubmit}>
          <div className="inputField">
            <label
              htmlFor="day"
              style={{
                color: `${
                  emptyValues.includes("days") ||
                  invalidValues.includes("days") ||
                  isInvalidDate
                    ? "hsl(0, 100%, 50%, 50%)"
                    : ""
                }`,
              }}>
              day
            </label>
            <input
              className={
                emptyValues.includes("days") ||
                invalidValues.includes("days") ||
                isInvalidDate
                  ? "inputFieldInvalid"
                  : "inputFieldValid"
              }
              type="text"
              name="days"
              placeholder="DD"
              value={inputData.days}
              pattern="\d*"
              title="Day out of range"
              onChange={handleChange}
              maxLength={2}></input>
            {invalidValues.includes("days") && <span>Must be a valid day</span>}
            {emptyValues.includes("days") && (
              <span>This field is required</span>
            )}
            {isInvalidDate && <span>Must be a valid date</span>}
          </div>
          <div className="inputField">
            <label
              htmlFor="month"
              style={{
                color: `${
                  emptyValues.includes("months") ||
                  invalidValues.includes("months") ||
                  isInvalidDate
                    ? "hsl(0, 100%, 50%, 50%)"
                    : ""
                }`,
              }}>
              month
            </label>
            <input
              className={
                emptyValues.includes("months") ||
                invalidValues.includes("months") ||
                isInvalidDate
                  ? "inputFieldInvalid"
                  : "inputFieldValid"
              }
              type="text"
              name="months"
              placeholder="MM"
              value={inputData.months}
              pattern="\d*"
              title=""
              onChange={handleChange}
              maxLength={2}></input>
            {invalidValues.includes("months") && (
              <span>Must be a valid month</span>
            )}
            {emptyValues.includes("months") && (
              <span>This field is required</span>
            )}
          </div>
          <div className="inputField">
            <label
              htmlFor="year"
              style={{
                color: `${
                  emptyValues.includes("years") ||
                  invalidValues.includes("years") ||
                  isInvalidDate
                    ? "hsl(0, 100%, 50%, 50%)"
                    : ""
                }`,
              }}>
              year
            </label>
            <input
              className={
                emptyValues.includes("years") ||
                invalidValues.includes("years") ||
                isInvalidDate
                  ? "inputFieldInvalid"
                  : "inputFieldValid"
              }
              name="years"
              placeholder="YYYY"
              value={inputData.years}
              pattern="\d*"
              onChange={handleChange}
              maxLength={4}></input>
            {invalidValues.includes("years") && (
              <span>Must be in the past</span>
            )}
            {emptyValues.includes("years") && (
              <span>This field is required</span>
            )}
          </div>
          <button className="computeBtn" type="submit">
            <img src="icon-arrow.svg" />
          </button>
        </form>
        <section className="result">
          <div className="resultRow">
            <p>
              <span>{!age.years || isInvalidDate ? "- -" : age.years}</span>{" "}
              years
            </p>
          </div>
          <div className="resultRow">
            <p>
              <span>{!age.months || isInvalidDate ? "- -" : age.months}</span>{" "}
              months
            </p>
          </div>
          <div className="resultRow">
            <p>
              <span>{!age.days || isInvalidDate ? "- -" : age.days}</span> days
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
