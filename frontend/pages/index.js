import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home({ posts }) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [slug, setSlug] = useState("");

  const submitForm = () => {
    let data = {
      title: title,
      slug: slug,
      excerpt: excerpt,
      body: body,
    };
    axios
      .post("http://localhost:4000/blog?populate=*", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBlog = ({ _id }) => {
    axios
      .delete(`http://localhost:4000/blog/${_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="page">
        <main className="page__main">
          <form className="register-form page__register-form">
            <hr className="register-form__hr" />
            <div className="register-form__body">
              <div className="register-form__linput-box">
                <label className="register-form__label">title</label>
                <textarea
                  className="register-form__input"
                  rows={3}
                  placeholder="Enter title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="register-form__linput-box">
                <label className="register-form__label">slug</label>
                <textarea
                  className="register-form__input"
                  rows={3}
                  placeholder="Enter slug"
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />
              </div>
              <div className="register-form__linput-box">
                <label className="register-form__label">excerpt</label>
                <textarea
                  className="register-form__input"
                  type="number"
                  id="psw"
                  name="psw"
                  rows={6}
                  placeholder="Enter excerpt"
                  onChange={(e) => {
                    setExcerpt(e.target.value);
                  }}
                />
              </div>{" "}
              <div className="register-form__linput-box">
                <label className="register-form__label">body</label>
                <textarea
                  className="register-form__input"
                  type="number"
                  id="psw"
                  name="psw"
                  rows={10}
                  placeholder="Enter body"
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                />
              </div>
              <button
                className="primary-button primary-button_green"
                type="submit"
                onClick={() => {
                  submitForm();
                }}
              >
                Publish
              </button>
            </div>
          </form>
        </main>
      </div>

      <div style={{ background: "white", color: "black" }}>
        {posts.data.map((item, i) => {
          const { title, slug, excerpt, _id } = item;
          return (
            <>
              <Link href={slug} key={i}>
                <div
                  style={{
                    width: "100vw",
                    padding: "16px",
                    margin: "10px",
                    border: "2px solid gray",
                    cursor: "pointer",
                  }}
                >
                  <p>{title}</p>
                  <p>{excerpt}</p>
                </div>
              </Link>
              <button
                onClick={() => {
                  deleteBlog(_id);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/blog");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
