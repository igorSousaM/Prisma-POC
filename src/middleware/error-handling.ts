export function notFoundError() {
	return {
		type: "error_not_found",
		message: `Could not find any result!`
	};
} 

export function unauthorizedError(){
    return {
      name: "unauthorized_error",
      message: "You must have authorization to continue",
    };
  }