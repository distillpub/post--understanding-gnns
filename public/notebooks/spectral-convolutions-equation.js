import define1 from "./gnn-styles.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Spectral Convolutions Equation`
)});
  main.variable(observer("spec_figure_init")).define("spec_figure_init", ["html","tex"], function(html,tex){return(
html`
<figure id="spectral-conv-init">
   <div style="position:relative; left:0px; top:-10px">
    <span style="position: absolute; left:0px; top:0px">
    ${tex.block`
      \quad h^{(k)} = \begin{bmatrix} h_1^{(k)} \\ \vdots \\ h_n^{(k)} \end{bmatrix}
    `}
    </span>

    <figcaption style="position: absolute; left:200px; top:60px; width:500px;">
      for each ${tex`k = 0, 1, 2, \ldots `} upto ${tex` K`}.
    </figcaption>
  </div>
</figure>
`
)});
  main.variable(observer("spec_figure")).define("spec_figure", ["html","tex","main_col","param_col"], function(html,tex,main_col,param_col){return(
html`
<figure id="spectral-conv">
 
  <div style="position:relative; left:0px; top:0px">
  <figcaption style="position:absolute; left:0px; top:0px; width:200px;">
    Start with the original features.
  </figcaption>

  <span style="position:absolute; left:0px; top:20px">
    ${tex.block`\quad {${main_col} h^{(0)}} = x`}
  </span>
  </div>
  
  <div style="position:relative; left:0px; top:-45px">
  <figcaption style="position:absolute; left:0px; top:130px">
    Then iterate, for ${tex`k = 1, 2, \ldots `} upto ${tex` K`}:
  </figcaption>
  
  <span style="position:absolute; left:0px; top:160px">
    ${tex.block`
      \begin{aligned}
        {\hat{h}^{(k - 1)}} &= U_m^T {${main_col} h^{(k - 1)}} \\
        \\
        {\hat{g}^{(k)}} &=
            {${param_col} \hat{w}^{(k)}} \odot {${main_col} \hat{h}^{(k - 1)}} \\
        \\
        {g^{(k)}} &= U_m {\hat{g}^{(k)}} \\
        \\
        {${main_col} h^{(k)}} &= \sigma \left({g^{(k)}} \right)
      \end{aligned}
    `}
  </span>

  <figcaption style="position:absolute; left:300px; top:182px; width: 500px; ">
    Convert previous feature ${tex`${main_col} h^{(k - 1)}`} to its spectral representation ${tex`\hat{h}^{(k - 1)}`}.
  </figcaption>

  <figcaption style="position:absolute; left:300px; top:238px; width: 500px; ">
    Convolve with filter weights ${tex`{${param_col} \hat{w}^{(k)}}`} in the spectral domain to get ${tex`{\hat{g}^{(k)}}.`}
  </figcaption>

  <figcaption style="position:absolute; left:300px; top:258px; width: 500px; ">
    ${tex`\odot`} represents element-wise multiplication.
  </figcaption>
  
  <figcaption style="position:absolute; left:300px; top:310px; width: 505px; ">
    Convert ${tex`\hat{g}^{(k)}`} back to its natural representation ${tex`{g}^{(k)}`}.
  </figcaption>

  <figcaption style="position:absolute; left:300px; top:380px; width: 500px; ">
    Apply a non-linearity ${tex`\sigma`} to ${tex`{g}^{(k)}`} to get ${tex`${main_col} {h}^{(k)}`}.
  </figcaption>
  
  <figcaption style="position:absolute; left:380px; top:45px; width:350px;">
    Color Codes:
    <ul class="legend">
        <li><span class="box main"></span> Computed node embeddings. </li>
        <li><span class="box param"></span> Learnable parameters. </li>
    </ul>
  </figcaption>
 
  </div>
</figure>
`
)});
  main.variable(observer("style")).define("style", ["html","main_col_rgb","param_col_rgb"], function(html,main_col_rgb,param_col_rgb){return(
html`
 <style>
  #spectral-conv div {
    margin: 0 auto 10px auto;
    display: block;
  }
  
  #spectral-conv {
    width: 800px;
    height: 380px;
    display: block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  
  #spectral-conv-init {
    width: 800px;
    height: 100px;
    display: block;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  
  span.green {
    color: #177245;
  }

  span.blue {
    color: #0047AB;
  }

  /* Legend */
  .legend {
    list-style: none;
    margin-top: 5px;
  }
  .legend li {
    margin-bottom: 5px;
  }
  .legend span.box {
    border: 1px solid #ccc;
    float: left;
    width: 12px;
    height: 12px;
    margin: 2px;
    margin-right: 5px;
  }

  .legend .main { background-color: ${main_col_rgb}; }
  .legend .param { background-color: ${param_col_rgb}; }

 </style>
`
)});
  const child1 = runtime.module(define1);
  main.import("main_col", child1);
  main.import("main_col_rgb", child1);
  main.import("param_col", child1);
  main.import("param_col_rgb", child1);
  main.import("spectral_col", child1);
  main.import("natural_col", child1);
  return main;
}