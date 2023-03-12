import html from "html-literal";
import myImg from "../../assets/images/newimg.jpg";

export default () => html`
  <main class="about" id="About">
    <div class="container">
      <div class="myPhoto">
        <img src="${myImg}" class="portrait" alt="" />
      </div>
      <div class="bio">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam
          tempore odit amet, quod aperiam suscipit molestiae neque doloremque
          sit facilis ratione vel dicta deleniti architecto velit iure excepturi
          dolorem.
        </p>
      </div>
    </div>
  </main>
`;
