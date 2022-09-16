import React from "react";
import Head from "next/head";
import script from "next/script";
import Link from "next/link";
import axios from "axios";
import cookie from "js-cookie";
const index = () => {
  const funcHandler = () => {
    let data = {
      email: "asespandey2@gmail.com",
      password: "ashishpandey",
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZXMyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYXNoaXNocGFuZGV5MTIiLCJpYXQiOjE2NjMyOTE0MTV9.u_4pqM6euNqFd9bigc7xuPFB-vWZ16Jm2zGYjEZiyls`,
    };

    axios
      .post("http://localhost:4000/blog/login", data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          cookie.set("token", res.data.token);
          sessionStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="w-full"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div class="flex flex-row items-center justify-center lg:justify-start">
                  <p class="text-lg mb-0 mr-4">Sign in with</p>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="w-4 h-4"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-gray-800">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="button"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => {
                      funcHandler();
                    }}
                  >
                    Login
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link href="/register">
                      <a
                        href="#!"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        Register
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

// import { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import FileBase from "react-file-base64";

// export default function Home({ posts }) {
//   const [title, setTitle] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [body, setBody] = useState("");
//   const [slug, setSlug] = useState("");
//   const [image, setImage] = useState();

//   const submitForm = () => {
//     let data = {
//       title: title,
//       excerpt: excerpt,
//       body: body,
//       slug: slug,
//       image: image,
//     };
//     console.log("🚀 ~ file: index.js ~ line 21 ~ submitForm ~ data", data);
//     axios
//       .post("http://localhost:4000/blog", data)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const deleteBlog = (id) => {
//     axios
//       .delete(`http://localhost:4000/blog/${id}`)
//       .then((res) => {})
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <div className="page">
//         <main className="page__main">
//           <form
//             className="register-form page__register-form"
//             encType="multipart/form-data"
//           >
//             <hr className="register-form__hr" />
//             <div className="register-form__body">
//               <div className="register-form__linput-box">
//                 <label className="register-form__label">title</label>
//                 <textarea
//                   className="register-form__input"
//                   rows={3}
//                   placeholder="Enter title"
//                   onChange={(e) => {
//                     setTitle(e.target.value);
//                   }}
//                 />
//               </div>
//               <div className="register-form__linput-box">
//                 <label className="register-form__label">slug</label>
//                 <textarea
//                   className="register-form__input"
//                   rows={3}
//                   placeholder="Enter slug"
//                   onChange={(e) => {
//                     setSlug(e.target.value);
//                   }}
//                 />
//               </div>
//               <div className="register-form__linput-box">
//                 <label className="register-form__label">excerpt</label>
//                 <textarea
//                   className="register-form__input"
//                   type="number"
//                   id="psw"
//                   name="psw"
//                   rows={6}
//                   placeholder="Enter excerpt"
//                   onChange={(e) => {
//                     setExcerpt(e.target.value);
//                   }}
//                 />
//               </div>{" "}
//               <div className="register-form__linput-box">
//                 <label className="register-form__label">body</label>
//                 <textarea
//                   className="register-form__input"
//                   type="number"
//                   id="psw"
//                   name="psw"
//                   rows={10}
//                   placeholder="Enter body"
//                   onChange={(e) => {
//                     setBody(e.target.value);
//                   }}
//                 />
//               </div>
//               <FileBase
//                 type="file"
//                 multiple={false}
//                 onDone={({ base64 }) => setImage(base64)}
//               />
//             </div>
//           </form>
//           <button
//             className="primary-button primary-button_green"
//             onClick={() => {
//               submitForm();
//             }}
//           >
//             Publish
//           </button>
//         </main>
//       </div>

//       <div style={{ background: "white", color: "black" }}>
//         {posts.data.map((item, i) => {
//           const { title, slug, excerpt, _id, image } = item;
//           return (
//             <div key={i}>
//               <Link href={slug}>
//                 <div
//                   style={{
//                     width: "100vw",
//                     padding: "16px",
//                     margin: "10px",
//                     border: "2px solid gray",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <p>{title}</p>
//                   <p>{excerpt}</p>
//                   <img src={image} alt="" />
//                 </div>
//               </Link>
//               <button
//                 onClick={() => {
//                   deleteBlog(_id);
//                   window.location.reload(true);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:4000/blog?populate=*");
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

// //  <input
// //    type="file"
// //    onChange={(e) => {
// //      console.log(e.target.files);
// //      setImage(e.target.files[0]);
// //    }}
// //  />;
