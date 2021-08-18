import define1 from "./gnn-styles.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Interactive GNN Equations`
)});
  main.variable(observer("fig_div")).define("fig_div", ["html","fig"], function(html,fig){return(
html`
  ${fig}
`
)});
  main.variable(observer("text_div")).define("text_div", ["html","final_predictions_statement","get_params_statement","selected_model"], function(html,final_predictions_statement,get_params_statement,selected_model){return(
html`
  ${final_predictions_statement}
  ${get_params_statement(selected_model.tag)}
`
)});
  main.variable(observer("fig")).define("fig", ["html","eqn_list","gcn_figure","gat_figure","gin_figure","graphsage_figure"], function(html,eqn_list,gcn_figure,gat_figure,gin_figure,graphsage_figure){return(
html`
<figure id="gnn-models" data-show="gcn">
  ${eqn_list}
  ${gcn_figure}
  ${gat_figure}
  ${gin_figure}
  ${graphsage_figure}
</figure>
`
)});
  main.variable(observer("eqn_list")).define("eqn_list", ["html"], function(html){return(
html`<ul class="list"></ul>`
)});
  main.variable(observer("interactive_list")).define("interactive_list", ["d3","fig","get_figure_height","eqn_list","gnn_models","handle_click"], function(d3,fig,get_figure_height,eqn_list,gnn_models,handle_click)
{
  d3.select(fig).style('height', get_figure_height(d3.select(fig).attr('data-show')));
  d3.select(eqn_list)
             .selectAll('li')
             .data(gnn_models)
             .join(
               enter => enter.append('li')
                             .text(d => d.descr)
                             .classed('selected', (d) => (d.tag == d3.select(fig).attr('data-show')))
                             .on('click', handle_click),
               update => update,
               exit => exit.remove(),
             );
}
);
  main.variable(observer("select_fig")).define("select_fig", ["mutable selected_model","gnn_models","d3","fig","get_figure_height"], function($0,gnn_models,d3,fig,get_figure_height){return(
function select_fig(tag){
  $0.value = gnn_models.find((model) => (model.tag == tag));
  d3.select(fig).attr('data-show', tag);
  d3.select(fig).style('height', get_figure_height(tag));
  d3.select(fig).selectAll('li').classed('selected', (d) => (d ? d.tag == tag : false));
}
)});
  main.variable(observer("handle_click")).define("handle_click", ["select_fig"], function(select_fig){return(
function handle_click(event, d) {
  select_fig(d.tag);
}
)});
  main.variable(observer("gnn_models")).define("gnn_models", function(){return(
[
  {'descr': 'GCN', 'tag': 'gcn'},
  {'descr': 'GAT', 'tag': 'gat'},
  {'descr': 'GraphSAGE', 'tag': 'graphsage'},
  {'descr': 'GIN', 'tag': 'gin'}
]
)});
  main.define("initial selected_model", ["gnn_models","d3","fig"], function(gnn_models,d3,fig){return(
gnn_models.find((model) => model.tag == d3.select(fig).attr('data-show'))
)});
  main.variable(observer("mutable selected_model")).define("mutable selected_model", ["Mutable", "initial selected_model"], (M, _) => new M(_));
  main.variable(observer("selected_model")).define("selected_model", ["mutable selected_model"], _ => _.generator);
  main.variable(observer("get_figure_height")).define("get_figure_height", function(){return(
function get_figure_height(tag) {
  if(tag == 'gcn'){
    return '510px';
  }
  else if(tag == 'gat'){
    return '710px';
  }
  else if(tag == 'graphsage'){
    return '540px';
  }
  else if(tag == 'gin'){
    return '510px';
  }
  else {
    return '510px';
  }
}
)});
  main.variable(observer("final_predictions_statement")).define("final_predictions_statement", ["md","tex","main_col","selected_model"], function(md,tex,main_col,selected_model){return(
md`
Predictions can be made at each node by using the final computed embedding:
${tex.block`
\hat{y_v} = \text{PREDICT}({${main_col}h_v^{(K)}})
`}
where ${tex`\text{PREDICT}`} is generally another neural network, learnt together with the ${selected_model.descr} model.
`
)});
  main.variable(observer("get_params_statement")).define("get_params_statement", ["md","tex","param_col","neigh_col","main_col"], function(md,tex,param_col,neigh_col,main_col){return(
function get_params_statement(tag){
  if(tag == 'gcn'){
    return md`For each step ${tex`k`}, the function ${tex`${param_col} f^{(k)}`}, matrices ${tex`${param_col} W^{(k)}`} and ${tex`${param_col} B^{(k)}`} are shared across all nodes.

This allows the GCN model to scale well, because the number of parameters in the model is not tied to the size of the graph.

The variant we discuss here is the 2-parameter model from the original paper <d-cite key="semi-supervised-gcn"></d-cite>,
which is more expressive. We also consider the following normalization (iteration subscripts omitted):
${tex.block`
{${param_col} f}\left({${param_col} W} \cdot \sum_{u \in \mathcal{N}(v)} \frac{${neigh_col} h_u}{|\mathcal{N}(v)|} + {${param_col} B} \cdot {${main_col} h_v} \right)`
}
         
instead of the normalization defined in the original paper: <d-cite key="semi-supervised-gcn"></d-cite>
${tex.block`
{${param_col} f}\left({${param_col} W} \cdot \sum_{u \in \mathcal{N}(v)} \frac{${neigh_col} h_u}{\sqrt{|\mathcal{N}(u)||\mathcal{N}(v)|}} + {${param_col} B} \cdot {${main_col} h_v} \right)`
}
              for ease of exposition.
`
  }
  else if(tag == 'gat'){
    return md`For each step ${tex`k`}, the function ${tex`${param_col} f^{(k)}`}, matrices ${tex`${param_col} W^{(k)}`} and attention mechanism ${tex`${param_col} A^{(k)}`} (generally, another neural network) are shared across all nodes.

This allows the GAT model to scale well, because the number of parameters in the model is not tied to the size of the graph.

Here, we discuss the GAT variant with single-headed attention only. The multi-headed attention variant is similar. We are also free to choose any attention mechanism above: our choice below is intended to keep equations simple.
`
  }
  else if(tag == 'graphsage'){
    return md`For each step ${tex`k`}, the function ${tex`${param_col} f^{(k)}`}, ${tex`${param_col} \text{AGG}`} and matrix ${tex`${param_col} W^{(k)}`} are shared across all nodes.

This allows the GraphSAGE model to scale well, because the number of parameters in the model is not tied to the size of the graph.

The original GraphSAGE paper considers the following choices for ${tex`\underset{{u \in \mathcal{N}(v)}}{${param_col} \text{AGG}}(\{ {${neigh_col} h_u^{(k - 1)}} \})`}:
* Mean (similar to the GCN):
${tex.block`
  {${param_col} W_{\text{pool}}^{(k)}} \cdot \frac{{${main_col} h_v^{(k - 1)}} + \sum\limits_{u \in \mathcal{N}(v)} {${neigh_col} h_u^{(k - 1)}}}{1 + |\mathcal{N}(v)|}`
}
* Dimension-wise Maximum:
${tex.block`
  \max\limits_{u \in \mathcal{N}(v)} \{ σ({${param_col} W_{\text{pool}}^{(k)}} {${neigh_col} h_u^{(k - 1)}} + {${param_col} b}) \}`
}
* LSTM (after ordering the sequence of neighbours).

Here, we will consider an RNN aggregator, since it's easier to explain than the LSTM aggregator but is built on the same ideas.

Further, the original GraphSAGE paper performs 'neighbourhood sampling': irrespective of how large the actual neighbourhood around a node is, a fixed-size random sample of the neighbourhood is taken. This increases the variance in the computed embeddings, but allows GraphSAGE to be used on very large graphs.

In our visualizations below, we will sample the entire neighbourhood, since we work on small graphs.
`
  }
  else if(tag == 'gin'){
    return md`For each step ${tex`k`}, the function ${tex`${param_col} f^{(k)}`} and real-valued parameter ${tex`${param_col} \epsilon^{(k)}`} are shared across all nodes.

This allows the GIN model to scale well, because the number of parameters in the model is not tied to the size of the graph.
`
  }
  else {
    return 'parameters';
  }
}
)});
  main.variable(observer("weights_statement")).define("weights_statement", ["md","selected_model"], function(md,selected_model){return(
md`This allows the ${selected_model.descr} model to scale well, because the number of parameters in the model is not tied to the size of the graph.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Figures`
)});
  main.variable(observer("gcn_figure")).define("gcn_figure", ["html","tex","main_col","param_col","neigh_col"], function(html,tex,main_col,param_col,neigh_col){return(
html`
<div style="position:relative; left:30px; top:0px" class="gnn-model-gcn">

  <span style="position:absolute; left:0px; top:0px">
    ${tex.block`${main_col} h_v^{(0)}`}
  </span>

  <span style="position:absolute; left:75px; top:0px">
    ${tex.block`=`}
  </span>
    
  <span style="position:absolute; left:150px; top:0px">
    ${tex.block`x_v`} 
  </span>
  
  <figcaption style="position:absolute; left:0px; top:60px; width:60px;">
    Node ${tex`v`}'s initial embedding.
  </figcaption>
  
  <figcaption style="position:absolute; left:150px; top:60px; width:120px;">
    ... is just node ${tex`v`}'s original features.
  </figcaption>

  <figcaption style="position:absolute; left:200px; top:20px">
    for all ${tex`v \in V.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:130px">
    and for ${tex`k = 1, 2, \ldots `} upto ${tex` K`}:
  </figcaption>

  <span style="position:absolute; left:0px; top:190px">
    ${tex.block`${main_col} h_v^{(k)}`}
  </span>

  <span style="position:absolute; left:75px; top:190px">
    ${tex.block`=`}
  </span>

  <span style="position:absolute; left:110px; top:152px">
    ${tex.block`{${param_col} f^{(k)}}\left({${param_col} W^{(k)}} \cdot \frac{\sum\limits_{u \in \mathcal{N}(v)} {${neigh_col} h_u^{(k - 1)}}}{|\mathcal{N}(v)|} + {${param_col} B^{(k)}} \cdot {${main_col} h_v^{(k - 1)}}\right)`} 
  </span>

  <figcaption style="position:absolute; left:0px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k`}.
  </figcaption>

  <figcaption style="position:absolute; left:240px; top:275px; width:100px;">
    Mean of ${tex`v`}'s neighbour's embeddings at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:410px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:520px; top:210px">
    for all ${tex`v \in V.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:370px">
    Color Codes:
    <ul class="legend">
        <li><span class="box main"></span> Embedding of node ${tex`v`}.</li>
        <li><span class="box neigh"></span> Embedding of a neighbour of node ${tex`v`}.</li>
        <li><span class="box param"></span> (Potentially) Learnable parameters. </li>
    </ul>
  </figcaption>
</div>
`
)});
  main.variable(observer("gat_figure")).define("gat_figure", ["html","tex","main_col","param_col","neigh_col"], function(html,tex,main_col,param_col,neigh_col){return(
html`
<div style="position:relative; left:30px; top:0px" class="gnn-model-gat">

  <span style="position:absolute; left:0px; top:0px">
    ${tex.block`${main_col} h_v^{(0)}`}
  </span>

  <span style="position:absolute; left:75px; top:0px">
    ${tex.block`=`}
  </span>
    
  <span style="position:absolute; left:150px; top:0px">
    ${tex.block`x_v`} 
  </span>
  
  <figcaption style="position:absolute; left:0px; top:60px; width:60px;">
    Node ${tex`v`}'s initial embedding.
  </figcaption>
  
  <figcaption style="position:absolute; left:150px; top:60px; width:120px;">
    ... is just node ${tex`v`}'s original features.
  </figcaption>

  <figcaption style="position:absolute; left:200px; top:20px">
    for all ${tex`v \in V.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:130px">
    and for ${tex`k = 1, 2, \ldots `} upto ${tex` K`}:
  </figcaption>

  <span style="position:absolute; left:0px; top:190px">
    ${tex.block`${main_col} h_v^{(k)}`}
  </span>

  <span style="position:absolute; left:75px; top:190px">
    ${tex.block`=`}
  </span>

  <span style="position:absolute; left:110px; top:165px">
    ${tex.block`{${param_col}  f^{(k)}}\left({${param_col}  W^{(k)}} \cdot \left[\sum\limits_{u \in \mathcal{N}(v)} \alpha_{vu}^{(k - 1)} {${neigh_col} h_u^{(k - 1)}} + \alpha_{vv}^{(k - 1)} {${main_col} h_v^{(k - 1)}}\right]\right)`} 
  </span>

  <figcaption style="position:absolute; left:0px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k`}.
  </figcaption>

  <figcaption style="position:absolute; left:280px; top:275px; width:120px;">
    Weighted mean of ${tex`v`}'s neighbour's embeddings at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:465px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:590px; top:210px; width:90px;">
    for all ${tex`v \in V.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:380px">
    where the attention weights ${tex`\alpha^{(k)}`} are generated by an attention mechanism ${tex`{${param_col} A^{(k)}}`}, normalized such that the sum over all neighbours of each node ${tex`v`} is ${tex`1`}:
  </figcaption>

  <span style="position:absolute; left:0px; top:450px">
    ${tex.block`\alpha_{vu}^{(k)}`}
  </span>

  <span style="position:absolute; left:75px; top:450px">
    ${tex.block`=`}
  </span>

  <span style="position:absolute; left:130px; top:435px">
    ${tex.block`\frac{{${param_col} A^{(k)}}({${main_col} h_v^{(k)}}, {${neigh_col} h_u^{(k)}})}{\sum\limits_{w \in \mathcal{N}(v)}{${param_col} A^{(k)}}({${main_col} h_v^{(k)}}, {${neigh_col} h_w^{(k)}})}`}
  </span>

  <figcaption style="position:absolute; left:390px; top:470px">
    for all ${tex`(v, u) \in E.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:570px">
    Color Codes:
    <ul class="legend">
        <li><span class="box main"></span> Embedding of node ${tex`v`}.</li>
        <li><span class="box neigh"></span> Embedding of a neighbour of node ${tex`v`}.</li>
        <li><span class="box param"></span> (Potentially) Learnable parameters. </li>
    </ul>
  </figcaption>
  </div>
`
)});
  main.variable(observer("graphsage_figure")).define("graphsage_figure", ["html","tex","main_col","param_col","neigh_col"], function(html,tex,main_col,param_col,neigh_col){return(
html`
<div style="position:relative; left:30px; top:0px" class="gnn-model-graphsage">

    <span style="position:absolute; left:0px; top:0px">
    ${tex.block`${main_col} h_v^{(0)}`}
  </span>

  <span style="position:absolute; left:75px; top:0px">
    ${tex.block`=`}
  </span>
    
  <span style="position:absolute; left:150px; top:0px">
    ${tex.block`x_v`} 
  </span>
  
  <figcaption style="position:absolute; left:0px; top:60px; width:60px;">
    Node ${tex`v`}'s initial embedding.
  </figcaption>
  
  <figcaption style="position:absolute; left:150px; top:60px; width:120px;">
    ... is just node ${tex`v`}'s original features.
  </figcaption>

  <figcaption style="position:absolute; left:200px; top:20px">
    for all ${tex`v \in V.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:130px">
    and for ${tex`k = 1, 2, \ldots `} upto ${tex` K`}:
  </figcaption>

  <span style="position:absolute; left:0px; top:190px">
    ${tex.block`${main_col} h_v^{(k)}`}
  </span>

  <span style="position:absolute; left:75px; top:190px">
    ${tex.block`=`}
  </span>

  <span style="position:absolute; left:110px; top:177px">
    ${tex.block`{${param_col} f^{(k)}}\left({${param_col} W^{(k)}} \cdot \left[\underset{{u \in \mathcal{N}(v)}}{${param_col} \text{AGG}}(\{ {${neigh_col} h_u^{(k - 1)}} \}), \ {${main_col} h_v^{(k - 1)}}\right]\right)`} 
  </span>

  <figcaption style="position:absolute; left:0px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k`}.
  </figcaption>

  <figcaption style="position:absolute; left:230px; top:275px; width:100px;">
    Aggregation of ${tex`v`}'s neighbour's embeddings at step ${tex`k - 1`} ...
  </figcaption>
  
  <figcaption style="position:absolute; left:300px; top:355px; width:100px;">
      ... concatenated with ...
  </figcaption>

  <figcaption style="position:absolute; left:380px; top:275px; width:90px;">
    ... Node ${tex`v`}'s embedding at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:520px; top:210px">
    for all ${tex`v \in V.`}
  </figcaption>

  <figcaption style="position:absolute; left:0px; top:400px">
    Color Codes:
    <ul class="legend">
        <li><span class="box main"></span> Embedding of node ${tex`v`}.</li>
        <li><span class="box neigh"></span> Embedding of a neighbour of node ${tex`v`}.</li>
        <li><span class="box param"></span> (Potentially) Learnable parameters. </li>
    </ul>
  </figcaption>
</div>
`
)});
  main.variable(observer("gin_figure")).define("gin_figure", ["html","tex","main_col","param_col","neigh_col"], function(html,tex,main_col,param_col,neigh_col){return(
html`
<div style="position:relative; left:30px; top:0px" class="gnn-model-gin">

  <span style="position:absolute; left:0px; top:0px">
    ${tex.block`${main_col} h_v^{(0)}`}
  </span>

  <span style="position:absolute; left:75px; top:0px">
    ${tex.block`=`}
  </span>
    
  <span style="position:absolute; left:150px; top:0px">
    ${tex.block`x_v`} 
  </span>
  
  <figcaption style="position:absolute; left:0px; top:60px; width:60px;">
    Node ${tex`v`}'s initial embedding.
  </figcaption>
  
  <figcaption style="position:absolute; left:150px; top:60px; width:120px;">
    ... is just node ${tex`v`}'s original features.
  </figcaption>

  <figcaption style="position:absolute; left:200px; top:20px">
    for all ${tex`v \in V.`}
  </figcaption>
  
  <figcaption style="position:absolute; left:0px; top:130px">
    and for ${tex`k = 1, 2, \ldots `} upto ${tex` K`}:
  </figcaption>

  <span style="position:absolute; left:0px; top:190px">
    ${tex.block`${main_col} h_v^{(k)}`}
  </span>

  <span style="position:absolute; left:75px; top:190px">
    ${tex.block`=`}
  </span>

  <span style="position:absolute; left:110px; top:165px">
    ${tex.block`{${param_col} f^{(k)}}\left(\sum\limits_{u \in \mathcal{N}(v)} {${neigh_col} h_u^{(k - 1)}} + (1 + {${param_col} \epsilon^{(k)}}) \cdot {${main_col} h_v^{(k - 1)}}\right)`} 
  </span>

  <figcaption style="position:absolute; left:0px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k`}.
  </figcaption>

  <figcaption style="position:absolute; left:200px; top:275px; width:100px;">
    Sum of ${tex`v`}'s neighbour's embeddings at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:390px; top:275px; width:90px;">
    Node ${tex`v`}'s embedding at step ${tex`k - 1`}.
  </figcaption>

  <figcaption style="position:absolute; left:520px; top:210px">
    for all ${tex`v \in V.`}
  </figcaption>

  <figcaption style="position:absolute; left:0px; top:370px">
    Color Codes:
    <ul class="legend">
        <li><span class="box main"></span> Embedding of node ${tex`v`}.</li>
        <li><span class="box neigh"></span> Embedding of a neighbour of node ${tex`v`}.</li>
        <li><span class="box param"></span> (Potentially) Learnable parameters. </li>
    </ul>
  </figcaption>

  </div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`# Appendix`
)});
  const child1 = runtime.module(define1);
  main.import("param_col_rgb", child1);
  main.import("param_col", child1);
  main.import("main_col_rgb", child1);
  main.import("main_col", child1);
  main.import("neigh_col_rgb", child1);
  main.import("neigh_col", child1);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require('d3@6')
)});
  main.variable(observer("style")).define("style", ["html","main_col_rgb","neigh_col_rgb","param_col_rgb"], function(html,main_col_rgb,neigh_col_rgb,param_col_rgb){return(
html`
<style>
  #gnn-models ul.list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 4px;
    text-align: center;
    padding: 0;
    list-style: none;
  }

  #gnn-models ul.list li {
    margin: 0;
    background: #f3f3f3;
    border-bottom: 3px solid #e3e3e3;
    cursor: pointer;
    line-height: 2em;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  #gnn-models ul.list li:hover {
    border-bottom-color: #D9D9D9;
  }

  #gnn-models ul.list li.selected {
    background: #D9D9D9;
    border-bottom-color: #D9D9D9;
  }

  #gnn-models div {
    margin: 0 auto 10px auto;
    display: none;
  }
   
  #gnn-models {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
  
  #gnn-models[data-show='gcn'] .gnn-model-gcn,
  #gnn-models[data-show='gin'] .gnn-model-gin,
  #gnn-models[data-show='graphsage'] .gnn-model-graphsage,
  #gnn-models[data-show='gat'] .gnn-model-gat {
    display: block;
  }
  
  /* Legend */
  .legend {
    list-style: none;
    margin-top: 5px;
  }
  .legend li {
    margin-bottom: 0;
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
  .legend .neigh { background-color: ${neigh_col_rgb}; }
  .legend .param { background-color: ${param_col_rgb}; }
</style>
`
)});
  return main;
}