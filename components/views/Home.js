import html from "html-literal";

export default state => html`
  <main class="main_content" id="Home">
    <!-- <div class="economic_data">
      <table class="data_table">
        <thead>
          <tr class="table_heading">
            <th class="table_head" colspan="5">Economic Calendar</th>
          </tr>
        </thead>
        <tbody class="data_body">
          <tr class="filters">
            <td>Country</td>
            <td>Economic Indicator 1</td>
            <td>Economic Indicator 2</td>
            <td>Economic Indicator 3</td>
            <td>Economic Indicator 4</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
          <tr class="data_set">
            <td>Sample Info 1</td>
            <td>Sample Info 2</td>
            <td>Sample Info 3</td>
            <td>Sample Info 4</td>
            <td>Sample Info 5</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div class="all_symbols">
      <div class="sym_one">
        <a class="symbol">${state.stockName}; "Current Price"</a>
      </div>
      <div class="sym_two">
        <a class="symbol">Sample: AAPL; "Current Price"</a>
      </div>
    </div>
  </main>
`;
