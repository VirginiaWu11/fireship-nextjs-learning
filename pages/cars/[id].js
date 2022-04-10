// dynamic component - file name is based on [param_name].js within the folder, this route will be /cars/[id]

import { useRouter } from "next/router"; // this hook allows us to access the query perameters from the url

export default function Car() {
  const router = useRouter();
  const { id } = router.query;

  return <h1> Hello id = {id}</h1>;
}
