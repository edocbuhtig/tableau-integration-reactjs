## Tableau worksheet integration inside Reactjs web app

## Screenshot

![Tableau React](/screenshot/tableau-public-demo.png)

## Intro

This code combines ES + Javascript mixture to demo how to achieve results using both.

### Import Tableau JS API Lib 

into `<head>` of **/public/index.html**

```
<script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
```

### Create a window instance for tableau object

```
const { tableau } = window;
```

### Follow the Tableau API examples for filters and variation of worksheets
```
https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_samples.htm
```

### Tutorial

Read the complete [tutorial here](https://medium.com/@sunilk/adding-salesforce-tableau-published-worksheets-in-your-react-js-application-73cd4fcb0de4)
