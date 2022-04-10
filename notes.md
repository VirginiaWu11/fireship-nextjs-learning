# fireship nextjs tutorial https://www.youtube.com/watch?v=Sklc_fQBmcs

1. run `npx create-next-app <app-name>`

2. every file/page in pages directory needs to have one default export. this will become a route.

3. pages/api directory is for setting up routes that will only apply to the server. the code written here will not increase the client side javascript bundle that needs to be sent to the network

4. server rendering, SSG & SSR

   A. - SSG - static generation - prerendering. render all pages at build time. generate all html files, upload them to a storage bucket or static host then delivered with very high performance over a cdn. - most suited for data that doesnt change often and sites that have a relatively low number of total pages. e.g. blog. data most likely do not change on a daily bases

   - drawback - data may become stale - if the data on the server changes, you need to rebuild and redeploy in order for the changes to be reflected
     - hard to scale to many pages - slow to prerender 1000 pages.

   B.

5. SSG public/ford,lambo,tesla json files added to simulate fetching data from a database/api

6. SSR - Server side rendering - generate each page at request time - the content is generated on a server when requested by the user. ideal when data changes constantly, ensures the user will get the latest and greated data from the data source.
   - Drawbacks - slower, and less efficiaent because you need to have a server in place to respond to those requests as opposed to caching everything on a global cdn. e.g. ebay auction listings changing all the time.
   - easy to implement in Next. The only difference is the name of the function. SSG is getStaticProps and SSR is getServerSideProps;
     does the same thing, but does it on every request instead of at build time. No longer need getStaticPaths
