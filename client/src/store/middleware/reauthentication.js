// Imports
import { authApi } from "../api/authApi";
import { baseQuery } from "../api/config";

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  // Try request
  let result = await baseQuery(args, api, extraOptions);

  // Check for expired refresh & access tokens
  if (result.error && result.error.status === 401) {
    // Handle refreshing access token
    const response = await baseQuery('/auth/refresh', authApi);

    if (response.data) {
      // Retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Handle expired refresh token
      return await baseQuery('/auth/logout', authApi);
    }
  }

  return result;
}