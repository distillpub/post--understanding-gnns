// https://observablehq.com/@ameyasd/updated-chebnet-equations@414
import define1 from "./gnn-styles.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Polynomial Filter Network Equations`
)});
  main.variable(observer("cheb_figure")).define("cheb_figure", ["html","tex","main_col","param_col"], function(html,tex,main_col,param_col){return(
html`
<figure id="cheb-conv">
 
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
        \quad {p^{(k)}} &= p_{${param_col} w^{(k)}}(L) \\
        \\
        \quad {g^{(k)}} &= p^{(k)} \times {${main_col} h^{(k - 1)}} \\
        \\
        \quad {${main_col} h^{(k)}} &= \sigma \left({g^{(k)}} \right)
      \end{aligned}
    `}
  </span>

  <figcaption style="position:absolute; left:300px; top:175px; width: 300px; ">
    Compute the matrix ${tex`p^{(k)}`} as the polynomial defined by the filter weights ${tex`${param_col} w^{(k)}`} evaluated at ${tex`L`}.
  </figcaption>

  <figcaption style="position:absolute; left:300px; top:240px; width: 300px; ">
    Multiply ${tex`p^{(k)}`} with ${tex`${main_col} h^{(k - 1)}`}: a standard matrix-vector multiply operation.
  </figcaption>

  <figcaption style="position:absolute; left:300px; top:315px; width: 300px; ">
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
  
  #cheb-conv {
    width: 800px;
    height: 310px;
    display: block;
    margin-top: 0;
    margin-bottom: 0;
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
  main.import("param_col_rgb", child1);
  main.import("param_col", child1);
  main.import("main_col_rgb", child1);
  main.import("main_col", child1);
  main.import("spectral_col", child1);
  main.import("natural_col", child1);
  return main;
}