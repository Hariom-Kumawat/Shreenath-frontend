import Cookies from "js-cookie";
import { AuthCheck } from "./Helper";

export const callApi = async (url, options) => {
  // dispatch(setLoading(true));
  const token = Cookies.get("accessToken");
  let headers;
  // options?.data ? headers = { "Content-Type": "application/json" } : "";
  if (options?.data) {
    headers = { "Content-Type": "application/json" };
  } else {
    headers = "";
  }
  // console.log(token)
  try {
    const raw = await fetch(url, {
      headers: {
        ...(token &&
          token !== undefined && { Authorization: `Bearer ${token}` }),
        ...headers,
        // "Content-Type": "application/json",
      },
      method: options?.method || "GET",
      body: options?.data
        ? JSON.stringify(options?.data)
        : options?.form_data
        ? options?.form_data
        : undefined,
    });

    const data = await raw.json();
    // console.log("raw>>>>>>>>>>", raw);
    // console.log("dataaaaaaaa>>>>>>>>", data);

    if (!raw.ok) {
      if (raw.status == 401) {
        const newToken = await AuthCheck();

        const retryResponse = await fetch(url, {
          method: options?.method || "GET",
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type": options?.formData
              ? "multipart/form-data"
              : "application/json",
          },
          body: options?.formData
            ? options?.data
            : options?.data
            ? JSON.stringify(options?.data)
            : undefined,
        });
        const responseData = await retryResponse.json();
        return responseData;
      }
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    // console.log("ERROR>>>>>>>>>", error);
    return error;
  } finally {
    // dispatch(setLoading(false))
  }
};

export const POST_DATA_HEADEERS = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + Cookies.get("accessToken"),
};
