// 切换分析模式
d3.select("#analyse-button")
    .on("click", function() {
        network_config.special = !network_config.special;
        d3.select("#analyse-switch").attr("class", network_config.special === true ? "fa fa-toggle-on" : "fa fa-toggle-off");
        fill_circle();
    })

// 信息显示开关
d3.select("#info-show")
    .on("click", function() {
        d3.select(this).classed("high-light", network_config.info_show_state = !network_config.info_show_state);
        d3.select("#info-layout").style("display", network_config.info_show_state === true ? "block" : "none");
    })

// 框选模式开关
d3.select("#brush-mode")
    .on("click", function() {
        d3.select(this).classed("high-light", network_config.isBrush = !network_config.isBrush);
        brush_svg.style("display", network_config.isBrush === true ? "block" : "none");
    })

// 柱状图显示开关
d3.select("#bar-graph-show")
    .on("click", function () {
        d3.select(this).classed("high-light", network_config.bar_state = !network_config.bar_state);
        d3.select("#bar-graph")
            .attr("transform", "translate(" + (window.innerWidth - bar_config.width + 2) + ", " + 32 + ")")
            // .style("display", network_config.bar_state === true ? "block" : "none");
        if (network_config.bar_state === true) {
            bar_graph.style("-webkit-animation", "showbar 3s")
                .style("opacity", "1");
        }
        else {
            bar_graph.style("-webkit-animation", "hidebar 3s")
                .style("opacity", "0");
        }
    })

// 设置面板显示开关
d3.selectAll("#setting-button")
    .on("click", function() {
        network_config.setting_state = !network_config.setting_state;
        if (network_config.setting_state === true) {
            d3.select("#setting-box")
                .style("-webkit-animation", "show 3s")
                .style("right", "0px");
        }
        else {
            d3.select("#setting-box")
                .style("-webkit-animation", "hide 3s")
                .style("right", "-300px");
        }
    });

// 节点标签显示开关
d3.select("#node-button").on("click", function() {
        network_config.node_text_state = !network_config.node_text_state;
        d3.select("#node-switch").attr("class", network_config.node_text_state === true ? "fa fa-toggle-on" : "fa fa-toggle-off");
        d3.selectAll(".node text").style("display", network_config.node_text_state === true ? "block" : "none");
    });

// 关系标签显示开关
d3.select("#link-button")
    .on("click", function() {
        network_config.link_text_state = !network_config.link_text_state;
        d3.select("#link-switch").attr("class", network_config.link_text_state === true ? "fa fa-toggle-on" : "fa fa-toggle-off");
        text_layout.selectAll("text").style("display", network_config.link_text_state === true ? "block" : "none");
    });

// 箭头显示开关
d3.select("#marker-button")
    .on("click", function() {
        network_config.marker_state = !network_config.marker_state;
        d3.select("#marker-switch").attr("class", network_config.marker_state === true ? "fa fa-toggle-on" : "fa fa-toggle-off");
        d3.selectAll("#resolved")
            .select("path")
            .style("display", network_config.marker_state === true ? "block" : "none");
    });