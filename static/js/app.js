function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    const metadata = data.metadata;
    const result = metadata.filter(sampleObj => sampleObj.id == sample)[0];
    const panel = d3.select("#sample-metadata");
    panel.html("");
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

function buildCharts(sample) {
  d3.json("samples.json").then((data) => {
    const samples = data.samples;
    const result = samples.filter(sampleObj => sampleObj.id == sample)[0];
    const otu_ids = result.otu_ids;
    const otu_labels = result.otu_labels;
    const sample_values = result.sample_values;

    // Top 10 OTUs
    const topOtuIds = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
    const topSampleValues = sample_values.slice(0, 10).reverse();
    const topOtuLabels = otu_labels.slice(0, 10).reverse();

    // Bar Chart
    const barData = [{
      type: "bar",
      x: topSampleValues,
      y: topOtuIds,
      text: topOtuLabels,
      orientation: "h"
    }];

    const barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: "Number of Bacteria" },
      yaxis: { title: "OTU ID" }
    };

    Plotly.newPlot("bar", barData, barLayout);

    // Bubble Chart
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];

    const bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Value" },
      showlegend: false
    };

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

function init() {
  d3.json("samples.json").then((data) => {
    const sampleNames = data.names;
    const dropdown = d3.select("#selDataset");

    sampleNames.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  buildCharts(newSample);
  buildMetadata(newSample);
}

init();