import html from "html-literal";

export default links => html`
  <nav class="main_nav">
    <div class="nav_menu">
      <a href="" alt="Logo">L2E</a>
      <ul class="menu_items nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo class="nav_list">${link.text}</a></li>`
          )
          .join("")}
      </ul>
      <a href="" alt="Search"><i class="gg-search"></i></a>
    </div>
  </nav>
`;
