const getAccessToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("access_token");
  }
  return null;
};

// Function to create an authentication header
const createAuthHeader = () => {
  const token = getAccessToken();
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {};
  }
};

export { getAccessToken, createAuthHeader };
