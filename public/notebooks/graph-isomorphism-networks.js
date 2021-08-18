import define1 from "./gnn-styles.js";
import define2 from "../observablehq-base/inputs.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`
# Graph Isomorphism Networks
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md`
An interactive graph isomorphism network!  
Given a graph ${tex`G`} with initial node features ${tex`h_v^{(0)}`} at each node ${tex`v`}, the network computes new node features!
`
)});
  main.variable(observer("instructions")).define("instructions", ["md","tex"], function(md,tex){return(
md`
 * Choose weights ${tex`\epsilon^{(k)}`} with the sliders below.
 * See the update equation for a node by clicking on it.
 * Then, update all nodes' feature values by pressing *Update All Nodes*. Each node will be updated according to its own update equation!
 * Reset to the original feature values by pressing *Reset*.
 * Randomize the graph structure with *Randomize Graph*.

Watch how the update equation changes as you select different nodes and weights!
`
)});
  main.variable(observer("buttons_display")).define("buttons_display", ["html","mutable step","step","randomize_graph"], function(html,$0,step,randomize_graph)
{
  const reset_inp = html`<button>Reset</button>`;
  reset_inp.onclick = () => {
    $0.value = 0;
  }

  const undo_inp = html`<button ${step == 0 ? "disabled" : "" }>Undo Last Update</button>`;
  undo_inp.onclick = () => {
    if(step > 0){
      $0.value -= 1;
    }
  }

  const update_inp = html`<button>Update All Nodes</button>`;
  update_inp.onclick = () => {
    $0.value += 1;
  }
  
  const randomize_inp = html`<button id="randomize">Randomize Graph</button>`;
  randomize_inp.onclick = () => {
    $0.value = 0;
    randomize_graph();
  }

  const combined_div = html`
    <style>
      #button-container {
        text-align: center;
      }
    </style>

    <div id="button-container">
      ${reset_inp}
      ${undo_inp}
      ${update_inp}
      ${randomize_inp}
    </div>
  `;
  return combined_div;
}
);
  main.variable(observer("main_div")).define("main_div", ["html","style","step","eps_slider"], function(html,style,step,eps_slider)
{
  return html`
  ${style}
  <div id="main-div">
    <div id="labels-div">
      <div id="iteration">
        ${step == 0 ? "Initial Graph" : "Graph after Iteration " + step.toString()}
      </div>
      <div id="params" class="no-override">
        Parameters for Next Update
      </div>
      ${eps_slider}
    </div>
    <svg id="graph-svg"></svg>
  </div>
`;
}
);
  main.variable(observer("simulation")).define("simulation", ["svg","d3","width"], function(svg,d3,width)
{
  var height = svg.property("viewBox").baseVal.height;
  return d3.forceSimulation()
                 .force("link", d3.forceLink().id(d => d.id).strength(0.01))
                 .force("charge", d3.forceManyBody().strength(-100))
                 .force("center", d3.forceCenter(width / 2, height / 2));
}
);
  main.variable(observer("eqn_display")).define("eqn_display", ["md","step","tex","main_node","formatted_main_node_new","formatted_neighbours_step_1","param_col","formatted_main_node","formatted_neighbours_step_2","eps_curr","formatted_main_node_current_features","formatted_neighbours_step_3","format_feature","main_node_current_features","formatted_eqn_step_4","formatted_main_node_updated_features_before_f","formatted_main_node_updated_features"], function(md,step,tex,main_node,formatted_main_node_new,formatted_neighbours_step_1,param_col,formatted_main_node,formatted_neighbours_step_2,eps_curr,formatted_main_node_current_features,formatted_neighbours_step_3,format_feature,main_node_current_features,formatted_eqn_step_4,formatted_main_node_updated_features_before_f,formatted_main_node_updated_features){return(
md`
  **Next Update (Iteration ${step + 1}):**  
    Equation for Node ${tex`${main_node.name}`}:
  ${
    tex.block`
    \begin{aligned}
    ${formatted_main_node_new}
              &= {f} \left(
                  ${formatted_neighbours_step_1}
                  \left(1 + {${param_col} {\epsilon}^{(${step + 1})}}\right) \times ${formatted_main_node} \right) \\ 
              &= f \left(
                  ${formatted_neighbours_step_2}
                  \left(1 + {${param_col} ${eps_curr}}\right)
                  \times ${formatted_main_node_current_features} \right) \\
              &= f \left(
                  ${formatted_neighbours_step_3}
                  ${format_feature((1 + eps_curr) * main_node_current_features)} \right) \\
              ${formatted_eqn_step_4}
              &= \text{ReLU} \left(${formatted_main_node_updated_features_before_f}\right)
              = ${formatted_main_node_updated_features}.
    \end{aligned}`
  }

  Here, ${tex`f`} is just ${tex`\text{ReLU}`}: ${tex`f(x) = \max(x, 0)`}.  

  Note that the weight ${tex`${param_col} {\epsilon}^{(${step + 1})}`} is shared across all nodes!
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
# Appendix
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Visualization
`
)});
  main.variable(observer("svg")).define("svg", ["d3","main_div","width"], function(d3,main_div,width)
{
  var height = 500;
  var svg = d3.select(main_div).select("svg")
              .attr("viewBox", [width/3, 0, width/3, height])
              .attr("width", width)
              .attr("height", height);
  let line_g = svg.append("g")
                  .attr("class", "edges")
                  .attr("stroke", "gray");
  let node_g = svg.append("g")
                  .attr("class", "nodes");
  return svg;
}
);
  main.variable(observer("network_static")).define("network_static", ["svg","graph","drag","simulation"], function(svg,graph,drag,simulation)
{
  var height = svg.property("viewBox").baseVal.height;

  /* Edges. */
  var line_g = svg.select("g.edges")
  var link = line_g.selectAll("line")
                    .attr("class", "edge")
                    .attr("stroke", "gray")
                    .data(graph.links, (d) => (d.source.id))
                    .join(
                      enter  => enter.append("line"),
                      update => update,
                      exit   => exit.remove(),
                    )
                    .call(drag(simulation));

  /* Nodes. */
  var node_g = svg.select("g.nodes");
  var node = node_g.selectAll("g.node")
                    .data(graph.nodes)
                    .join(
                      enter  =>  {
                        enter = enter.append("g")
                                     .attr("class", "node");
                        enter.append("circle")
                                     .attr("class", "visible");
                        enter.append("circle")
                                     .attr("class", "invisible");
                        enter.append("text");
                        enter.append("g")
                             .attr("class", "node_vector");

                        return enter;
                      },
                      update =>  update,
                      exit   =>  exit.remove(),
                    )
                    .call(drag(simulation));


  var node_circles = node.select("circle.visible")
                                .call(drag(simulation))
                                .attr("r", 5);

  var node_invisible_circles = node.select("circle.invisible")
                                   .attr("r", 25)
                                   .attr("fill", "transparent");

  var node_labels = node.select("text")
                                .text((d) => (d.name))
                                .attr("font-style", "italic")
                                .attr("x", 10)
                                .attr("y", 3)
                                .call(drag(simulation));

  return svg.node();
}
);
  main.variable(observer("network_dynamic")).define("network_dynamic", ["svg","main_node_id","simulation","graph","mutable main_node_id","current_features","main_col_rgb","main_node_neighbour_ids","neigh_col_rgb"], function(svg,main_node_id,simulation,graph,$0,current_features,main_col_rgb,main_node_neighbour_ids,neigh_col_rgb)
{
  var node_g = svg.select("g.nodes");
  var line_g = svg.select("g.edges")

  var node = node_g.selectAll("g.node");
  var link = line_g.selectAll("line");
  
  /* Node circles. */
  var node_circles = node.select("circle.visible")
                                .transition()
                                .duration(500)
                                .attr("fill", (d) => (node_color(d)))
                                .attr("r", (d) => (d.id == main_node_id ? 7 : 5))

  /* Node vectors. */
  var node_vector_cell_size = 30;
  var node_vectors = node.select("g.node_vector")
  var node_vector_rects = node_vectors.selectAll("rect")
                                      .data(get_node_features)
                                      .join(
                                        enter => enter.append("rect"),
                                        update => update,
                                        exit => exit.remove()
                                      )
                                      .attr("fill", "#f5f2eb")
                                      .attr("stroke", "gray")
                                      .attr("x", 5)
                                      .attr("y", (d, i) => (10 + cell_size(d) * i))
                                      .attr("width",  (d) => cell_size(d))
                                      .attr("height", (d) => cell_size(d));

  var node_vector_text = node_vectors.selectAll("text")
                                      .data(get_node_features)
                                      .join(
                                        enter => enter.append("text"),
                                        update => update,
                                        exit => exit.remove()
                                      )
                                      .attr("text-anchor", "middle")
                                      .attr("dominant-baseline", "central")
                                      .attr("x", 5)
                                      .attr("y", (d, i) => (10 + cell_size(d) * i))
                                      .attr("dx", (d) => 0.5 * cell_size(d))
                                      .attr("dy", (d) => 0.5 * cell_size(d))
                                      .transition()
                                      .duration(1000)
                                      .text((d) => (+d.toFixed(2)));

  node.on('click', select_main_node);

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          })
  }
  
  function cell_size(d) {
    return 30 + 5 * (+d.toFixed(2)).toString().length;
  }
  
  function select_main_node(event, d) {
    $0.value = d.id;
  };
  
  function get_node_features(d){
    return current_features.find((node) => (node.id == d.id)).features;
  }
  
  function node_color(d) {
    if(d.id == main_node_id){
      return main_col_rgb;
    }
    if(main_node_neighbour_ids.includes(d.id)){
      return neigh_col_rgb;
    }
    return "gray";
  }
}
);
  main.variable(observer("style")).define("style", ["html"], function(html){return(
html`
  <style>
    #main-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    
    #labels-div form {
      margin-top: 2%;
      margin-bottom: 2%;
    }

    #labels-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 65%;
    }
    
    #iteration {
      font-weight: bold;
      margin-bottom: 20%;
    }

    #sliders {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
  main.variable(observer()).define(["md"], function(md){return(
md`
### Inputs
`
)});
  main.define("initial graph", function()
{
  return {
    "nodes": [
      { "id": 1, "name": "A", "features": [6] },
      { "id": 2, "name": "B", "features": [2] },
      { "id": 3, "name": "C", "features": [-10] },
      { "id": 4, "name": "D", "features": [1] },
      { "id": 5, "name": "E", "features": [3] },
    ],
    "links": [
      { "source": 2, "target": 5 },
      { "source": 1, "target": 3 },
      { "source": 4, "target": 5 },
      { "source": 5, "target": 1 },
    ]
  }
}
);
  main.variable(observer("mutable graph")).define("mutable graph", ["Mutable", "initial graph"], (M, _) => new M(_));
  main.variable(observer("graph")).define("graph", ["mutable graph"], _ => _.generator);
  main.variable(observer("post_conv_func")).define("post_conv_func", ["ReLU"], function(ReLU){return(
ReLU
)});
  main.variable(observer("ReLU")).define("ReLU", function(){return(
function ReLU(x){
  return x > 0 ? x : 0;  // ReLU!
}
)});
  main.define("initial step", function(){return(
0
)});
  main.variable(observer("mutable step")).define("mutable step", ["Mutable", "initial step"], (M, _) => new M(_));
  main.variable(observer("step")).define("step", ["mutable step"], _ => _.generator);
  main.variable(observer("eps_curr")).define("eps_curr", ["Generators","eps_slider"], function(Generators,eps_slider){return(
Generators.input(eps_slider)
)});
  main.define("initial eps_arr", function(){return(
Array(100).fill(0)
)});
  main.variable(observer("mutable eps_arr")).define("mutable eps_arr", ["Mutable", "initial eps_arr"], (M, _) => new M(_));
  main.variable(observer("eps_arr")).define("eps_arr", ["mutable eps_arr"], _ => _.generator);
  main.variable(observer("eps_update")).define("eps_update", ["mutable eps_arr","step","eps_curr"], function($0,step,eps_curr)
{
  $0.value[step] = eps_curr;
  $0.value = $0.value;
}
);
  main.variable(observer("eps_slider")).define("eps_slider", ["slider","tex","step"], function(slider,tex,step){return(
slider({
  min: -10,
  max: 10, 
  step: 0.1,
  value: this ? this.input.value : 0,
  title: tex`{\epsilon}^{(${step + 1})}`,
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Features
`
)});
  main.variable(observer("update_features")).define("update_features", ["get_neighbour_ids","math"], function(get_neighbour_ids,math){return(
function update_features(features, e_step){
  return features.map((node) => {
    const neighbour_features = get_neighbour_ids(node.id).map(
      (id) => (features.find((node) => (node.id == id)).features)
    );
    
    var neighbour_features_aggregrated;
    if(neighbour_features.length > 0){
      neighbour_features_aggregrated = math.sum(neighbour_features, 0);
    } else {
      neighbour_features_aggregrated = 0;
    }

    var node_updated_features_before_f = math.add(neighbour_features_aggregrated,
                                                  math.multiply(1 + e_step, node.features));

    if(!(node_updated_features_before_f instanceof Array)){
      node_updated_features_before_f = [node_updated_features_before_f]
    }

    return {
      "id": node.id,
      "features": node_updated_features_before_f,
    }
  });
}
)});
  main.variable(observer("compute_features")).define("compute_features", ["eps_update","original_features","copy","update_features","eps_arr","post_conv_func"], function(eps_update,original_features,copy,update_features,eps_arr,post_conv_func){return(
function compute_features(step){
  eps_update;

  var current_features, updated_features_before_f, updated_features;
 
  var features = original_features;
  for(var curr_step = 0; curr_step <= step; ++curr_step){  
    current_features = copy(features);
    updated_features_before_f = update_features(features, eps_arr[curr_step]);
    updated_features = updated_features_before_f.map((node) => ({
      "id": node.id,
      "features": node.features.map(post_conv_func),
    }));

    features = copy(updated_features);
  }
  
  return {
    "current_features": current_features,
    "updated_features_before_f": updated_features_before_f,
    "updated_features": updated_features,
  }
}
)});
  main.variable(observer("all_features")).define("all_features", ["compute_features","step"], function(compute_features,step){return(
compute_features(step)
)});
  main.define("initial original_features", ["copy","graph"], function(copy,graph){return(
copy(graph.nodes.map((node) => ({
  "id": node.id,
  "features": node.features,
})))
)});
  main.variable(observer("mutable original_features")).define("mutable original_features", ["Mutable", "initial original_features"], (M, _) => new M(_));
  main.variable(observer("original_features")).define("original_features", ["mutable original_features"], _ => _.generator);
  main.variable(observer("current_features")).define("current_features", ["all_features"], function(all_features){return(
all_features.current_features
)});
  main.variable(observer("updated_features_before_f")).define("updated_features_before_f", ["all_features"], function(all_features){return(
all_features.updated_features_before_f
)});
  main.variable(observer("updated_features")).define("updated_features", ["all_features"], function(all_features){return(
all_features.updated_features
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Graph Utils
`
)});
  main.variable(observer("randomize_graph")).define("randomize_graph", ["graph","mutable original_features","copy","mutable main_node_id"], function(graph,$0,copy,$1){return(
function randomize_graph() {

  /* Remove old nodes. */
  const num_nodes = Math.max(4, Math.round(10 * Math.random()));
  graph.nodes = [];

  /* Add nodes. */
  for(var id = 1; id <= num_nodes; ++id){
    var feature = [-5 + Math.round(10 * Math.random())];
    var name = String.fromCharCode(64 + id);
    
    graph.nodes.push({
      "id": id,
      "features": feature,
      "name": name,
    })
  }

  /* Remove old edges. */
  graph.links = [];

  /* Add edges. */
  const p = Math.max(0.5, Math.random());
  for(var id1 = 1; id1 <= num_nodes; ++id1){
    for(var id2 = id1 + 1; id2 <= num_nodes; ++id2){
      if(Math.random() <= p){
         graph.links.push({
           "source": id1,
           "target": id2,
         })
      }
    }
  }
  
  $0.value = copy(graph.nodes.map((node) => ({
    "id": node.id,
    "features": node.features,
  })));
  
  $1.value = 1;
}
)});
  main.variable(observer("assign_to_graph")).define("assign_to_graph", ["graph"], function(graph){return(
function assign_to_graph(features){
  graph.nodes.forEach(
    (node) => node.features = (features.find((orig_node) => (node.id == orig_node.id))).features
  );
}
)});
  main.variable(observer("get_neighbour_ids")).define("get_neighbour_ids", ["get_links","unique"], function(get_links,unique){return(
function get_neighbour_ids(node_id){
  return get_links(node_id).map((edge) => {
    if(edge.source.id != undefined){
      if(edge.source.id != node_id){
        return edge.source.id;
      } else {
        return edge.target.id;
      }
    }
    else {
      if(edge.source != node_id){
        return edge.source;
      } else {
        return edge.target;
      }
    }
  }).filter(unique);
}
)});
  main.variable(observer("get_links")).define("get_links", ["graph"], function(graph){return(
function get_links(node_id){
  return graph.links.filter((edge) => (edge.target.id == node_id || edge.target == node_id ||
                                       edge.source.id == node_id || edge.source == node_id));
}
)});
  main.variable(observer("get_neighbours")).define("get_neighbours", ["get_neighbour_ids","graph"], function(get_neighbour_ids,graph){return(
function get_neighbours(node_id){
  return get_neighbour_ids(node_id).map((id) => graph.nodes.find((element) => (element.id == id))).sort(
    (el1, el2) => {
      if(el1.name < el2.name){
        return -1;
      }
      
      if(el1.name > el2.name){
        return 1;
      }
      
      return 0;
    });
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Main Node Quantities
`
)});
  main.define("initial main_node_id", function(){return(
1
)});
  main.variable(observer("mutable main_node_id")).define("mutable main_node_id", ["Mutable", "initial main_node_id"], (M, _) => new M(_));
  main.variable(observer("main_node_id")).define("main_node_id", ["mutable main_node_id"], _ => _.generator);
  main.variable(observer("main_node")).define("main_node", ["graph","main_node_id"], function(graph,main_node_id){return(
graph.nodes.find((node) => (node.id == main_node_id))
)});
  main.variable(observer("main_node_links")).define("main_node_links", ["get_links","main_node_id"], function(get_links,main_node_id){return(
get_links(main_node_id)
)});
  main.variable(observer("main_node_neighbour_ids")).define("main_node_neighbour_ids", ["get_neighbour_ids","main_node_id"], function(get_neighbour_ids,main_node_id){return(
get_neighbour_ids(main_node_id)
)});
  main.variable(observer("main_node_neighbours")).define("main_node_neighbours", ["get_neighbours","main_node_id"], function(get_neighbours,main_node_id){return(
get_neighbours(main_node_id)
)});
  main.variable(observer("main_node_num_neighbours")).define("main_node_num_neighbours", ["main_node_neighbour_ids"], function(main_node_neighbour_ids){return(
main_node_neighbour_ids.length
)});
  main.variable(observer("main_node_current_features")).define("main_node_current_features", ["current_features","main_node_id"], function(current_features,main_node_id){return(
current_features.find((node) => (node.id == main_node_id)).features
)});
  main.variable(observer("main_node_updated_features_before_f")).define("main_node_updated_features_before_f", ["updated_features_before_f","main_node_id"], function(updated_features_before_f,main_node_id){return(
updated_features_before_f.find((node) => (node.id == main_node_id)).features
)});
  main.variable(observer("main_node_updated_features")).define("main_node_updated_features", ["main_node_updated_features_before_f","ReLU"], function(main_node_updated_features_before_f,ReLU){return(
main_node_updated_features_before_f.map(ReLU)
)});
  main.variable(observer("main_node_neighbours_values_agg")).define("main_node_neighbours_values_agg", ["main_node_neighbours","math","current_features"], function(main_node_neighbours,math,current_features){return(
main_node_neighbours.length > 0 ?
  math.sum(
    main_node_neighbours.map(
      (neighbour) => current_features.find((node) => (node.id == neighbour.id)).features
   ))
  : 0
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Formatters
`
)});
  main.variable(observer("formatted_main_node")).define("formatted_main_node", ["main_col","main_node","step"], function(main_col,main_node,step){return(
"{" + main_col + "h_\{" + main_node.name + "\}^{(" + step.toString() + ")}}"
)});
  main.variable(observer("formatted_main_node_new")).define("formatted_main_node_new", ["main_col","main_node","step"], function(main_col,main_node,step){return(
"{" + main_col + "h_\{" + main_node.name + "\}^{(" + (step + 1).toString() + ")}}"
)});
  main.variable(observer("formatted_main_node_current_features")).define("formatted_main_node_current_features", ["main_col","format_feature","main_node_current_features"], function(main_col,format_feature,main_node_current_features){return(
"{" + main_col + format_feature(main_node_current_features) + "}"
)});
  main.variable(observer("formatted_main_node_updated_features")).define("formatted_main_node_updated_features", ["step","format_feature","main_node_updated_features"], function(step,format_feature,main_node_updated_features)
{
  step;
  return format_feature(main_node_updated_features);
}
);
  main.variable(observer("formatted_main_node_updated_features_before_f")).define("formatted_main_node_updated_features_before_f", ["format_feature","main_node_updated_features_before_f"], function(format_feature,main_node_updated_features_before_f){return(
format_feature(main_node_updated_features_before_f)
)});
  main.variable(observer("formatted_neighbours")).define("formatted_neighbours", ["main_node_neighbours","neigh_col","step"], function(main_node_neighbours,neigh_col,step){return(
main_node_neighbours.map((neighbour) => 
"{" + neigh_col + "h_{" + neighbour.name.toString() + "}^{(" + step + ")}}").join(" + ")
)});
  main.variable(observer("formatted_neighbours_values")).define("formatted_neighbours_values", ["main_node_neighbours","neigh_col","format_feature","current_features"], function(main_node_neighbours,neigh_col,format_feature,current_features){return(
main_node_neighbours.map((neighbour) => 
"{" + neigh_col +
format_feature(current_features.find((node) => (node.id == neighbour.id)).features) +
"}"
).join(" + ")
)});
  main.variable(observer("format_feature")).define("format_feature", function(){return(
function format_feature(feat){
  var val;
  if(feat instanceof Array){
    val = feat[0];
  } else {
    val = feat;
  }
  return (+val.toFixed(2)).toString();
}
)});
  main.variable(observer("formatted_neighbours_step_1")).define("formatted_neighbours_step_1", ["main_node_neighbours","formatted_neighbours"], function(main_node_neighbours,formatted_neighbours){return(
main_node_neighbours.length > 0 ?
`\\left(${formatted_neighbours}\\right) +` : ``
)});
  main.variable(observer("formatted_neighbours_step_2")).define("formatted_neighbours_step_2", ["main_node_neighbours","formatted_neighbours_values"], function(main_node_neighbours,formatted_neighbours_values){return(
main_node_neighbours.length > 0 ?
`\\left(${formatted_neighbours_values}\\right) +  ` : ``
)});
  main.variable(observer("formatted_neighbours_step_3")).define("formatted_neighbours_step_3", ["main_node_neighbours","format_feature","main_node_neighbours_values_agg"], function(main_node_neighbours,format_feature,main_node_neighbours_values_agg){return(
main_node_neighbours.length > 0 ?
`\\left(${format_feature(main_node_neighbours_values_agg)}\\right) + `: ``
)});
  main.variable(observer("formatted_eqn_step_4")).define("formatted_eqn_step_4", ["main_node_neighbours","formatted_main_node_updated_features_before_f"], function(main_node_neighbours,formatted_main_node_updated_features_before_f){return(
main_node_neighbours.length > 0 ?
`&= f \\left(${formatted_main_node_updated_features_before_f} \\right) \\\\` : ``
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Miscellaneous
`
)});
  main.variable(observer("copy")).define("copy", function(){return(
function copy(aObject) {
  if (!aObject) {
    return aObject;
  }

  var v;
  var bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];
    bObject[k] = (typeof v === "object") ? copy(v) : v;
  }

  return bObject;
}
)});
  main.variable(observer("unique")).define("unique", function(){return(
function unique (elem, pos,arr) {
  return arr.indexOf(elem) == pos;
}
)});
  main.variable(observer("drag")).define("drag", ["d3"], function(d3){return(
simulation => {
  
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }
  
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }
  
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }
  
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### Imports
`
)});
  const child1 = runtime.module(define1);
  main.import("param_col", child1);
  main.import("neigh_col", child1);
  main.import("neigh_col_rgb", child1);
  main.import("main_col", child1);
  main.import("main_col_rgb", child1);
  const child2 = runtime.module(define2);
  main.import("slider", child2);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@6')
)});
  main.variable(observer("math")).define("math", ["require"], function(require){return(
require('mathjs@7.6.0/dist/math.min.js')
)});
  return main;
}