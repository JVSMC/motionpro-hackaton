const postList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p> Días de racha: 🔥${post.content}</p>
        <p> EXP: ⚡${post.expTotal}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<img src="./app/img/Phisiotherapy-bro (1).svg" alt="Login to See Posts" width = "90%" style="margin: auto;"></img>';
  }
};

