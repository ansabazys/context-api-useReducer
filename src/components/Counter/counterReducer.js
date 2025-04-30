export const counterReducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      if (state.count < 1) {
        return {
          count: 0,
          error: "Value cannot be less than 0",
        };
      } else {
        return {
          count: state.count - 1,
          error: "",
        };
      }
    case "increment":
      return {
        count: state.count + 1,
      };

    case "reset":
      return {
        count: 0,
      };

    case "decrement_by":
      if (state.count < 1) {
        return {
          count: 0,
          error: "Value cannot be less than 0",
        };
      } else {
        return {
          count: state.count - action.payload.count,
        };
      }

    case "increment_by":
      return {
        count: state.count + action.payload.count,
        error: "",
      };

    default:
      break;
  }
};
