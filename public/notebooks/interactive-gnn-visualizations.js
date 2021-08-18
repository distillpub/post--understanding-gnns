import define1 from "./graph-convolutional-networks.js";
import define2 from "./graph-attention-networks.js";
import define3 from "./graph-sample-and-aggregate-graphsage.js";
import define4 from "./graph-isomorphism-networks.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Interactive GNN Visualizations`
)});
  main.variable(observer("viz_list")).define("viz_list", ["html"], function(html){return(
html`<div id="gnn-models-viz">
<ul class="none"></ul>
</div>`
)});
  main.variable(observer("buttons")).define("buttons", ["html","gcn_buttons","gat_buttons","graphsage_buttons","gin_buttons"], function(html,gcn_buttons,gat_buttons,graphsage_buttons,gin_buttons){return(
html`
  <div class="gcn model">
    ${gcn_buttons}
  </div>

  <div class="gat model">
    ${gat_buttons}
  </div>

  <div class="graphsage model">
    ${graphsage_buttons}
  </div>

  <div class="gin model">
    ${gin_buttons}
  </div>
`
)});
  main.variable(observer("fig")).define("fig", ["html","gcn_div","gat_div","graphsage_div","gin_div"], function(html,gcn_div,gat_div,graphsage_div,gin_div){return(
html`
  <div class="gcn model">
    ${gcn_div}
  </div>

  <div class="gat model">
    ${gat_div}
  </div>

  <div class="graphsage model">
    ${graphsage_div}
  </div>

  <div class="gin model">
    ${gin_div}
  </div>
`
)});
  main.variable(observer("eqn")).define("eqn", ["html","gcn_eqn","gat_eqn","graphsage_eqn","gin_eqn"], function(html,gcn_eqn,gat_eqn,graphsage_eqn,gin_eqn){return(
html`
  <div class="gcn model eqn">
    ${gcn_eqn}
  </div>

  <div class="gat model eqn">
    ${gat_eqn}
  </div>

  <div class="graphsage model eqn">
    ${graphsage_eqn}
  </div>

  <div class="gin model eqn">
    ${gin_eqn}
  </div>
`
)});
  main.variable(observer("select_fig")).define("select_fig", ["d3","viz_list","mutable selected_tag"], function(d3,viz_list,$0){return(
function select_fig(tag){
  d3.select(viz_list).select('ul').selectAll('li').classed('selected', (d) => (d.tag == tag));
  $0.value = tag;
}
)});
  main.variable(observer("handle_click")).define("handle_click", ["select_fig"], function(select_fig){return(
function handle_click(event, d){
  select_fig(d.tag);
}
)});
  main.define("initial selected_tag", function(){return(
"gcn"
)});
  main.variable(observer("mutable selected_tag")).define("mutable selected_tag", ["Mutable", "initial selected_tag"], (M, _) => new M(_));
  main.variable(observer("selected_tag")).define("selected_tag", ["mutable selected_tag"], _ => _.generator);
  main.variable(observer("interactive_list")).define("interactive_list", ["d3","viz_list","gnn_models","selected_tag","handle_click","buttons","fig","eqn"], function(d3,viz_list,gnn_models,selected_tag,handle_click,buttons,fig,eqn)
{
  d3.select(viz_list)
       .select('ul')
       .selectAll('li')
       .data(gnn_models)
       .join(
         enter => enter.append('li')
                       .text(d => d.descr)
                       .classed('selected', (d) => (d.tag == selected_tag))
                       .on('click', handle_click),
         update => update.selectAll('li')
                       .classed('selected', (d) => (d.tag == selected_tag))
                       .on('click', handle_click),
         exit => exit.remove(),
     );
  
  [buttons, fig, eqn].forEach((cell) => {
    d3.select(cell).selectAll('div:not(.' + selected_tag + ')').style('display', 'none');
    d3.select(cell).selectAll('div:not(.' + selected_tag + ')').selectAll('div').style('display', 'none');

    d3.select(cell).selectAll('div.' + selected_tag).style('display', '');
    d3.select(cell).selectAll('div.' + selected_tag).selectAll('div').style('display', '');
  })
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`# Appendix`
)});
  const child1 = runtime.module(define1);
  main.import("buttons_display", "gcn_buttons", child1);
  main.import("W_curr", "gcn_W_slider", child1);
  main.import("main_div", "gcn_div", child1);
  main.import("network_static", "gcn_network_static", child1);
  main.import("network_dynamic", "gcn_network_dynamic", child1);
  main.import("eqn_display", "gcn_eqn", child1);
  const child2 = runtime.module(define2);
  main.import("buttons_display", "gat_buttons", child2);
  main.import("main_div", "gat_div", child2);
  main.import("network_static", "gat_network_static", child2);
  main.import("network_dynamic", "gat_network_dynamic", child2);
  main.import("eqn_display", "gat_eqn", child2);
  const child3 = runtime.module(define3);
  main.import("buttons_display", "graphsage_buttons", child3);
  main.import("main_div", "graphsage_div", child3);
  main.import("network_static", "graphsage_network_static", child3);
  main.import("network_dynamic", "graphsage_network_dynamic", child3);
  main.import("eqn_display", "graphsage_eqn", child3);
  const child4 = runtime.module(define4);
  main.import("buttons_display", "gin_buttons", child4);
  main.import("main_div", "gin_div", child4);
  main.import("network_static", "gin_network_static", child4);
  main.import("network_dynamic", "gin_network_dynamic", child4);
  main.import("eqn_display", "gin_eqn", child4);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  main.variable(observer("network_display_hack")).define("network_display_hack", ["viz_list","gcn_network_static","gcn_network_dynamic","gat_network_static","gat_network_dynamic","graphsage_network_static","graphsage_network_dynamic","gin_network_static","gin_network_dynamic"], function(viz_list,gcn_network_static,gcn_network_dynamic,gat_network_static,gat_network_dynamic,graphsage_network_static,graphsage_network_dynamic,gin_network_static,gin_network_dynamic){return(
[
  viz_list,
  gcn_network_static,
  gcn_network_dynamic,
  gat_network_static,
  gat_network_dynamic,
  graphsage_network_static,
  graphsage_network_dynamic,
  gin_network_static,
  gin_network_dynamic,
]
)});
  main.variable(observer("gnn_models")).define("gnn_models", function(){return(
[
  {'descr': 'GCN', 'tag': 'gcn'},
  {'descr': 'GAT', 'tag': 'gat'},
  {'descr': 'GraphSAGE', 'tag': 'graphsage'},
  {'descr': 'GIN', 'tag': 'gin'},
]
)});
  main.variable(observer("style")).define("style", ["html"], function(html){return(
html`
  <style>
    div.eqn {
      margin-left: 2%;      
    }

    #gnn-models-viz ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 4px;
      text-align: center;
      padding: 0;
      justify-content: center;
      align-content: center;
      list-style: none;
      max-width: 100%;
    }

    #gnn-models-viz ul li {
      margin: 0;
      background: #f3f3f3;
      border-bottom: 3px solid #e3e3e3;
      cursor: pointer;
      line-height: 2em;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    #gnn-models-viz ul li:hover {
      border-bottom-color: #D9D9D9;
    }

    #gnn-models-viz ul li.selected {
      background: #D9D9D9;
      border-bottom-color: #D9D9D9;
    }

    #gnn-models-viz {

    }
    
    /* Nicer sliders. */
    input[type="range"] {
      -webkit-appearance: none;
      grid-column: middle;
      height: 5px;
      border-radius: 1px;   
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%; 
      background: #575245;
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #f5f2eb;
      cursor: pointer;
    }

   output[name="output"] {
      width: 1em;
      display: inline-block;
   }
  </style>
`
)});
  return main;
}