import { ErrorHandling } from "../protocols/index.js";

export function notFoundError(): ErrorHandling {
	return {
		type: "error_not_found",
		message: `Could not find any result!`
	};
} 

export function unauthorizedError(): ErrorHandling{
    return {
      type: "unauthorized_error",
      message: "You must have authorization to continue",
    };
  }

export function conflictError(): ErrorHandling{
  return {
    type: "conflict",
    message:"Already have a plate with this data"
  }
}