import React, { useEffect, useState } from "react";
import posts from "../../data/student.json";
import Post from "./students";
import Pagination from "./pagination";
function Page() {
  // const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // useEffect(()=>{

  // })

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className=" h-[91%]">
        <div className="h-[80%]">
          {" "}
          <Post posts={currentPosts} />
        </div>
        <div className=" h-[10%]">
          {" "}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default Page;
