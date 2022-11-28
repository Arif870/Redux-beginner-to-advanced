import React, { useReducer } from "react";
import { initialState, reducer } from "./state/formReducer";

const Parent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div
      style={{
        width: "60%",
        margin: "30px auto",
        border: "1px solid green",
        padding: "20px",
      }}
    >
      <form onSubmit={submit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input
            onBlur={e =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="firstName"
            type="text"
            className="form-control"
            id="validationDefault01"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            onBlur={e =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="lastName"
            type="text"
            className="form-control"
            id="validationDefault02"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefaultUsername" className="form-label">
            Gmail
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              onBlur={e =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              name="gmail"
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault04" className="form-label">
            State
          </label>
          <select
            onChange={e =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="state"
            className="form-select"
            id="validationDefault04"
          >
            <option value="">-Select-</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Comilla">Comilla</option>
            <option value="Dinajpur">Dinajpur</option>
          </select>
        </div>
        <div className="col-md-6">
          <h1 name="count">{state.count}</h1>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="btn btn-danger"
          >
            Decrement
          </button>
        </div>

        <div className="col-md-6">
          <p>Gender</p>
          <div className="form-check ">
            <input
              onClick={e =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              onClick={e =>
                dispatch({
                  type: "INPUT",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              onClick={() => dispatch({ type: "TOGGLE" })}
              className="form-check-input"
              type="checkbox"
              name="agree"
              id="invalidCheck2"
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            disabled={!state.agree}
            className="btn btn-primary"
            type="submit"
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Parent;
