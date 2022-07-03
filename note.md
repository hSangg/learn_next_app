File system routing

- Index Routes
- Nested Routes
- Dynamic Routes

Navigation in NextJS

- Link: client transition: load file .js -> transition

- Pre rendering | 😢 -> render sẵn html ở phía server -> loadingg js -> hydrate() -> attach event to html

* SSG - Static site Generation -> generated at build-time and is reused for each request
* SSR -> mỗi request lại gom tài nguyên (xử lí) tạo file html
* CSR -> tạo sẵn file đợi fetch data
* ISR: Incremental Static Regeneration -> vd: có 100 sp phổ biến trong 1000 sp, tạo ra 100sp đó trước (SSG) -> còn những sản phẫm chưa SSG thì tạo ra file đó

- NextJS: 02-05 Automatic Static Optimization
  Next.js automatically determines that a page is static if it has no blicking data requirements. This determination is made by the absence of getServerSideProps and getInitialProps in the page
