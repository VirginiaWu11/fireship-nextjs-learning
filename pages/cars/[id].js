// dynamic component - file name is based on [param_name].js within the folder, this route will be /cars/[id]

import { useRouter } from "next/router"; // this hook allows us to access the query perameters from the url

import Head from "next/head"; //next makes it easy for search engine optimization with importing Head component. Anything inside this component will be rendered to the head of the document

export default function Car({ car }) {
  //car props from below function
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          {car.color} {car.id}
          {/* can also add meta tags for twitter and facebook cards if we wanted to */}
        </title>
      </Head>
      <h1> Hello id = {id}</h1>
      <img src={car.image} />
    </>
  );
}

// ** SSG-

// export async function getStaticProps({ params }) {
//   //getStaticProps() tells next to prerender page, when the site is built, next will automatically call this function then send the result as props to the component itself

//   const req = await fetch(`http://localhost:3001/${params.id}.json`);
//   const data = await req.json();
//   return {
//     props: { car: data }, //this is passed into the main component
//   };
// }

// // Let Next know which dynamic pages to prerender:
// // this function can also request data from an api or database. It's job is to return a paths object that contains an array with every route for this dynamic url. This demo only has 3 routes
// export async function getStaticPaths() {
//   const req = await fetch("http://localhost:3001/cars.json");
//   const data = await req.json();

//   const paths = data.map((car) => {
//     return { params: { id: car } };
//   });
//   return { paths, fallback: false };
// }

// ** SSR- same but different function name:
export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3001/${params.id}.json`);
  const data = await req.json();
  return {
    props: { car: data },
  };
}
