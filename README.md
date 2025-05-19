# Belly Button Biodiversity Dashboard

## Project Summary

The Belly Button Biodiversity Dashboard is an interactive web application designed to explore the microbial species found in the navels of various individuals. Using microbiome data, the dashboard offers visual insights into each participant's unique bacterial profile, including species distribution and personal demographic information.

---

## Key Features

- **Dynamic Dropdown Menu**  
  Allows users to choose a test subject, triggering updates across all visualizations and panels.

- **Top 10 OTUs Bar Chart**  
  Displays the top 10 most prevalent Operational Taxonomic Units (OTUs) found in the selected individual's sample.

- **Full OTU Bubble Chart**  
  Visualizes the complete bacterial profile using a bubble chart, where bubble size reflects abundance and color indicates OTU ID.

- **Demographic Info Panel**  
  Shows participant details such as gender, age, ethnicity, and frequency of belly button washing.

---

## Technologies Used

- **JavaScript** – Handles interactivity and logic
- **D3.js** – Loads and processes JSON data, dynamically updates the DOM
- **Plotly.js** – Renders interactive bar and bubble charts
- **Bootstrap** – Provides a responsive, styled layout

---

## Getting Started

1. **Open the Application**  
   Launch the `index.html` file in your preferred web browser.

2. **Choose a Subject**  
   Use the dropdown menu to select a test subject by ID. All visualizations and demographic info will update based on your selection.

3. **Explore the Data**  
   - The **bar chart** reveals the top 10 OTUs in descending order of sample value.
   - The **bubble chart** shows the entire OTU spectrum for the subject.
   - The **metadata panel** displays demographic details related to the selected participant.

---

## How It Works

The application relies on a local JSON file (`samples.json`) that contains microbiome data and metadata for all subjects. When the page loads:

1. The data is fetched using D3.js.
2. Sample IDs are extracted and loaded into a dropdown menu.
3. Upon selection, the app:
   - Filters sample-specific OTU and metadata information
   - Updates the bar and bubble charts using Plotly
   - Refreshes the demographic panel with the latest subject information

---

## Notes

- The dashboard is entirely client-side and does not require a server.
- Make sure all files, including `samples.json`, are in the same directory when opening `index.html`.

