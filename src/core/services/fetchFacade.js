import toast from "react-hot-toast";

async function request(url, method, data = null) {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`,
      options
    );
    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

    throw new Error(responseData.error || "An unexpected error ocurred");
  } catch (error) {
    toast.error(error.message || "An unexpected error ocurred");
    throw new Error(error.message || "An unexpected error ocurred");
  }
}

export async function get(url) {
  return request(url, "GET");
}

export async function post(url, data) {
  return request(url, "POST", data);
}

export async function put(url, data) {
  return request(url, "PUT", data);
}

export async function remove(url) {
  return request(url, "DELETE");
}

export default request;
