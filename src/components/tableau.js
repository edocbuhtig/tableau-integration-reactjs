import React from "react";

const { tableau } = window;

class Tableauholder extends React.Component{
    
    componentDidMount() {
        this.initTableau();
    }

    initTableau() {

        var viz;

        var vizUrl = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";

        var options = {
          hideTabs: true,
          onFirstInteractive: function () {
              console.log("Run this code when the viz has finished loading.");
          }
        };

        var vizContainer = document.getElementById("vizContainer");
    
        // cleanup
        if (viz) {
          viz.dispose();
          viz = null;
        }
    
        viz = new tableau.Viz(vizContainer, vizUrl, options);
    }
    
  
    render() {
        return <div id="vizContainer"></div>;
    }
}


export default Tableauholder;
