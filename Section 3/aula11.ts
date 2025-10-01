import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// async function getUserAxios(id: number): Promise<User> {
//   const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
//   return response.data;
// }

type ApiState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

async function getUserFetch(id: number): Promise<ApiState<User>> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return { status: "success", data: await response.json() };
  } catch (error) {
    return { status: "error", error: (error as Error).message };
  }
}

(async () => {
  console.log({ status: "loading" });
  const user = await getUserFetch(2);

  if (user.status === "success") console.log(user.data);
  if (user.status === "error") console.log(user.error);
})();
